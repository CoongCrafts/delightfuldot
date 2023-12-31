import * as $ from '@delightfuldot/shape';
import { $DispatchError } from './DispatchError';
import { $TransactionValidityError } from './TransactionValidityError';

export const $DispatchOutcome = $.Result($.Null, $DispatchError);
export type DispatchOutcome = $.Input<typeof $DispatchOutcome>;

/**
 * Ref: https://github.com/paritytech/polkadot-sdk/blob/bdf186870dc4a7d74d59cad338baf8478d0715b4/substrate/primitives/runtime/src/lib.rs#L800-L819
 */
export const $ApplyExtrinsicResult = $.Result($DispatchOutcome, $TransactionValidityError);
export type ApplyExtrinsicResult = $.Input<typeof $ApplyExtrinsicResult>;
