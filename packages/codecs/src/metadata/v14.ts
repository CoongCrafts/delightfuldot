import * as $ from '@delightfuldot/shape';
import { $Type, $TypeId } from './scale-info';

export const $Hasher = $.FlatEnum([
  'blake2_128',
  'blake2_256',
  'blake2_128Concat',
  'twox128',
  'twox256',
  'twox64Concat',
  'identity',
]);

export const $StorageEntry = $.Struct({
  name: $.str,
  modifier: $.Enum({ Optional: null, Default: null }),
  type: $.Enum({
    Plain: $.Struct({ value: $TypeId }),
    Map: $.Struct({
      hashers: $.Vec($Hasher),
      key: $TypeId,
      value: $TypeId,
    }),
  }),
  default: $.PrefixedHex,
  docs: $.Vec($.str),
});

export const $Constants = $.Struct({
  name: $.str,
  typeId: $TypeId,
  value: $.PrefixedHex,
  docs: $.Vec($.str),
});

export const $Pallet = $.Struct({
  name: $.str,
  storage: $.Option(
    $.Struct({
      prefix: $.str,
      entries: $.Vec($StorageEntry),
    }),
  ),
  calls: $.Option($TypeId),
  event: $.Option($TypeId),
  constants: $.Vec($Constants),
  error: $.Option($TypeId),
  index: $.u8,
});

export type Pallet = $.Output<typeof $Pallet>;

export const $ExtrinsicDef = $.Struct({
  typeId: $TypeId,
  version: $.u8,
  signedExtensions: $.Vec(
    $.Struct({
      ident: $.str,
      typeId: $TypeId,
      additionalSigned: $TypeId,
    }),
  ),
});

export type ExtrinsicDef = $.Output<typeof $ExtrinsicDef>;

export const $MetadataV14 = $.Struct({
  types: $.Vec($Type),
  pallets: $.Vec($Pallet),
  extrinsic: $ExtrinsicDef,
  runtimeType: $TypeId,
});

export type MetadataV14 = $.Output<typeof $MetadataV14>;
