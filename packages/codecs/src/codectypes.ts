import * as $ from '@delightfuldot/shape';

export type CodecName = `$${string}`;
export interface CodecType {
  name: CodecName;
  $codec: $.AnyShape;
  typeIn: string;
  typeOut: string;
}

export const normalizeCodecName = (name: string | CodecName): CodecName => {
  return name.startsWith('$') ? (name as CodecName) : `$${name}`;
};

export const knownCodecTypes: Record<CodecName, CodecType> = {};

export interface CodecTypePartial {
  [name: CodecName]: $.AnyShape;
  typeIn: string;
  typeOut?: string;
}

const filterCodecName = (name: string) => name.length > 1 && name.startsWith('$');

export const registerCodecType = (codecType: CodecTypePartial) => {
  let { typeIn, typeOut } = codecType;
  if (!typeOut) {
    typeOut = typeIn.endsWith('Like') ? typeIn.slice(0, typeIn.length - 4) : typeIn;
  }

  const name = Object.keys(codecType).find(filterCodecName) as CodecName | undefined;
  if (!name) {
    throw Error('Codec name not found!');
  }

  knownCodecTypes[name] = { name, $codec: codecType[name], typeIn, typeOut };
};

export interface MultipleCodecTypePartial {
  [name: CodecName]: $.AnyShape;
}

/**
 * Register codec types with loose input convention
 * TODO explain this!
 *
 * @param codecTypes
 */
export const registerLooseCodecType = (codecTypes: MultipleCodecTypePartial) => {
  const names = Object.keys(codecTypes).filter(filterCodecName) as CodecName[];
  names.forEach((name) => {
    const typeOut = name.slice(1);
    const typeIn = `${typeOut}Like`;

    knownCodecTypes[name] = { name, $codec: codecTypes[name], typeIn, typeOut };
  });
};
