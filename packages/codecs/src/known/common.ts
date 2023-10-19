import * as $ from '@delightfuldot/shape';
import { HexString } from "@delightfuldot/utils";


export const $Text = $.str;
export const $StorageKey = $.RawHex;
export type StorageKey = $.Output<typeof $StorageKey>;

export const $StorageData = $.RawHex;
export type StorageData = $.Output<typeof $StorageData>;

export const $Extrinsic = $.PrefixedHex;

export const $Bytes = $.RawHex;
export type Bytes = HexString;

export type BitSequence = $.BitSequence;
