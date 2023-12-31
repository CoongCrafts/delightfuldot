import { assert, HASHERS } from '@delightfuldot/utils';
import { $StorageData, CodecRegistry, Pallet, StorageDataLike, StorageEntry, StorageKey } from '@delightfuldot/codecs';
import { hexToU8a, stringCamelCase, u8aConcat, u8aToHex } from '@polkadot/util';
import { xxhashAsU8a } from '@polkadot/util-crypto';

export class QueryableStorage {
  readonly pallet: Pallet;
  readonly storageEntry: StorageEntry;
  constructor(
    readonly registry: CodecRegistry,
    readonly palletName: string,
    readonly storageItem: string,
  ) {
    this.pallet = this.#getPallet();
    this.storageEntry = this.#getStorageEntry();
  }

  encodeKey(keyInput?: any): StorageKey {
    const palletNameHash = xxhashAsU8a(this.pallet.name, 128);
    const storageItemHash = xxhashAsU8a(this.storageEntry.name, 128);
    const prefixHash = u8aConcat(palletNameHash, storageItemHash);

    const { type } = this.storageEntry;

    if (type.tag === 'Plain') {
      return u8aToHex(prefixHash);
    } else if (type.tag === 'Map') {
      const { hashers, keyTypeId } = type.value;
      const extractedInputs = this.#extractRequiredKeyInputs(keyInput, hashers.length);

      let keyTypeIds = [keyTypeId];
      if (hashers.length > 1) {
        const { type } = this.registry.findPortableType(keyTypeId);

        assert(type.tag === 'Tuple', 'Key type should be a tuple!');
        if (type.tag === 'Tuple') {
          keyTypeIds = type.value.fields;
        }
      }

      const keyParts = keyTypeIds.map((keyId, index) => {
        const input = extractedInputs[index];
        const hasher = HASHERS[hashers[index]];
        const $keyCodec = this.registry.findPortableCodec(keyId);
        return hasher($keyCodec.tryEncode(input));
      });

      return u8aToHex(u8aConcat(prefixHash, ...keyParts));
    }

    throw Error(`Invalid storage entry type: ${type}`);
  }

  decodeValue(raw?: StorageDataLike | null): any {
    const {
      modifier,
      type: {
        value: { valueTypeId },
      },
      default: defaultValue,
    } = this.storageEntry;

    if (raw === null || raw === undefined) {
      if (modifier === 'Optional') {
        return undefined;
      } else if (modifier === 'Default') {
        return this.registry.findPortableCodec(valueTypeId).tryDecode(hexToU8a(defaultValue));
      }
    } else {
      return this.registry.findPortableCodec(valueTypeId).tryDecode($StorageData.tryEncode(raw));
    }
  }

  #extractRequiredKeyInputs(keyInput: any, numberOfValue: number): any[] {
    if (numberOfValue === 0) {
      return [];
    } else {
      if (keyInput === undefined) {
        throw new Error(`Invalid key inputs, required ${numberOfValue} inputs`);
      }

      if (numberOfValue === 1) {
        return [keyInput];
      } else {
        if (!Array.isArray(keyInput)) {
          throw new Error(`Input should be an array with ${numberOfValue} values`);
        }

        if (keyInput.length !== numberOfValue) {
          throw new Error(`Mismatch key inputs length, required an array of ${numberOfValue} values`);
        }

        return keyInput.slice(0, numberOfValue);
      }
    }
  }

  #getPallet(): Pallet {
    const targetPallet = this.registry.metadata!.pallets.find(
      (p) => stringCamelCase(p.name) === stringCamelCase(this.palletName),
    )!;

    assert(targetPallet, `Pallet not found: ${this.palletName}`);

    return targetPallet;
  }

  #getStorageEntry(): StorageEntry {
    const targetEntry = this.pallet.storage?.entries?.find(
      (entry) => stringCamelCase(entry.name) === stringCamelCase(this.storageItem),
    )!;

    assert(targetEntry, `Storage item not found: ${this.storageItem}`);

    return targetEntry;
  }
}
