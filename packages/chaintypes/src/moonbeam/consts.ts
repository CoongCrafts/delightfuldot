// Generated by @delightfuldot/codegen
import { GenericChainConsts } from '@delightfuldot/types';
import {
  Bytes,
  FrameSupportPalletId,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  PalletReferendaTrackInfo,
  Perbill,
  Permill,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  XcmV3MultilocationMultiLocation,
} from './types';

export interface ChainConsts extends GenericChainConsts {
  system: {
    blockWeights: FrameSystemLimitsBlockWeights;
    blockLength: FrameSystemLimitsBlockLength;
    blockHashCount: number;
    dbWeight: SpWeightsRuntimeDbWeight;
    version: SpVersionRuntimeVersion;
    ss58Prefix: number;
  };
  parachainSystem: {};
  timestamp: { minimumPeriod: bigint };
  parachainInfo: {};
  rootTesting: {};
  balances: {
    existentialDeposit: bigint;
    maxLocks: number;
    maxReserves: number;
    maxHolds: number;
    maxFreezes: number;
  };
  transactionPayment: { operationalFeeMultiplier: number };
  parachainStaking: {
    minBlocksPerRound: number;
    leaveCandidatesDelay: number;
    candidateBondLessDelay: number;
    leaveDelegatorsDelay: number;
    revokeDelegationDelay: number;
    delegationBondLessDelay: number;
    rewardPaymentDelay: number;
    minSelectedCandidates: number;
    maxTopDelegationsPerCandidate: number;
    maxBottomDelegationsPerCandidate: number;
    maxDelegationsPerDelegator: number;
    minCandidateStk: bigint;
    minDelegation: bigint;
    maxCandidates: number;
  };
  authorInherent: {};
  authorFilter: {};
  authorMapping: {};
  moonbeamOrbiters: {
    maxPoolSize: number;
    maxRoundArchive: number;
    rotatePeriod: number;
  };
  utility: { batchedCallsLimit: number };
  proxy: {
    proxyDepositBase: bigint;
    proxyDepositFactor: bigint;
    maxProxies: number;
    maxPending: number;
    announcementDepositBase: bigint;
    announcementDepositFactor: bigint;
  };
  maintenanceMode: {};
  identity: {
    basicDeposit: bigint;
    fieldDeposit: bigint;
    subAccountDeposit: bigint;
    maxSubAccounts: number;
    maxAdditionalFields: number;
    maxRegistrars: number;
  };
  migrations: {};
  proxyGenesisCompanion: {};
  multisig: {
    depositBase: bigint;
    depositFactor: bigint;
    maxSignatories: number;
  };
  ethereumChainId: {};
  eVM: {};
  ethereum: {};
  scheduler: {
    maximumWeight: SpWeightsWeightV2Weight;
    maxScheduledPerBlock: number;
  };
  democracy: {
    enactmentPeriod: number;
    launchPeriod: number;
    votingPeriod: number;
    voteLockingPeriod: number;
    minimumDeposit: bigint;
    instantAllowed: boolean;
    fastTrackVotingPeriod: number;
    cooloffPeriod: number;
    maxVotes: number;
    maxProposals: number;
    maxDeposits: number;
    maxBlacklisted: number;
  };
  preimage: {};
  convictionVoting: {
    maxVotes: number;
    voteLockingPeriod: number;
  };
  referenda: {
    submissionDeposit: bigint;
    maxQueued: number;
    undecidingTimeout: number;
    alarmInterval: number;
    tracks: Array<[number, PalletReferendaTrackInfo]>;
  };
  whitelist: {};
  councilCollective: { maxProposalWeight: SpWeightsWeightV2Weight };
  techCommitteeCollective: { maxProposalWeight: SpWeightsWeightV2Weight };
  treasuryCouncilCollective: { maxProposalWeight: SpWeightsWeightV2Weight };
  openTechCommitteeCollective: { maxProposalWeight: SpWeightsWeightV2Weight };
  treasury: {
    proposalBond: Permill;
    proposalBondMinimum: bigint;
    proposalBondMaximum: bigint | undefined;
    spendPeriod: number;
    burn: Permill;
    palletId: FrameSupportPalletId;
    maxApprovals: number;
  };
  crowdloanRewards: {
    initializationPayment: Perbill;
    maxInitContributors: number;
    rewardAddressRelayVoteThreshold: Perbill;
    signatureNetworkIdentifier: Bytes;
  };
  xcmpQueue: {};
  cumulusXcm: {};
  dmpQueue: {};
  polkadotXcm: {};
  assets: {
    removeItemsLimit: number;
    assetDeposit: bigint;
    assetAccountDeposit: bigint;
    metadataDepositBase: bigint;
    metadataDepositPerByte: bigint;
    approvalDeposit: bigint;
    stringLimit: number;
  };
  assetManager: { localAssetDeposit: bigint };
  xTokens: {
    selfLocation: XcmV3MultilocationMultiLocation;
    baseXcmWeight: SpWeightsWeightV2Weight;
  };
  xcmTransactor: {
    selfLocation: XcmV3MultilocationMultiLocation;
    baseXcmWeight: SpWeightsWeightV2Weight;
  };
  localAssets: {
    removeItemsLimit: number;
    assetDeposit: bigint;
    assetAccountDeposit: bigint;
    metadataDepositBase: bigint;
    metadataDepositPerByte: bigint;
    approvalDeposit: bigint;
    stringLimit: number;
  };
  ethereumXcm: {};
  erc20XcmBridge: {};
  randomness: {
    deposit: bigint;
    maxRandomWords: number;
    minBlockDelay: number;
    maxBlockDelay: number;
    blockExpirationDelay: number;
    epochExpirationDelay: bigint;
  };
}
