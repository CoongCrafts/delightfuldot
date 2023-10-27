import { stringLowerFirst } from '@polkadot/util';
import { normalizeName } from '@delightfuldot/utils';
import { ApiGen } from '../generator';
import { commentBlock, format } from './utils';

export class ConstsGen extends ApiGen {
  generate() {
    const { pallets } = this.metadata;

    this.typesGen.clearCache();

    let defTypeOut = '';
    for (let pallet of pallets) {
      const typedConstants = pallet.constants.map((one) => ({
        name: normalizeName(one.name),
        type: this.typesGen.generateType(one.typeId, 1),
        docs: one.docs,
      }));

      defTypeOut += `${stringLowerFirst(pallet.name)}: {${typedConstants
        .map(({ name, type, docs }) => `${commentBlock(docs)}${name}: ${type}`)
        .join(',\n')}},`;
    }

    // TODO improve this!
    const toImportTypes = [...this.typesGen.usedNameTypes];

    return format(`
// Generated by @delightfuldot/codegen

import type { GenericChainConsts } from "@delightfuldot/types";
import type {${toImportTypes.join(', ')}} from './types';

export interface ChainConsts extends GenericChainConsts {
  ${defTypeOut}
}
  `);
  }
}
