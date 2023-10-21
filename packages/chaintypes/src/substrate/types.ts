import type {
  AccountId32,
  BitSequence,
  Bytes,
  H256,
  MultiAddress,
  Perbill,
  Percent,
  Permill,
  PerU16,
} from '@delightfuldot/codecs';

export type {
  BitSequence,
  Bytes,
  AccountId32,
  H256,
  Perbill,
  MultiAddress,
  Percent,
  PerU16,
  Permill,
} from '@delightfuldot/codecs';

export type FrameSystemAccountInfo = {
  nonce: number;
  consumers: number;
  providers: number;
  sufficients: number;
  data: PalletBalancesAccountData;
};

export type PalletBalancesAccountData = {
  free: bigint;
  reserved: bigint;
  frozen: bigint;
  flags: PalletBalancesExtraFlags;
};

export type PalletBalancesExtraFlags = bigint;

export type SpWeightsWeightV2Weight = {
  refTime: bigint;
  proofSize: bigint;
};

export type SpRuntimeDigestDigest = {
  logs: Array<SpRuntimeDigestDigestItem>;
};

export type SpRuntimeDigestDigestItem =
  | { tag: 'PreRuntime'; value: [Bytes, Bytes] }
  | { tag: 'Consensus'; value: [Bytes, Bytes] }
  | { tag: 'Seal'; value: [Bytes, Bytes] }
  | { tag: 'Other'; value: Bytes }
  | { tag: 'RuntimeEnvironmentUpdated'; value: never };

export type FrameSystemEventRecord = {
  phase: FrameSystemPhase;
  event: PolkadotRuntimeRuntimeEvent;
  topics: Array<H256>;
};

export type PolkadotRuntimeRuntimeEvent =
  | { tag: 'System'; value: FrameSystemEvent }
  | { tag: 'Scheduler'; value: PalletSchedulerEvent }
  | { tag: 'Preimage'; value: PalletPreimageEvent }
  | { tag: 'Indices'; value: PalletIndicesEvent }
  | { tag: 'Balances'; value: PalletBalancesEvent }
  | { tag: 'TransactionPayment'; value: PalletTransactionPaymentEvent }
  | { tag: 'Staking'; value: PalletStakingPalletEvent }
  | { tag: 'Offences'; value: PalletOffencesEvent }
  | { tag: 'Session'; value: PalletSessionEvent }
  | { tag: 'Grandpa'; value: PalletGrandpaEvent }
  | { tag: 'ImOnline'; value: PalletImOnlineEvent }
  | { tag: 'Democracy'; value: PalletDemocracyEvent }
  | { tag: 'Council'; value: PalletCollectiveEvent }
  | { tag: 'TechnicalCommittee'; value: PalletCollectiveEvent }
  | { tag: 'PhragmenElection'; value: PalletElectionsPhragmenEvent }
  | { tag: 'TechnicalMembership'; value: PalletMembershipEvent }
  | { tag: 'Treasury'; value: PalletTreasuryEvent }
  | { tag: 'ConvictionVoting'; value: PalletConvictionVotingEvent }
  | { tag: 'Referenda'; value: PalletReferendaEvent }
  | { tag: 'Whitelist'; value: PalletWhitelistEvent }
  | { tag: 'Claims'; value: PolkadotRuntimeCommonClaimsPalletEvent }
  | { tag: 'Vesting'; value: PalletVestingEvent }
  | { tag: 'Utility'; value: PalletUtilityEvent }
  | { tag: 'Identity'; value: PalletIdentityEvent }
  | { tag: 'Proxy'; value: PalletProxyEvent }
  | { tag: 'Multisig'; value: PalletMultisigEvent }
  | { tag: 'Bounties'; value: PalletBountiesEvent }
  | { tag: 'ChildBounties'; value: PalletChildBountiesEvent }
  | { tag: 'Tips'; value: PalletTipsEvent }
  | { tag: 'ElectionProviderMultiPhase'; value: PalletElectionProviderMultiPhaseEvent }
  | { tag: 'VoterList'; value: PalletBagsListEvent }
  | { tag: 'NominationPools'; value: PalletNominationPoolsEvent }
  | { tag: 'FastUnstake'; value: PalletFastUnstakeEvent }
  | { tag: 'ParaInclusion'; value: PolkadotRuntimeParachainsInclusionPalletEvent }
  | { tag: 'Paras'; value: PolkadotRuntimeParachainsParasPalletEvent }
  | { tag: 'Hrmp'; value: PolkadotRuntimeParachainsHrmpPalletEvent }
  | { tag: 'ParasDisputes'; value: PolkadotRuntimeParachainsDisputesPalletEvent }
  | { tag: 'Registrar'; value: PolkadotRuntimeCommonParasRegistrarPalletEvent }
  | { tag: 'Slots'; value: PolkadotRuntimeCommonSlotsPalletEvent }
  | { tag: 'Auctions'; value: PolkadotRuntimeCommonAuctionsPalletEvent }
  | { tag: 'Crowdloan'; value: PolkadotRuntimeCommonCrowdloanPalletEvent }
  | { tag: 'XcmPallet'; value: PalletXcmEvent }
  | { tag: 'MessageQueue'; value: PalletMessageQueueEvent };

export type FrameSystemEvent =
  | {
      tag: 'ExtrinsicSuccess';
      value: {
        dispatchInfo: FrameSupportDispatchDispatchInfo;
      };
    }
  | {
      tag: 'ExtrinsicFailed';
      value: {
        dispatchError: SpRuntimeDispatchError;
        dispatchInfo: FrameSupportDispatchDispatchInfo;
      };
    }
  | { tag: 'CodeUpdated'; value: never }
  | {
      tag: 'NewAccount';
      value: {
        account: AccountId32;
      };
    }
  | {
      tag: 'KilledAccount';
      value: {
        account: AccountId32;
      };
    }
  | {
      tag: 'Remarked';
      value: {
        sender: AccountId32;
        hash: H256;
      };
    };

export type FrameSupportDispatchDispatchInfo = {
  weight: SpWeightsWeightV2Weight;
  class: FrameSupportDispatchDispatchClass;
  paysFee: FrameSupportDispatchPays;
};

export type FrameSupportDispatchDispatchClass = 'normal' | 'operational' | 'mandatory';

export type FrameSupportDispatchPays = 'yes' | 'no';

export type SpRuntimeDispatchError =
  | { tag: 'Other'; value: never }
  | { tag: 'CannotLookup'; value: never }
  | { tag: 'BadOrigin'; value: never }
  | { tag: 'Module'; value: SpRuntimeModuleError }
  | { tag: 'ConsumerRemaining'; value: never }
  | { tag: 'NoProviders'; value: never }
  | { tag: 'TooManyConsumers'; value: never }
  | { tag: 'Token'; value: SpRuntimeTokenError }
  | { tag: 'Arithmetic'; value: SpArithmeticArithmeticError }
  | { tag: 'Transactional'; value: SpRuntimeTransactionalError }
  | { tag: 'Exhausted'; value: never }
  | { tag: 'Corruption'; value: never }
  | { tag: 'Unavailable'; value: never }
  | { tag: 'RootNotAllowed'; value: never };

export type SpRuntimeModuleError = {
  index: number;
  error: Bytes;
};

export type SpRuntimeTokenError =
  | 'fundsUnavailable'
  | 'onlyProvider'
  | 'belowMinimum'
  | 'cannotCreate'
  | 'unknownAsset'
  | 'frozen'
  | 'unsupported'
  | 'cannotCreateHold'
  | 'notExpendable'
  | 'blocked';

export type SpArithmeticArithmeticError = 'underflow' | 'overflow' | 'divisionByZero';

export type SpRuntimeTransactionalError = 'limitReached' | 'noLayer';

export type PalletSchedulerEvent =
  | {
      tag: 'Scheduled';
      value: {
        when: number;
        index: number;
      };
    }
  | {
      tag: 'Canceled';
      value: {
        when: number;
        index: number;
      };
    }
  | {
      tag: 'Dispatched';
      value: {
        task: [number, number];
        id?: Bytes | undefined;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'CallUnavailable';
      value: {
        task: [number, number];
        id?: Bytes | undefined;
      };
    }
  | {
      tag: 'PeriodicFailed';
      value: {
        task: [number, number];
        id?: Bytes | undefined;
      };
    }
  | {
      tag: 'PermanentlyOverweight';
      value: {
        task: [number, number];
        id?: Bytes | undefined;
      };
    };

export type PalletPreimageEvent =
  | {
      tag: 'Noted';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'Requested';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'Cleared';
      value: {
        hash: H256;
      };
    };

export type PalletIndicesEvent =
  | {
      tag: 'IndexAssigned';
      value: {
        who: AccountId32;
        index: number;
      };
    }
  | {
      tag: 'IndexFreed';
      value: {
        index: number;
      };
    }
  | {
      tag: 'IndexFrozen';
      value: {
        index: number;
        who: AccountId32;
      };
    };

export type PalletBalancesEvent =
  | {
      tag: 'Endowed';
      value: {
        account: AccountId32;
        freeBalance: bigint;
      };
    }
  | {
      tag: 'DustLost';
      value: {
        account: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Transfer';
      value: {
        from: AccountId32;
        to: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'BalanceSet';
      value: {
        who: AccountId32;
        free: bigint;
      };
    }
  | {
      tag: 'Reserved';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Unreserved';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'ReserveRepatriated';
      value: {
        from: AccountId32;
        to: AccountId32;
        amount: bigint;
        destinationStatus: FrameSupportTokensMiscBalanceStatus;
      };
    }
  | {
      tag: 'Deposit';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Withdraw';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Slashed';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Minted';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Burned';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Suspended';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Restored';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Upgraded';
      value: {
        who: AccountId32;
      };
    }
  | {
      tag: 'Issued';
      value: {
        amount: bigint;
      };
    }
  | {
      tag: 'Rescinded';
      value: {
        amount: bigint;
      };
    }
  | {
      tag: 'Locked';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Unlocked';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Frozen';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Thawed';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    };

export type FrameSupportTokensMiscBalanceStatus = 'free' | 'reserved';

export type PalletTransactionPaymentEvent = {
  tag: 'TransactionFeePaid';
  value: {
    who: AccountId32;
    actualFee: bigint;
    tip: bigint;
  };
};

export type PalletStakingPalletEvent =
  | {
      tag: 'EraPaid';
      value: {
        eraIndex: number;
        validatorPayout: bigint;
        remainder: bigint;
      };
    }
  | {
      tag: 'Rewarded';
      value: {
        stash: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Slashed';
      value: {
        staker: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'SlashReported';
      value: {
        validator: AccountId32;
        fraction: Perbill;
        slashEra: number;
      };
    }
  | {
      tag: 'OldSlashingReportDiscarded';
      value: {
        sessionIndex: number;
      };
    }
  | { tag: 'StakersElected'; value: never }
  | {
      tag: 'Bonded';
      value: {
        stash: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Unbonded';
      value: {
        stash: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Withdrawn';
      value: {
        stash: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'Kicked';
      value: {
        nominator: AccountId32;
        stash: AccountId32;
      };
    }
  | { tag: 'StakingElectionFailed'; value: never }
  | {
      tag: 'Chilled';
      value: {
        stash: AccountId32;
      };
    }
  | {
      tag: 'PayoutStarted';
      value: {
        eraIndex: number;
        validatorStash: AccountId32;
      };
    }
  | {
      tag: 'ValidatorPrefsSet';
      value: {
        stash: AccountId32;
        prefs: PalletStakingValidatorPrefs;
      };
    }
  | {
      tag: 'ForceEra';
      value: {
        mode: PalletStakingForcing;
      };
    };

export type PalletStakingValidatorPrefs = {
  commission: Perbill;
  blocked: boolean;
};

export type PalletStakingForcing = 'notForcing' | 'forceNew' | 'forceNone' | 'forceAlways';

export type PalletOffencesEvent = {
  tag: 'Offence';
  value: {
    kind: Bytes;
    timeslot: Bytes;
  };
};

export type PalletSessionEvent = {
  tag: 'NewSession';
  value: {
    sessionIndex: number;
  };
};

export type PalletGrandpaEvent =
  | {
      tag: 'NewAuthorities';
      value: {
        authoritySet: Array<[SpConsensusGrandpaAppPublic, bigint]>;
      };
    }
  | { tag: 'Paused'; value: never }
  | { tag: 'Resumed'; value: never };

export type SpConsensusGrandpaAppPublic = SpCoreEd25519Public;

export type SpCoreEd25519Public = Bytes;

export type PalletImOnlineEvent =
  | {
      tag: 'HeartbeatReceived';
      value: {
        authorityId: PalletImOnlineSr25519AppSr25519Public;
      };
    }
  | { tag: 'AllGood'; value: never }
  | {
      tag: 'SomeOffline';
      value: {
        offline: Array<[AccountId32, PalletStakingExposure]>;
      };
    };

export type PalletImOnlineSr25519AppSr25519Public = SpCoreSr25519Public;

export type SpCoreSr25519Public = Bytes;

export type PalletStakingExposure = {
  total: bigint;
  own: bigint;
  others: Array<PalletStakingIndividualExposure>;
};

export type PalletStakingIndividualExposure = {
  who: AccountId32;
  value: bigint;
};

export type PalletDemocracyEvent =
  | {
      tag: 'Proposed';
      value: {
        proposalIndex: number;
        deposit: bigint;
      };
    }
  | {
      tag: 'Tabled';
      value: {
        proposalIndex: number;
        deposit: bigint;
      };
    }
  | { tag: 'ExternalTabled'; value: never }
  | {
      tag: 'Started';
      value: {
        refIndex: number;
        threshold: PalletDemocracyVoteThresholdVoteThreshold;
      };
    }
  | {
      tag: 'Passed';
      value: {
        refIndex: number;
      };
    }
  | {
      tag: 'NotPassed';
      value: {
        refIndex: number;
      };
    }
  | {
      tag: 'Cancelled';
      value: {
        refIndex: number;
      };
    }
  | {
      tag: 'Delegated';
      value: {
        who: AccountId32;
        target: AccountId32;
      };
    }
  | {
      tag: 'Undelegated';
      value: {
        account: AccountId32;
      };
    }
  | {
      tag: 'Vetoed';
      value: {
        who: AccountId32;
        proposalHash: H256;
        until: number;
      };
    }
  | {
      tag: 'Blacklisted';
      value: {
        proposalHash: H256;
      };
    }
  | {
      tag: 'Voted';
      value: {
        voter: AccountId32;
        refIndex: number;
        vote: PalletDemocracyVoteAccountVote;
      };
    }
  | {
      tag: 'Seconded';
      value: {
        seconder: AccountId32;
        propIndex: number;
      };
    }
  | {
      tag: 'ProposalCanceled';
      value: {
        propIndex: number;
      };
    }
  | {
      tag: 'MetadataSet';
      value: {
        owner: PalletDemocracyMetadataOwner;
        hash: H256;
      };
    }
  | {
      tag: 'MetadataCleared';
      value: {
        owner: PalletDemocracyMetadataOwner;
        hash: H256;
      };
    }
  | {
      tag: 'MetadataTransferred';
      value: {
        prevOwner: PalletDemocracyMetadataOwner;
        owner: PalletDemocracyMetadataOwner;
        hash: H256;
      };
    };

export type PalletDemocracyVoteThresholdVoteThreshold =
  | 'superMajorityApprove'
  | 'superMajorityAgainst'
  | 'simpleMajority';

export type PalletDemocracyVoteAccountVote =
  | {
      tag: 'Standard';
      value: {
        vote: PalletDemocracyVoteVote;
        balance: bigint;
      };
    }
  | {
      tag: 'Split';
      value: {
        aye: bigint;
        nay: bigint;
      };
    };

export type PalletDemocracyVoteVote = number;

export type PalletDemocracyMetadataOwner =
  | { tag: 'External'; value: never }
  | { tag: 'Proposal'; value: number }
  | { tag: 'Referendum'; value: number };

export type PalletCollectiveEvent =
  | {
      tag: 'Proposed';
      value: {
        account: AccountId32;
        proposalIndex: number;
        proposalHash: H256;
        threshold: number;
      };
    }
  | {
      tag: 'Voted';
      value: {
        account: AccountId32;
        proposalHash: H256;
        voted: boolean;
        yes: number;
        no: number;
      };
    }
  | {
      tag: 'Approved';
      value: {
        proposalHash: H256;
      };
    }
  | {
      tag: 'Disapproved';
      value: {
        proposalHash: H256;
      };
    }
  | {
      tag: 'Executed';
      value: {
        proposalHash: H256;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'MemberExecuted';
      value: {
        proposalHash: H256;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'Closed';
      value: {
        proposalHash: H256;
        yes: number;
        no: number;
      };
    };

export type PalletElectionsPhragmenEvent =
  | {
      tag: 'NewTerm';
      value: {
        newMembers: Array<[AccountId32, bigint]>;
      };
    }
  | { tag: 'EmptyTerm'; value: never }
  | { tag: 'ElectionError'; value: never }
  | {
      tag: 'MemberKicked';
      value: {
        member: AccountId32;
      };
    }
  | {
      tag: 'Renounced';
      value: {
        candidate: AccountId32;
      };
    }
  | {
      tag: 'CandidateSlashed';
      value: {
        candidate: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'SeatHolderSlashed';
      value: {
        seatHolder: AccountId32;
        amount: bigint;
      };
    };

export type PalletMembershipEvent =
  | 'memberAdded'
  | 'memberRemoved'
  | 'membersSwapped'
  | 'membersReset'
  | 'keyChanged'
  | 'dummy';

export type PalletTreasuryEvent =
  | {
      tag: 'Proposed';
      value: {
        proposalIndex: number;
      };
    }
  | {
      tag: 'Spending';
      value: {
        budgetRemaining: bigint;
      };
    }
  | {
      tag: 'Awarded';
      value: {
        proposalIndex: number;
        award: bigint;
        account: AccountId32;
      };
    }
  | {
      tag: 'Rejected';
      value: {
        proposalIndex: number;
        slashed: bigint;
      };
    }
  | {
      tag: 'Burnt';
      value: {
        burntFunds: bigint;
      };
    }
  | {
      tag: 'Rollover';
      value: {
        rolloverBalance: bigint;
      };
    }
  | {
      tag: 'Deposit';
      value: {
        value: bigint;
      };
    }
  | {
      tag: 'SpendApproved';
      value: {
        proposalIndex: number;
        amount: bigint;
        beneficiary: AccountId32;
      };
    }
  | {
      tag: 'UpdatedInactive';
      value: {
        reactivated: bigint;
        deactivated: bigint;
      };
    };

export type PalletConvictionVotingEvent =
  | { tag: 'Delegated'; value: [AccountId32, AccountId32] }
  | { tag: 'Undelegated'; value: AccountId32 };

export type PalletReferendaEvent =
  | {
      tag: 'Submitted';
      value: {
        index: number;
        track: number;
        proposal: FrameSupportPreimagesBounded;
      };
    }
  | {
      tag: 'DecisionDepositPlaced';
      value: {
        index: number;
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'DecisionDepositRefunded';
      value: {
        index: number;
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'DepositSlashed';
      value: {
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'DecisionStarted';
      value: {
        index: number;
        track: number;
        proposal: FrameSupportPreimagesBounded;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'ConfirmStarted';
      value: {
        index: number;
      };
    }
  | {
      tag: 'ConfirmAborted';
      value: {
        index: number;
      };
    }
  | {
      tag: 'Confirmed';
      value: {
        index: number;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'Approved';
      value: {
        index: number;
      };
    }
  | {
      tag: 'Rejected';
      value: {
        index: number;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'TimedOut';
      value: {
        index: number;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'Cancelled';
      value: {
        index: number;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'Killed';
      value: {
        index: number;
        tally: PalletConvictionVotingTally;
      };
    }
  | {
      tag: 'SubmissionDepositRefunded';
      value: {
        index: number;
        who: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'MetadataSet';
      value: {
        index: number;
        hash: H256;
      };
    }
  | {
      tag: 'MetadataCleared';
      value: {
        index: number;
        hash: H256;
      };
    };

export type FrameSupportPreimagesBounded =
  | {
      tag: 'Legacy';
      value: {
        hash: H256;
      };
    }
  | { tag: 'Inline'; value: Bytes }
  | {
      tag: 'Lookup';
      value: {
        hash: H256;
        len: number;
      };
    };

export type PolkadotRuntimeRuntimeCall =
  | { tag: 'System'; value: FrameSystemCall }
  | { tag: 'Scheduler'; value: PalletSchedulerCall }
  | { tag: 'Preimage'; value: PalletPreimageCall }
  | { tag: 'Babe'; value: PalletBabeCall }
  | { tag: 'Timestamp'; value: PalletTimestampCall }
  | { tag: 'Indices'; value: PalletIndicesCall }
  | { tag: 'Balances'; value: PalletBalancesCall }
  | { tag: 'Staking'; value: PalletStakingPalletCall }
  | { tag: 'Session'; value: PalletSessionCall }
  | { tag: 'Grandpa'; value: PalletGrandpaCall }
  | { tag: 'ImOnline'; value: PalletImOnlineCall }
  | { tag: 'Democracy'; value: PalletDemocracyCall }
  | { tag: 'Council'; value: PalletCollectiveCall }
  | { tag: 'TechnicalCommittee'; value: PalletCollectiveCall }
  | { tag: 'PhragmenElection'; value: PalletElectionsPhragmenCall }
  | { tag: 'TechnicalMembership'; value: PalletMembershipCall }
  | { tag: 'Treasury'; value: PalletTreasuryCall }
  | { tag: 'ConvictionVoting'; value: PalletConvictionVotingCall }
  | { tag: 'Referenda'; value: PalletReferendaCall }
  | { tag: 'Whitelist'; value: PalletWhitelistCall }
  | { tag: 'Claims'; value: PolkadotRuntimeCommonClaimsPalletCall }
  | { tag: 'Vesting'; value: PalletVestingCall }
  | { tag: 'Utility'; value: PalletUtilityCall }
  | { tag: 'Identity'; value: PalletIdentityCall }
  | { tag: 'Proxy'; value: PalletProxyCall }
  | { tag: 'Multisig'; value: PalletMultisigCall }
  | { tag: 'Bounties'; value: PalletBountiesCall }
  | { tag: 'ChildBounties'; value: PalletChildBountiesCall }
  | { tag: 'Tips'; value: PalletTipsCall }
  | { tag: 'ElectionProviderMultiPhase'; value: PalletElectionProviderMultiPhaseCall }
  | { tag: 'VoterList'; value: PalletBagsListCall }
  | { tag: 'NominationPools'; value: PalletNominationPoolsCall }
  | { tag: 'FastUnstake'; value: PalletFastUnstakeCall }
  | { tag: 'Configuration'; value: PolkadotRuntimeParachainsConfigurationPalletCall }
  | { tag: 'ParasShared'; value: PolkadotRuntimeParachainsSharedPalletCall }
  | { tag: 'ParaInclusion'; value: PolkadotRuntimeParachainsInclusionPalletCall }
  | { tag: 'ParaInherent'; value: PolkadotRuntimeParachainsParasInherentPalletCall }
  | { tag: 'Paras'; value: PolkadotRuntimeParachainsParasPalletCall }
  | { tag: 'Initializer'; value: PolkadotRuntimeParachainsInitializerPalletCall }
  | { tag: 'Hrmp'; value: PolkadotRuntimeParachainsHrmpPalletCall }
  | { tag: 'ParasDisputes'; value: PolkadotRuntimeParachainsDisputesPalletCall }
  | { tag: 'ParasSlashing'; value: PolkadotRuntimeParachainsDisputesSlashingPalletCall }
  | { tag: 'Registrar'; value: PolkadotRuntimeCommonParasRegistrarPalletCall }
  | { tag: 'Slots'; value: PolkadotRuntimeCommonSlotsPalletCall }
  | { tag: 'Auctions'; value: PolkadotRuntimeCommonAuctionsPalletCall }
  | { tag: 'Crowdloan'; value: PolkadotRuntimeCommonCrowdloanPalletCall }
  | { tag: 'XcmPallet'; value: PalletXcmCall }
  | { tag: 'MessageQueue'; value: PalletMessageQueueCall };

export type FrameSystemCall =
  | {
      tag: 'remark';
      value: {
        remark: Bytes;
      };
    }
  | {
      tag: 'set_heap_pages';
      value: {
        pages: bigint;
      };
    }
  | {
      tag: 'set_code';
      value: {
        code: Bytes;
      };
    }
  | {
      tag: 'set_code_without_checks';
      value: {
        code: Bytes;
      };
    }
  | {
      tag: 'set_storage';
      value: {
        items: Array<[Bytes, Bytes]>;
      };
    }
  | {
      tag: 'kill_storage';
      value: {
        keys: Array<Bytes>;
      };
    }
  | {
      tag: 'kill_prefix';
      value: {
        prefix: Bytes;
        subkeys: number;
      };
    }
  | {
      tag: 'remark_with_event';
      value: {
        remark: Bytes;
      };
    };

export type PalletSchedulerCall =
  | {
      tag: 'schedule';
      value: {
        when: number;
        maybePeriodic?: [number, number] | undefined;
        priority: number;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'cancel';
      value: {
        when: number;
        index: number;
      };
    }
  | {
      tag: 'schedule_named';
      value: {
        id: Bytes;
        when: number;
        maybePeriodic?: [number, number] | undefined;
        priority: number;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'cancel_named';
      value: {
        id: Bytes;
      };
    }
  | {
      tag: 'schedule_after';
      value: {
        after: number;
        maybePeriodic?: [number, number] | undefined;
        priority: number;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'schedule_named_after';
      value: {
        id: Bytes;
        after: number;
        maybePeriodic?: [number, number] | undefined;
        priority: number;
        call: PolkadotRuntimeRuntimeCall;
      };
    };

export type PalletPreimageCall =
  | {
      tag: 'note_preimage';
      value: {
        bytes: Bytes;
      };
    }
  | {
      tag: 'unnote_preimage';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'request_preimage';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'unrequest_preimage';
      value: {
        hash: H256;
      };
    };

export type PalletBabeCall =
  | {
      tag: 'report_equivocation';
      value: {
        equivocationProof: SpConsensusSlotsEquivocationProof;
        keyOwnerProof: SpSessionMembershipProof;
      };
    }
  | {
      tag: 'report_equivocation_unsigned';
      value: {
        equivocationProof: SpConsensusSlotsEquivocationProof;
        keyOwnerProof: SpSessionMembershipProof;
      };
    }
  | {
      tag: 'plan_config_change';
      value: {
        config: SpConsensusBabeDigestsNextConfigDescriptor;
      };
    };

export type SpConsensusSlotsEquivocationProof = {
  offender: SpConsensusBabeAppPublic;
  slot: SpConsensusSlotsSlot;
  firstHeader: SpRuntimeHeaderHeader;
  secondHeader: SpRuntimeHeaderHeader;
};

export type SpRuntimeHeaderHeader = {
  parentHash: H256;
  number: number;
  stateRoot: H256;
  extrinsicsRoot: H256;
  digest: SpRuntimeDigestDigest;
};

export type SpRuntimeBlakeTwo256 = never;

export type SpConsensusBabeAppPublic = SpCoreSr25519Public;

export type SpConsensusSlotsSlot = bigint;

export type SpSessionMembershipProof = {
  session: number;
  trieNodes: Array<Bytes>;
  validatorCount: number;
};

export type SpConsensusBabeDigestsNextConfigDescriptor = {
  tag: 'V1';
  value: {
    c: [bigint, bigint];
    allowedSlots: SpConsensusBabeAllowedSlots;
  };
};

export type SpConsensusBabeAllowedSlots =
  | 'primarySlots'
  | 'primaryAndSecondaryPlainSlots'
  | 'primaryAndSecondaryVRFSlots';

export type PalletTimestampCall = {
  tag: 'set';
  value: {
    now: bigint;
  };
};

export type PalletIndicesCall =
  | {
      tag: 'claim';
      value: {
        index: number;
      };
    }
  | {
      tag: 'transfer';
      value: {
        new: MultiAddress;
        index: number;
      };
    }
  | {
      tag: 'free';
      value: {
        index: number;
      };
    }
  | {
      tag: 'force_transfer';
      value: {
        new: MultiAddress;
        index: number;
        freeze: boolean;
      };
    }
  | {
      tag: 'freeze';
      value: {
        index: number;
      };
    };

export type PalletBalancesCall =
  | {
      tag: 'transfer_allow_death';
      value: {
        dest: MultiAddress;
        value: bigint;
      };
    }
  | {
      tag: 'set_balance_deprecated';
      value: {
        who: MultiAddress;
        newFree: bigint;
        oldReserved: bigint;
      };
    }
  | {
      tag: 'force_transfer';
      value: {
        source: MultiAddress;
        dest: MultiAddress;
        value: bigint;
      };
    }
  | {
      tag: 'transfer_keep_alive';
      value: {
        dest: MultiAddress;
        value: bigint;
      };
    }
  | {
      tag: 'transfer_all';
      value: {
        dest: MultiAddress;
        keepAlive: boolean;
      };
    }
  | {
      tag: 'force_unreserve';
      value: {
        who: MultiAddress;
        amount: bigint;
      };
    }
  | {
      tag: 'upgrade_accounts';
      value: {
        who: Array<AccountId32>;
      };
    }
  | {
      tag: 'transfer';
      value: {
        dest: MultiAddress;
        value: bigint;
      };
    }
  | {
      tag: 'force_set_balance';
      value: {
        who: MultiAddress;
        newFree: bigint;
      };
    };

export type PalletStakingPalletCall =
  | {
      tag: 'bond';
      value: {
        value: bigint;
        payee: PalletStakingRewardDestination;
      };
    }
  | {
      tag: 'bond_extra';
      value: {
        maxAdditional: bigint;
      };
    }
  | {
      tag: 'unbond';
      value: {
        value: bigint;
      };
    }
  | {
      tag: 'withdraw_unbonded';
      value: {
        numSlashingSpans: number;
      };
    }
  | {
      tag: 'validate';
      value: {
        prefs: PalletStakingValidatorPrefs;
      };
    }
  | {
      tag: 'nominate';
      value: {
        targets: Array<MultiAddress>;
      };
    }
  | { tag: 'chill'; value: never }
  | {
      tag: 'set_payee';
      value: {
        payee: PalletStakingRewardDestination;
      };
    }
  | { tag: 'set_controller'; value: never }
  | {
      tag: 'set_validator_count';
      value: {
        new: number;
      };
    }
  | {
      tag: 'increase_validator_count';
      value: {
        additional: number;
      };
    }
  | {
      tag: 'scale_validator_count';
      value: {
        factor: Percent;
      };
    }
  | { tag: 'force_no_eras'; value: never }
  | { tag: 'force_new_era'; value: never }
  | {
      tag: 'set_invulnerables';
      value: {
        invulnerables: Array<AccountId32>;
      };
    }
  | {
      tag: 'force_unstake';
      value: {
        stash: AccountId32;
        numSlashingSpans: number;
      };
    }
  | { tag: 'force_new_era_always'; value: never }
  | {
      tag: 'cancel_deferred_slash';
      value: {
        era: number;
        slashIndices: Array<number>;
      };
    }
  | {
      tag: 'payout_stakers';
      value: {
        validatorStash: AccountId32;
        era: number;
      };
    }
  | {
      tag: 'rebond';
      value: {
        value: bigint;
      };
    }
  | {
      tag: 'reap_stash';
      value: {
        stash: AccountId32;
        numSlashingSpans: number;
      };
    }
  | {
      tag: 'kick';
      value: {
        who: Array<MultiAddress>;
      };
    }
  | {
      tag: 'set_staking_configs';
      value: {
        minNominatorBond:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: bigint }
          | { tag: 'Remove'; value: never };
        minValidatorBond:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: bigint }
          | { tag: 'Remove'; value: never };
        maxNominatorCount:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: number }
          | { tag: 'Remove'; value: never };
        maxValidatorCount:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: number }
          | { tag: 'Remove'; value: never };
        chillThreshold:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: Percent }
          | { tag: 'Remove'; value: never };
        minCommission: { tag: 'Noop'; value: never } | { tag: 'Set'; value: Perbill } | { tag: 'Remove'; value: never };
      };
    }
  | {
      tag: 'chill_other';
      value: {
        controller: AccountId32;
      };
    }
  | {
      tag: 'force_apply_min_commission';
      value: {
        validatorStash: AccountId32;
      };
    }
  | {
      tag: 'set_min_commission';
      value: {
        new: Perbill;
      };
    };

export type PalletStakingRewardDestination =
  | { tag: 'Staked'; value: never }
  | { tag: 'Stash'; value: never }
  | { tag: 'Controller'; value: never }
  | { tag: 'Account'; value: AccountId32 }
  | { tag: 'None'; value: never };

export type PalletSessionCall =
  | {
      tag: 'set_keys';
      value: {
        keys: PolkadotRuntimeSessionKeys;
        proof: Bytes;
      };
    }
  | { tag: 'purge_keys'; value: never };

export type PolkadotRuntimeSessionKeys = {
  grandpa: SpConsensusGrandpaAppPublic;
  babe: SpConsensusBabeAppPublic;
  imOnline: PalletImOnlineSr25519AppSr25519Public;
  paraValidator: PolkadotPrimitivesV4ValidatorAppPublic;
  paraAssignment: PolkadotPrimitivesV4AssignmentAppPublic;
  authorityDiscovery: SpAuthorityDiscoveryAppPublic;
};

export type PolkadotPrimitivesV4ValidatorAppPublic = SpCoreSr25519Public;

export type PolkadotPrimitivesV4AssignmentAppPublic = SpCoreSr25519Public;

export type SpAuthorityDiscoveryAppPublic = SpCoreSr25519Public;

export type PalletGrandpaCall =
  | {
      tag: 'report_equivocation';
      value: {
        equivocationProof: SpConsensusGrandpaEquivocationProof;
        keyOwnerProof: SpSessionMembershipProof;
      };
    }
  | {
      tag: 'report_equivocation_unsigned';
      value: {
        equivocationProof: SpConsensusGrandpaEquivocationProof;
        keyOwnerProof: SpSessionMembershipProof;
      };
    }
  | {
      tag: 'note_stalled';
      value: {
        delay: number;
        bestFinalizedBlockNumber: number;
      };
    };

export type SpConsensusGrandpaEquivocationProof = {
  setId: bigint;
  equivocation: SpConsensusGrandpaEquivocation;
};

export type SpConsensusGrandpaEquivocation =
  | {
      tag: 'Prevote';
      value: {
        roundNumber: bigint;
        identity: SpConsensusGrandpaAppPublic;
        first: [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature];
        second: [FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature];
      };
    }
  | {
      tag: 'Precommit';
      value: {
        roundNumber: bigint;
        identity: SpConsensusGrandpaAppPublic;
        first: [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature];
        second: [FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature];
      };
    };

export type FinalityGrandpaPrevote = {
  targetHash: H256;
  targetNumber: number;
};

export type SpConsensusGrandpaAppSignature = SpCoreEd25519Signature;

export type SpCoreEd25519Signature = Bytes;

export type FinalityGrandpaPrecommit = {
  targetHash: H256;
  targetNumber: number;
};

export type PalletImOnlineCall = {
  tag: 'heartbeat';
  value: {
    heartbeat: PalletImOnlineHeartbeat;
    signature: PalletImOnlineSr25519AppSr25519Signature;
  };
};

export type PalletImOnlineHeartbeat = {
  blockNumber: number;
  networkState: SpCoreOffchainOpaqueNetworkState;
  sessionIndex: number;
  authorityIndex: number;
  validatorsLen: number;
};

export type SpCoreOffchainOpaqueNetworkState = {
  peerId: SpCoreOpaquePeerId;
  externalAddresses: Array<SpCoreOffchainOpaqueMultiaddr>;
};

export type SpCoreOpaquePeerId = Bytes;

export type SpCoreOffchainOpaqueMultiaddr = Bytes;

export type PalletImOnlineSr25519AppSr25519Signature = SpCoreSr25519Signature;

export type SpCoreSr25519Signature = Bytes;

export type PalletDemocracyCall =
  | {
      tag: 'propose';
      value: {
        proposal: FrameSupportPreimagesBounded;
        value: bigint;
      };
    }
  | {
      tag: 'second';
      value: {
        proposal: number;
      };
    }
  | {
      tag: 'vote';
      value: {
        refIndex: number;
        vote: PalletDemocracyVoteAccountVote;
      };
    }
  | {
      tag: 'emergency_cancel';
      value: {
        refIndex: number;
      };
    }
  | {
      tag: 'external_propose';
      value: {
        proposal: FrameSupportPreimagesBounded;
      };
    }
  | {
      tag: 'external_propose_majority';
      value: {
        proposal: FrameSupportPreimagesBounded;
      };
    }
  | {
      tag: 'external_propose_default';
      value: {
        proposal: FrameSupportPreimagesBounded;
      };
    }
  | {
      tag: 'fast_track';
      value: {
        proposalHash: H256;
        votingPeriod: number;
        delay: number;
      };
    }
  | {
      tag: 'veto_external';
      value: {
        proposalHash: H256;
      };
    }
  | {
      tag: 'cancel_referendum';
      value: {
        refIndex: number;
      };
    }
  | {
      tag: 'delegate';
      value: {
        to: MultiAddress;
        conviction: PalletDemocracyConvictionConviction;
        balance: bigint;
      };
    }
  | { tag: 'undelegate'; value: never }
  | { tag: 'clear_public_proposals'; value: never }
  | {
      tag: 'unlock';
      value: {
        target: MultiAddress;
      };
    }
  | {
      tag: 'remove_vote';
      value: {
        index: number;
      };
    }
  | {
      tag: 'remove_other_vote';
      value: {
        target: MultiAddress;
        index: number;
      };
    }
  | {
      tag: 'blacklist';
      value: {
        proposalHash: H256;
        maybeRefIndex?: number | undefined;
      };
    }
  | {
      tag: 'cancel_proposal';
      value: {
        propIndex: number;
      };
    }
  | {
      tag: 'set_metadata';
      value: {
        owner: PalletDemocracyMetadataOwner;
        maybeHash?: H256 | undefined;
      };
    };

export type PalletDemocracyConvictionConviction =
  | 'none'
  | 'locked1x'
  | 'locked2x'
  | 'locked3x'
  | 'locked4x'
  | 'locked5x'
  | 'locked6x';

export type PalletCollectiveCall =
  | {
      tag: 'set_members';
      value: {
        newMembers: Array<AccountId32>;
        prime?: AccountId32 | undefined;
        oldCount: number;
      };
    }
  | {
      tag: 'execute';
      value: {
        proposal: PolkadotRuntimeRuntimeCall;
        lengthBound: number;
      };
    }
  | {
      tag: 'propose';
      value: {
        threshold: number;
        proposal: PolkadotRuntimeRuntimeCall;
        lengthBound: number;
      };
    }
  | {
      tag: 'vote';
      value: {
        proposal: H256;
        index: number;
        approve: boolean;
      };
    }
  | {
      tag: 'disapprove_proposal';
      value: {
        proposalHash: H256;
      };
    }
  | {
      tag: 'close';
      value: {
        proposalHash: H256;
        index: number;
        proposalWeightBound: SpWeightsWeightV2Weight;
        lengthBound: number;
      };
    };

export type PalletElectionsPhragmenCall =
  | {
      tag: 'vote';
      value: {
        votes: Array<AccountId32>;
        value: bigint;
      };
    }
  | { tag: 'remove_voter'; value: never }
  | {
      tag: 'submit_candidacy';
      value: {
        candidateCount: number;
      };
    }
  | {
      tag: 'renounce_candidacy';
      value: {
        renouncing: PalletElectionsPhragmenRenouncing;
      };
    }
  | {
      tag: 'remove_member';
      value: {
        who: MultiAddress;
        slashBond: boolean;
        rerunElection: boolean;
      };
    }
  | {
      tag: 'clean_defunct_voters';
      value: {
        numVoters: number;
        numDefunct: number;
      };
    };

export type PalletElectionsPhragmenRenouncing =
  | { tag: 'Member'; value: never }
  | { tag: 'RunnerUp'; value: never }
  | { tag: 'Candidate'; value: number };

export type PalletMembershipCall =
  | {
      tag: 'add_member';
      value: {
        who: MultiAddress;
      };
    }
  | {
      tag: 'remove_member';
      value: {
        who: MultiAddress;
      };
    }
  | {
      tag: 'swap_member';
      value: {
        remove: MultiAddress;
        add: MultiAddress;
      };
    }
  | {
      tag: 'reset_members';
      value: {
        members: Array<AccountId32>;
      };
    }
  | {
      tag: 'change_key';
      value: {
        new: MultiAddress;
      };
    }
  | {
      tag: 'set_prime';
      value: {
        who: MultiAddress;
      };
    }
  | { tag: 'clear_prime'; value: never };

export type PalletTreasuryCall =
  | {
      tag: 'propose_spend';
      value: {
        value: bigint;
        beneficiary: MultiAddress;
      };
    }
  | {
      tag: 'reject_proposal';
      value: {
        proposalId: number;
      };
    }
  | {
      tag: 'approve_proposal';
      value: {
        proposalId: number;
      };
    }
  | {
      tag: 'spend';
      value: {
        amount: bigint;
        beneficiary: MultiAddress;
      };
    }
  | {
      tag: 'remove_approval';
      value: {
        proposalId: number;
      };
    };

export type PalletConvictionVotingCall =
  | {
      tag: 'vote';
      value: {
        pollIndex: number;
        vote: PalletConvictionVotingVoteAccountVote;
      };
    }
  | {
      tag: 'delegate';
      value: {
        class: number;
        to: MultiAddress;
        conviction: PalletConvictionVotingConvictionConviction;
        balance: bigint;
      };
    }
  | {
      tag: 'undelegate';
      value: {
        class: number;
      };
    }
  | {
      tag: 'unlock';
      value: {
        class: number;
        target: MultiAddress;
      };
    }
  | {
      tag: 'remove_vote';
      value: {
        class?: number | undefined;
        index: number;
      };
    }
  | {
      tag: 'remove_other_vote';
      value: {
        target: MultiAddress;
        class: number;
        index: number;
      };
    };

export type PalletConvictionVotingVoteAccountVote =
  | {
      tag: 'Standard';
      value: {
        vote: PalletConvictionVotingVoteVote;
        balance: bigint;
      };
    }
  | {
      tag: 'Split';
      value: {
        aye: bigint;
        nay: bigint;
      };
    }
  | {
      tag: 'SplitAbstain';
      value: {
        aye: bigint;
        nay: bigint;
        abstain: bigint;
      };
    };

export type PalletConvictionVotingVoteVote = number;

export type PalletConvictionVotingConvictionConviction =
  | 'none'
  | 'locked1x'
  | 'locked2x'
  | 'locked3x'
  | 'locked4x'
  | 'locked5x'
  | 'locked6x';

export type PalletReferendaCall =
  | {
      tag: 'submit';
      value: {
        proposalOrigin: PolkadotRuntimeOriginCaller;
        proposal: FrameSupportPreimagesBounded;
        enactmentMoment: FrameSupportScheduleDispatchTime;
      };
    }
  | {
      tag: 'place_decision_deposit';
      value: {
        index: number;
      };
    }
  | {
      tag: 'refund_decision_deposit';
      value: {
        index: number;
      };
    }
  | {
      tag: 'cancel';
      value: {
        index: number;
      };
    }
  | {
      tag: 'kill';
      value: {
        index: number;
      };
    }
  | {
      tag: 'nudge_referendum';
      value: {
        index: number;
      };
    }
  | {
      tag: 'one_fewer_deciding';
      value: {
        track: number;
      };
    }
  | {
      tag: 'refund_submission_deposit';
      value: {
        index: number;
      };
    }
  | {
      tag: 'set_metadata';
      value: {
        index: number;
        maybeHash?: H256 | undefined;
      };
    };

export type PolkadotRuntimeOriginCaller =
  | { tag: 'system'; value: FrameSupportDispatchRawOrigin }
  | { tag: 'Council'; value: PalletCollectiveRawOrigin }
  | { tag: 'TechnicalCommittee'; value: PalletCollectiveRawOrigin }
  | { tag: 'Origins'; value: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin }
  | { tag: 'ParachainsOrigin'; value: PolkadotRuntimeParachainsOriginPalletOrigin }
  | { tag: 'XcmPallet'; value: PalletXcmOrigin }
  | { tag: 'Void'; value: SpCoreVoid };

export type FrameSupportDispatchRawOrigin =
  | { tag: 'Root'; value: never }
  | { tag: 'Signed'; value: AccountId32 }
  | { tag: 'None'; value: never };

export type PalletCollectiveRawOrigin =
  | { tag: 'Members'; value: [number, number] }
  | { tag: 'Member'; value: AccountId32 }
  | { tag: '_Phantom'; value: never };

export type PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin =
  | 'stakingAdmin'
  | 'treasurer'
  | 'fellowshipAdmin'
  | 'generalAdmin'
  | 'auctionAdmin'
  | 'leaseAdmin'
  | 'referendumCanceller'
  | 'referendumKiller'
  | 'smallTipper'
  | 'bigTipper'
  | 'smallSpender'
  | 'mediumSpender'
  | 'bigSpender'
  | 'whitelistedCaller';

export type PolkadotRuntimeParachainsOriginPalletOrigin = { tag: 'Parachain'; value: PolkadotParachainPrimitivesId };

export type PolkadotParachainPrimitivesId = number;

export type PalletXcmOrigin =
  | { tag: 'Xcm'; value: XcmV3MultilocationMultiLocation }
  | { tag: 'Response'; value: XcmV3MultilocationMultiLocation };

export type XcmV3MultilocationMultiLocation = {
  parents: number;
  interior: XcmV3JunctionsJunctions;
};

export type XcmV3JunctionsJunctions =
  | { tag: 'Here'; value: never }
  | { tag: 'X1'; value: XcmV3JunctionJunction }
  | { tag: 'X2'; value: [XcmV3JunctionJunction, XcmV3JunctionJunction] }
  | { tag: 'X3'; value: [XcmV3JunctionJunction, XcmV3JunctionJunction, XcmV3JunctionJunction] }
  | { tag: 'X4'; value: [XcmV3JunctionJunction, XcmV3JunctionJunction, XcmV3JunctionJunction, XcmV3JunctionJunction] }
  | {
      tag: 'X5';
      value: [
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
      ];
    }
  | {
      tag: 'X6';
      value: [
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
      ];
    }
  | {
      tag: 'X7';
      value: [
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
      ];
    }
  | {
      tag: 'X8';
      value: [
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
        XcmV3JunctionJunction,
      ];
    };

export type XcmV3JunctionJunction =
  | { tag: 'Parachain'; value: number }
  | {
      tag: 'AccountId32';
      value: {
        network?: XcmV3JunctionNetworkId | undefined;
        id: Bytes;
      };
    }
  | {
      tag: 'AccountIndex64';
      value: {
        network?: XcmV3JunctionNetworkId | undefined;
        index: bigint;
      };
    }
  | {
      tag: 'AccountKey20';
      value: {
        network?: XcmV3JunctionNetworkId | undefined;
        key: Bytes;
      };
    }
  | { tag: 'PalletInstance'; value: number }
  | { tag: 'GeneralIndex'; value: bigint }
  | {
      tag: 'GeneralKey';
      value: {
        length: number;
        data: Bytes;
      };
    }
  | { tag: 'OnlyChild'; value: never }
  | {
      tag: 'Plurality';
      value: {
        id: XcmV3JunctionBodyId;
        part: XcmV3JunctionBodyPart;
      };
    }
  | { tag: 'GlobalConsensus'; value: XcmV3JunctionNetworkId };

export type XcmV3JunctionNetworkId =
  | { tag: 'ByGenesis'; value: Bytes }
  | {
      tag: 'ByFork';
      value: {
        blockNumber: bigint;
        blockHash: Bytes;
      };
    }
  | { tag: 'Polkadot'; value: never }
  | { tag: 'Kusama'; value: never }
  | { tag: 'Westend'; value: never }
  | { tag: 'Rococo'; value: never }
  | { tag: 'Wococo'; value: never }
  | {
      tag: 'Ethereum';
      value: {
        chainId: bigint;
      };
    }
  | { tag: 'BitcoinCore'; value: never }
  | { tag: 'BitcoinCash'; value: never };

export type XcmV3JunctionBodyId =
  | { tag: 'Unit'; value: never }
  | { tag: 'Moniker'; value: Bytes }
  | { tag: 'Index'; value: number }
  | { tag: 'Executive'; value: never }
  | { tag: 'Technical'; value: never }
  | { tag: 'Legislative'; value: never }
  | { tag: 'Judicial'; value: never }
  | { tag: 'Defense'; value: never }
  | { tag: 'Administration'; value: never }
  | { tag: 'Treasury'; value: never };

export type XcmV3JunctionBodyPart =
  | { tag: 'Voice'; value: never }
  | {
      tag: 'Members';
      value: {
        count: number;
      };
    }
  | {
      tag: 'Fraction';
      value: {
        nom: number;
        denom: number;
      };
    }
  | {
      tag: 'AtLeastProportion';
      value: {
        nom: number;
        denom: number;
      };
    }
  | {
      tag: 'MoreThanProportion';
      value: {
        nom: number;
        denom: number;
      };
    };

export type SpCoreVoid = never;

export type FrameSupportScheduleDispatchTime = { tag: 'At'; value: number } | { tag: 'After'; value: number };

export type PalletWhitelistCall =
  | {
      tag: 'whitelist_call';
      value: {
        callHash: H256;
      };
    }
  | {
      tag: 'remove_whitelisted_call';
      value: {
        callHash: H256;
      };
    }
  | {
      tag: 'dispatch_whitelisted_call';
      value: {
        callHash: H256;
        callEncodedLen: number;
        callWeightWitness: SpWeightsWeightV2Weight;
      };
    }
  | {
      tag: 'dispatch_whitelisted_call_with_preimage';
      value: {
        call: PolkadotRuntimeRuntimeCall;
      };
    };

export type PolkadotRuntimeCommonClaimsPalletCall =
  | {
      tag: 'claim';
      value: {
        dest: AccountId32;
        ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
      };
    }
  | {
      tag: 'mint_claim';
      value: {
        who: PolkadotRuntimeCommonClaimsEthereumAddress;
        value: bigint;
        vestingSchedule?: [bigint, bigint, number] | undefined;
        statement?: PolkadotRuntimeCommonClaimsStatementKind | undefined;
      };
    }
  | {
      tag: 'claim_attest';
      value: {
        dest: AccountId32;
        ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
        statement: Bytes;
      };
    }
  | {
      tag: 'attest';
      value: {
        statement: Bytes;
      };
    }
  | {
      tag: 'move_claim';
      value: {
        old: PolkadotRuntimeCommonClaimsEthereumAddress;
        new: PolkadotRuntimeCommonClaimsEthereumAddress;
        maybePreclaim?: AccountId32 | undefined;
      };
    };

export type PolkadotRuntimeCommonClaimsEcdsaSignature = Bytes;

export type PolkadotRuntimeCommonClaimsEthereumAddress = Bytes;

export type PolkadotRuntimeCommonClaimsStatementKind = 'regular' | 'saft';

export type PalletVestingCall =
  | { tag: 'vest'; value: never }
  | {
      tag: 'vest_other';
      value: {
        target: MultiAddress;
      };
    }
  | {
      tag: 'vested_transfer';
      value: {
        target: MultiAddress;
        schedule: PalletVestingVestingInfoVestingInfo;
      };
    }
  | {
      tag: 'force_vested_transfer';
      value: {
        source: MultiAddress;
        target: MultiAddress;
        schedule: PalletVestingVestingInfoVestingInfo;
      };
    }
  | {
      tag: 'merge_schedules';
      value: {
        schedule1Index: number;
        schedule2Index: number;
      };
    };

export type PalletVestingVestingInfoVestingInfo = {
  locked: bigint;
  perBlock: bigint;
  startingBlock: number;
};

export type PalletUtilityCall =
  | {
      tag: 'batch';
      value: {
        calls: Array<PolkadotRuntimeRuntimeCall>;
      };
    }
  | {
      tag: 'as_derivative';
      value: {
        index: number;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'batch_all';
      value: {
        calls: Array<PolkadotRuntimeRuntimeCall>;
      };
    }
  | {
      tag: 'dispatch_as';
      value: {
        asOrigin: PolkadotRuntimeOriginCaller;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'force_batch';
      value: {
        calls: Array<PolkadotRuntimeRuntimeCall>;
      };
    }
  | {
      tag: 'with_weight';
      value: {
        call: PolkadotRuntimeRuntimeCall;
        weight: SpWeightsWeightV2Weight;
      };
    };

export type PalletIdentityCall =
  | {
      tag: 'add_registrar';
      value: {
        account: MultiAddress;
      };
    }
  | {
      tag: 'set_identity';
      value: {
        info: PalletIdentityIdentityInfo;
      };
    }
  | {
      tag: 'set_subs';
      value: {
        subs: Array<[AccountId32, PalletIdentityData]>;
      };
    }
  | { tag: 'clear_identity'; value: never }
  | {
      tag: 'request_judgement';
      value: {
        regIndex: number;
        maxFee: bigint;
      };
    }
  | {
      tag: 'cancel_request';
      value: {
        regIndex: number;
      };
    }
  | {
      tag: 'set_fee';
      value: {
        index: number;
        fee: bigint;
      };
    }
  | {
      tag: 'set_account_id';
      value: {
        index: number;
        new: MultiAddress;
      };
    }
  | {
      tag: 'set_fields';
      value: {
        index: number;
        fields: PalletIdentityBitFlags;
      };
    }
  | {
      tag: 'provide_judgement';
      value: {
        regIndex: number;
        target: MultiAddress;
        judgement: PalletIdentityJudgement;
        identity: H256;
      };
    }
  | {
      tag: 'kill_identity';
      value: {
        target: MultiAddress;
      };
    }
  | {
      tag: 'add_sub';
      value: {
        sub: MultiAddress;
        data: PalletIdentityData;
      };
    }
  | {
      tag: 'rename_sub';
      value: {
        sub: MultiAddress;
        data: PalletIdentityData;
      };
    }
  | {
      tag: 'remove_sub';
      value: {
        sub: MultiAddress;
      };
    }
  | { tag: 'quit_sub'; value: never };

export type PalletIdentityIdentityInfo = {
  additional: Array<[PalletIdentityData, PalletIdentityData]>;
  display: PalletIdentityData;
  legal: PalletIdentityData;
  web: PalletIdentityData;
  riot: PalletIdentityData;
  email: PalletIdentityData;
  pgpFingerprint?: Bytes | undefined;
  image: PalletIdentityData;
  twitter: PalletIdentityData;
};

export type PalletIdentityData =
  | { tag: 'None'; value: never }
  | { tag: 'Raw0'; value: Bytes }
  | { tag: 'Raw1'; value: Bytes }
  | { tag: 'Raw2'; value: Bytes }
  | { tag: 'Raw3'; value: Bytes }
  | { tag: 'Raw4'; value: Bytes }
  | { tag: 'Raw5'; value: Bytes }
  | { tag: 'Raw6'; value: Bytes }
  | { tag: 'Raw7'; value: Bytes }
  | { tag: 'Raw8'; value: Bytes }
  | { tag: 'Raw9'; value: Bytes }
  | { tag: 'Raw10'; value: Bytes }
  | { tag: 'Raw11'; value: Bytes }
  | { tag: 'Raw12'; value: Bytes }
  | { tag: 'Raw13'; value: Bytes }
  | { tag: 'Raw14'; value: Bytes }
  | { tag: 'Raw15'; value: Bytes }
  | { tag: 'Raw16'; value: Bytes }
  | { tag: 'Raw17'; value: Bytes }
  | { tag: 'Raw18'; value: Bytes }
  | { tag: 'Raw19'; value: Bytes }
  | { tag: 'Raw20'; value: Bytes }
  | { tag: 'Raw21'; value: Bytes }
  | { tag: 'Raw22'; value: Bytes }
  | { tag: 'Raw23'; value: Bytes }
  | { tag: 'Raw24'; value: Bytes }
  | { tag: 'Raw25'; value: Bytes }
  | { tag: 'Raw26'; value: Bytes }
  | { tag: 'Raw27'; value: Bytes }
  | { tag: 'Raw28'; value: Bytes }
  | { tag: 'Raw29'; value: Bytes }
  | { tag: 'Raw30'; value: Bytes }
  | { tag: 'Raw31'; value: Bytes }
  | { tag: 'Raw32'; value: Bytes }
  | { tag: 'BlakeTwo256'; value: Bytes }
  | { tag: 'Sha256'; value: Bytes }
  | { tag: 'Keccak256'; value: Bytes }
  | { tag: 'ShaThree256'; value: Bytes };

export type PalletIdentityBitFlags = bigint;

export type PalletIdentityIdentityField =
  | 'display'
  | 'legal'
  | 'web'
  | 'riot'
  | 'email'
  | 'pgpFingerprint'
  | 'image'
  | 'twitter';

export type PalletIdentityJudgement =
  | { tag: 'Unknown'; value: never }
  | { tag: 'FeePaid'; value: bigint }
  | { tag: 'Reasonable'; value: never }
  | { tag: 'KnownGood'; value: never }
  | { tag: 'OutOfDate'; value: never }
  | { tag: 'LowQuality'; value: never }
  | { tag: 'Erroneous'; value: never };

export type PalletProxyCall =
  | {
      tag: 'proxy';
      value: {
        real: MultiAddress;
        forceProxyType?: PolkadotRuntimeProxyType | undefined;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'add_proxy';
      value: {
        delegate: MultiAddress;
        proxyType: PolkadotRuntimeProxyType;
        delay: number;
      };
    }
  | {
      tag: 'remove_proxy';
      value: {
        delegate: MultiAddress;
        proxyType: PolkadotRuntimeProxyType;
        delay: number;
      };
    }
  | { tag: 'remove_proxies'; value: never }
  | {
      tag: 'create_pure';
      value: {
        proxyType: PolkadotRuntimeProxyType;
        delay: number;
        index: number;
      };
    }
  | {
      tag: 'kill_pure';
      value: {
        spawner: MultiAddress;
        proxyType: PolkadotRuntimeProxyType;
        index: number;
        height: number;
        extIndex: number;
      };
    }
  | {
      tag: 'announce';
      value: {
        real: MultiAddress;
        callHash: H256;
      };
    }
  | {
      tag: 'remove_announcement';
      value: {
        real: MultiAddress;
        callHash: H256;
      };
    }
  | {
      tag: 'reject_announcement';
      value: {
        delegate: MultiAddress;
        callHash: H256;
      };
    }
  | {
      tag: 'proxy_announced';
      value: {
        delegate: MultiAddress;
        real: MultiAddress;
        forceProxyType?: PolkadotRuntimeProxyType | undefined;
        call: PolkadotRuntimeRuntimeCall;
      };
    };

export type PolkadotRuntimeProxyType =
  | 'any'
  | 'nonTransfer'
  | 'governance'
  | 'staking'
  | 'identityJudgement'
  | 'cancelProxy'
  | 'auction'
  | 'nominationPools';

export type PalletMultisigCall =
  | {
      tag: 'as_multi_threshold_1';
      value: {
        otherSignatories: Array<AccountId32>;
        call: PolkadotRuntimeRuntimeCall;
      };
    }
  | {
      tag: 'as_multi';
      value: {
        threshold: number;
        otherSignatories: Array<AccountId32>;
        maybeTimepoint?: PalletMultisigTimepoint | undefined;
        call: PolkadotRuntimeRuntimeCall;
        maxWeight: SpWeightsWeightV2Weight;
      };
    }
  | {
      tag: 'approve_as_multi';
      value: {
        threshold: number;
        otherSignatories: Array<AccountId32>;
        maybeTimepoint?: PalletMultisigTimepoint | undefined;
        callHash: Bytes;
        maxWeight: SpWeightsWeightV2Weight;
      };
    }
  | {
      tag: 'cancel_as_multi';
      value: {
        threshold: number;
        otherSignatories: Array<AccountId32>;
        timepoint: PalletMultisigTimepoint;
        callHash: Bytes;
      };
    };

export type PalletMultisigTimepoint = {
  height: number;
  index: number;
};

export type PalletBountiesCall =
  | {
      tag: 'propose_bounty';
      value: {
        value: bigint;
        description: Bytes;
      };
    }
  | {
      tag: 'approve_bounty';
      value: {
        bountyId: number;
      };
    }
  | {
      tag: 'propose_curator';
      value: {
        bountyId: number;
        curator: MultiAddress;
        fee: bigint;
      };
    }
  | {
      tag: 'unassign_curator';
      value: {
        bountyId: number;
      };
    }
  | {
      tag: 'accept_curator';
      value: {
        bountyId: number;
      };
    }
  | {
      tag: 'award_bounty';
      value: {
        bountyId: number;
        beneficiary: MultiAddress;
      };
    }
  | {
      tag: 'claim_bounty';
      value: {
        bountyId: number;
      };
    }
  | {
      tag: 'close_bounty';
      value: {
        bountyId: number;
      };
    }
  | {
      tag: 'extend_bounty_expiry';
      value: {
        bountyId: number;
        remark: Bytes;
      };
    };

export type PalletChildBountiesCall =
  | {
      tag: 'add_child_bounty';
      value: {
        parentBountyId: number;
        value: bigint;
        description: Bytes;
      };
    }
  | {
      tag: 'propose_curator';
      value: {
        parentBountyId: number;
        childBountyId: number;
        curator: MultiAddress;
        fee: bigint;
      };
    }
  | {
      tag: 'accept_curator';
      value: {
        parentBountyId: number;
        childBountyId: number;
      };
    }
  | {
      tag: 'unassign_curator';
      value: {
        parentBountyId: number;
        childBountyId: number;
      };
    }
  | {
      tag: 'award_child_bounty';
      value: {
        parentBountyId: number;
        childBountyId: number;
        beneficiary: MultiAddress;
      };
    }
  | {
      tag: 'claim_child_bounty';
      value: {
        parentBountyId: number;
        childBountyId: number;
      };
    }
  | {
      tag: 'close_child_bounty';
      value: {
        parentBountyId: number;
        childBountyId: number;
      };
    };

export type PalletTipsCall =
  | {
      tag: 'report_awesome';
      value: {
        reason: Bytes;
        who: MultiAddress;
      };
    }
  | {
      tag: 'retract_tip';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'tip_new';
      value: {
        reason: Bytes;
        who: MultiAddress;
        tipValue: bigint;
      };
    }
  | {
      tag: 'tip';
      value: {
        hash: H256;
        tipValue: bigint;
      };
    }
  | {
      tag: 'close_tip';
      value: {
        hash: H256;
      };
    }
  | {
      tag: 'slash_tip';
      value: {
        hash: H256;
      };
    };

export type PalletElectionProviderMultiPhaseCall =
  | {
      tag: 'submit_unsigned';
      value: {
        rawSolution: PalletElectionProviderMultiPhaseRawSolution;
        witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
      };
    }
  | {
      tag: 'set_minimum_untrusted_score';
      value: {
        maybeNextScore?: SpNposElectionsElectionScore | undefined;
      };
    }
  | {
      tag: 'set_emergency_election_result';
      value: {
        supports: Array<[AccountId32, SpNposElectionsSupport]>;
      };
    }
  | {
      tag: 'submit';
      value: {
        rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      };
    }
  | {
      tag: 'governance_fallback';
      value: {
        maybeMaxVoters?: number | undefined;
        maybeMaxTargets?: number | undefined;
      };
    };

export type PalletElectionProviderMultiPhaseRawSolution = {
  solution: PolkadotRuntimeNposCompactSolution16;
  score: SpNposElectionsElectionScore;
  round: number;
};

export type PolkadotRuntimeNposCompactSolution16 = {
  votes1: Array<[number, number]>;
  votes2: Array<[number, [number, PerU16], number]>;
  votes3: Array<[number, Array<[number, PerU16]>, number]>;
  votes4: Array<[number, Array<[number, PerU16]>, number]>;
  votes5: Array<[number, Array<[number, PerU16]>, number]>;
  votes6: Array<[number, Array<[number, PerU16]>, number]>;
  votes7: Array<[number, Array<[number, PerU16]>, number]>;
  votes8: Array<[number, Array<[number, PerU16]>, number]>;
  votes9: Array<[number, Array<[number, PerU16]>, number]>;
  votes10: Array<[number, Array<[number, PerU16]>, number]>;
  votes11: Array<[number, Array<[number, PerU16]>, number]>;
  votes12: Array<[number, Array<[number, PerU16]>, number]>;
  votes13: Array<[number, Array<[number, PerU16]>, number]>;
  votes14: Array<[number, Array<[number, PerU16]>, number]>;
  votes15: Array<[number, Array<[number, PerU16]>, number]>;
  votes16: Array<[number, Array<[number, PerU16]>, number]>;
};

export type SpNposElectionsElectionScore = {
  minimalStake: bigint;
  sumStake: bigint;
  sumStakeSquared: bigint;
};

export type PalletElectionProviderMultiPhaseSolutionOrSnapshotSize = {
  voters: number;
  targets: number;
};

export type SpNposElectionsSupport = {
  total: bigint;
  voters: Array<[AccountId32, bigint]>;
};

export type PalletBagsListCall =
  | {
      tag: 'rebag';
      value: {
        dislocated: MultiAddress;
      };
    }
  | {
      tag: 'put_in_front_of';
      value: {
        lighter: MultiAddress;
      };
    };

export type PalletNominationPoolsCall =
  | {
      tag: 'join';
      value: {
        amount: bigint;
        poolId: number;
      };
    }
  | {
      tag: 'bond_extra';
      value: {
        extra: PalletNominationPoolsBondExtra;
      };
    }
  | { tag: 'claim_payout'; value: never }
  | {
      tag: 'unbond';
      value: {
        memberAccount: MultiAddress;
        unbondingPoints: bigint;
      };
    }
  | {
      tag: 'pool_withdraw_unbonded';
      value: {
        poolId: number;
        numSlashingSpans: number;
      };
    }
  | {
      tag: 'withdraw_unbonded';
      value: {
        memberAccount: MultiAddress;
        numSlashingSpans: number;
      };
    }
  | {
      tag: 'create';
      value: {
        amount: bigint;
        root: MultiAddress;
        nominator: MultiAddress;
        bouncer: MultiAddress;
      };
    }
  | {
      tag: 'create_with_pool_id';
      value: {
        amount: bigint;
        root: MultiAddress;
        nominator: MultiAddress;
        bouncer: MultiAddress;
        poolId: number;
      };
    }
  | {
      tag: 'nominate';
      value: {
        poolId: number;
        validators: Array<AccountId32>;
      };
    }
  | {
      tag: 'set_state';
      value: {
        poolId: number;
        state: PalletNominationPoolsPoolState;
      };
    }
  | {
      tag: 'set_metadata';
      value: {
        poolId: number;
        metadata: Bytes;
      };
    }
  | {
      tag: 'set_configs';
      value: {
        minJoinBond: { tag: 'Noop'; value: never } | { tag: 'Set'; value: bigint } | { tag: 'Remove'; value: never };
        minCreateBond: { tag: 'Noop'; value: never } | { tag: 'Set'; value: bigint } | { tag: 'Remove'; value: never };
        maxPools: { tag: 'Noop'; value: never } | { tag: 'Set'; value: number } | { tag: 'Remove'; value: never };
        maxMembers: { tag: 'Noop'; value: never } | { tag: 'Set'; value: number } | { tag: 'Remove'; value: never };
        maxMembersPerPool:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: number }
          | { tag: 'Remove'; value: never };
        globalMaxCommission:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: Perbill }
          | { tag: 'Remove'; value: never };
      };
    }
  | {
      tag: 'update_roles';
      value: {
        poolId: number;
        newRoot: { tag: 'Noop'; value: never } | { tag: 'Set'; value: AccountId32 } | { tag: 'Remove'; value: never };
        newNominator:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: AccountId32 }
          | { tag: 'Remove'; value: never };
        newBouncer:
          | { tag: 'Noop'; value: never }
          | { tag: 'Set'; value: AccountId32 }
          | { tag: 'Remove'; value: never };
      };
    }
  | {
      tag: 'chill';
      value: {
        poolId: number;
      };
    }
  | {
      tag: 'bond_extra_other';
      value: {
        member: MultiAddress;
        extra: PalletNominationPoolsBondExtra;
      };
    }
  | {
      tag: 'set_claim_permission';
      value: {
        permission: PalletNominationPoolsClaimPermission;
      };
    }
  | {
      tag: 'claim_payout_other';
      value: {
        other: AccountId32;
      };
    }
  | {
      tag: 'set_commission';
      value: {
        poolId: number;
        newCommission?: [Perbill, AccountId32] | undefined;
      };
    }
  | {
      tag: 'set_commission_max';
      value: {
        poolId: number;
        maxCommission: Perbill;
      };
    }
  | {
      tag: 'set_commission_change_rate';
      value: {
        poolId: number;
        changeRate: PalletNominationPoolsCommissionChangeRate;
      };
    }
  | {
      tag: 'claim_commission';
      value: {
        poolId: number;
      };
    };

export type PalletNominationPoolsBondExtra = { tag: 'FreeBalance'; value: bigint } | { tag: 'Rewards'; value: never };

export type PalletNominationPoolsPoolState = 'open' | 'blocked' | 'destroying';

export type PalletNominationPoolsClaimPermission =
  | 'permissioned'
  | 'permissionlessCompound'
  | 'permissionlessWithdraw'
  | 'permissionlessAll';

export type PalletNominationPoolsCommissionChangeRate = {
  maxIncrease: Perbill;
  minDelay: number;
};

export type PalletFastUnstakeCall =
  | { tag: 'register_fast_unstake'; value: never }
  | { tag: 'deregister'; value: never }
  | {
      tag: 'control';
      value: {
        erasToCheck: number;
      };
    };

export type PolkadotRuntimeParachainsConfigurationPalletCall =
  | {
      tag: 'set_validation_upgrade_cooldown';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_validation_upgrade_delay';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_code_retention_period';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_code_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_pov_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_head_data_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_parathread_cores';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_parathread_retries';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_group_rotation_frequency';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_chain_availability_period';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_thread_availability_period';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_scheduling_lookahead';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_validators_per_core';
      value: {
        new?: number | undefined;
      };
    }
  | {
      tag: 'set_max_validators';
      value: {
        new?: number | undefined;
      };
    }
  | {
      tag: 'set_dispute_period';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_dispute_post_conclusion_acceptance_period';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_no_show_slots';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_n_delay_tranches';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_zeroth_delay_tranche_width';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_needed_approvals';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_relay_vrf_modulo_samples';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_upward_queue_count';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_upward_queue_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_downward_message_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_upward_message_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_max_upward_message_num_per_candidate';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_open_request_ttl';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_sender_deposit';
      value: {
        new: bigint;
      };
    }
  | {
      tag: 'set_hrmp_recipient_deposit';
      value: {
        new: bigint;
      };
    }
  | {
      tag: 'set_hrmp_channel_max_capacity';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_channel_max_total_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_max_parachain_inbound_channels';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_max_parathread_inbound_channels';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_channel_max_message_size';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_max_parachain_outbound_channels';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_max_parathread_outbound_channels';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_hrmp_max_message_num_per_candidate';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_pvf_checking_enabled';
      value: {
        new: boolean;
      };
    }
  | {
      tag: 'set_pvf_voting_ttl';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_minimum_validation_upgrade_delay';
      value: {
        new: number;
      };
    }
  | {
      tag: 'set_bypass_consistency_check';
      value: {
        new: boolean;
      };
    }
  | {
      tag: 'set_async_backing_params';
      value: {
        new: PolkadotPrimitivesVstagingAsyncBackingParams;
      };
    }
  | {
      tag: 'set_executor_params';
      value: {
        new: PolkadotPrimitivesV4ExecutorParamsExecutorParams;
      };
    };

export type PolkadotPrimitivesVstagingAsyncBackingParams = {
  maxCandidateDepth: number;
  allowedAncestryLen: number;
};

export type PolkadotPrimitivesV4ExecutorParamsExecutorParams = Array<PolkadotPrimitivesV4ExecutorParamsExecutorParam>;

export type PolkadotPrimitivesV4ExecutorParamsExecutorParam =
  | { tag: 'MaxMemoryPages'; value: number }
  | { tag: 'StackLogicalMax'; value: number }
  | { tag: 'StackNativeMax'; value: number }
  | { tag: 'PrecheckingMaxMemory'; value: bigint }
  | { tag: 'PvfPrepTimeout'; value: [PolkadotPrimitivesV4PvfPrepTimeoutKind, bigint] }
  | { tag: 'PvfExecTimeout'; value: [PolkadotPrimitivesV4PvfExecTimeoutKind, bigint] }
  | { tag: 'WasmExtBulkMemory'; value: never };

export type PolkadotPrimitivesV4PvfPrepTimeoutKind = 'precheck' | 'lenient';

export type PolkadotPrimitivesV4PvfExecTimeoutKind = 'backing' | 'approval';

export type PolkadotRuntimeParachainsSharedPalletCall = never;

export type PolkadotRuntimeParachainsInclusionPalletCall = never;

export type PolkadotRuntimeParachainsParasInherentPalletCall = {
  tag: 'enter';
  value: {
    data: PolkadotPrimitivesV4InherentData;
  };
};

export type PolkadotPrimitivesV4InherentData = {
  bitfields: Array<PolkadotPrimitivesV4SignedUncheckedSigned>;
  backedCandidates: Array<PolkadotPrimitivesV4BackedCandidate>;
  disputes: Array<PolkadotPrimitivesV4DisputeStatementSet>;
  parentHeader: SpRuntimeHeaderHeader;
};

export type PolkadotPrimitivesV4SignedUncheckedSigned = {
  payload: PolkadotPrimitivesV4AvailabilityBitfield;
  validatorIndex: PolkadotPrimitivesV4ValidatorIndex;
  signature: PolkadotPrimitivesV4ValidatorAppSignature;
};

export type PolkadotPrimitivesV4AvailabilityBitfield = BitSequence;

export type BitvecOrderLsb0 = never;

export type PolkadotPrimitivesV4ValidatorIndex = number;

export type PolkadotPrimitivesV4ValidatorAppSignature = SpCoreSr25519Signature;

export type PolkadotPrimitivesV4BackedCandidate = {
  candidate: PolkadotPrimitivesV4CommittedCandidateReceipt;
  validityVotes: Array<PolkadotPrimitivesV4ValidityAttestation>;
  validatorIndices: BitSequence;
};

export type PolkadotPrimitivesV4CommittedCandidateReceipt = {
  descriptor: PolkadotPrimitivesV4CandidateDescriptor;
  commitments: PolkadotPrimitivesV4CandidateCommitments;
};

export type PolkadotPrimitivesV4CandidateDescriptor = {
  paraId: PolkadotParachainPrimitivesId;
  relayParent: H256;
  collator: PolkadotPrimitivesV4CollatorAppPublic;
  persistedValidationDataHash: H256;
  povHash: H256;
  erasureRoot: H256;
  signature: PolkadotPrimitivesV4CollatorAppSignature;
  paraHead: H256;
  validationCodeHash: PolkadotParachainPrimitivesValidationCodeHash;
};

export type PolkadotPrimitivesV4CollatorAppPublic = SpCoreSr25519Public;

export type PolkadotPrimitivesV4CollatorAppSignature = SpCoreSr25519Signature;

export type PolkadotParachainPrimitivesValidationCodeHash = H256;

export type PolkadotPrimitivesV4CandidateCommitments = {
  upwardMessages: Array<Bytes>;
  horizontalMessages: Array<PolkadotCorePrimitivesOutboundHrmpMessage>;
  newValidationCode?: PolkadotParachainPrimitivesValidationCode | undefined;
  headData: PolkadotParachainPrimitivesHeadData;
  processedDownwardMessages: number;
  hrmpWatermark: number;
};

export type PolkadotCorePrimitivesOutboundHrmpMessage = {
  recipient: PolkadotParachainPrimitivesId;
  data: Bytes;
};

export type PolkadotParachainPrimitivesValidationCode = Bytes;

export type PolkadotParachainPrimitivesHeadData = Bytes;

export type PolkadotPrimitivesV4ValidityAttestation =
  | { tag: 'Implicit'; value: PolkadotPrimitivesV4ValidatorAppSignature }
  | { tag: 'Explicit'; value: PolkadotPrimitivesV4ValidatorAppSignature };

export type PolkadotPrimitivesV4DisputeStatementSet = {
  candidateHash: PolkadotCorePrimitivesCandidateHash;
  session: number;
  statements: Array<
    [
      PolkadotPrimitivesV4DisputeStatement,
      PolkadotPrimitivesV4ValidatorIndex,
      PolkadotPrimitivesV4ValidatorAppSignature,
    ]
  >;
};

export type PolkadotCorePrimitivesCandidateHash = H256;

export type PolkadotPrimitivesV4DisputeStatement =
  | { tag: 'Valid'; value: PolkadotPrimitivesV4ValidDisputeStatementKind }
  | { tag: 'Invalid'; value: PolkadotPrimitivesV4InvalidDisputeStatementKind };

export type PolkadotPrimitivesV4ValidDisputeStatementKind =
  | { tag: 'Explicit'; value: never }
  | { tag: 'BackingSeconded'; value: H256 }
  | { tag: 'BackingValid'; value: H256 }
  | { tag: 'ApprovalChecking'; value: never };

export type PolkadotPrimitivesV4InvalidDisputeStatementKind = 'explicit';

export type PolkadotRuntimeParachainsParasPalletCall =
  | {
      tag: 'force_set_current_code';
      value: {
        para: PolkadotParachainPrimitivesId;
        newCode: PolkadotParachainPrimitivesValidationCode;
      };
    }
  | {
      tag: 'force_set_current_head';
      value: {
        para: PolkadotParachainPrimitivesId;
        newHead: PolkadotParachainPrimitivesHeadData;
      };
    }
  | {
      tag: 'force_schedule_code_upgrade';
      value: {
        para: PolkadotParachainPrimitivesId;
        newCode: PolkadotParachainPrimitivesValidationCode;
        relayParentNumber: number;
      };
    }
  | {
      tag: 'force_note_new_head';
      value: {
        para: PolkadotParachainPrimitivesId;
        newHead: PolkadotParachainPrimitivesHeadData;
      };
    }
  | {
      tag: 'force_queue_action';
      value: {
        para: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'add_trusted_validation_code';
      value: {
        validationCode: PolkadotParachainPrimitivesValidationCode;
      };
    }
  | {
      tag: 'poke_unused_validation_code';
      value: {
        validationCodeHash: PolkadotParachainPrimitivesValidationCodeHash;
      };
    }
  | {
      tag: 'include_pvf_check_statement';
      value: {
        stmt: PolkadotPrimitivesV4PvfCheckStatement;
        signature: PolkadotPrimitivesV4ValidatorAppSignature;
      };
    };

export type PolkadotPrimitivesV4PvfCheckStatement = {
  accept: boolean;
  subject: PolkadotParachainPrimitivesValidationCodeHash;
  sessionIndex: number;
  validatorIndex: PolkadotPrimitivesV4ValidatorIndex;
};

export type PolkadotRuntimeParachainsInitializerPalletCall = {
  tag: 'force_approve';
  value: {
    upTo: number;
  };
};

export type PolkadotRuntimeParachainsHrmpPalletCall =
  | {
      tag: 'hrmp_init_open_channel';
      value: {
        recipient: PolkadotParachainPrimitivesId;
        proposedMaxCapacity: number;
        proposedMaxMessageSize: number;
      };
    }
  | {
      tag: 'hrmp_accept_open_channel';
      value: {
        sender: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'hrmp_close_channel';
      value: {
        channelId: PolkadotParachainPrimitivesHrmpChannelId;
      };
    }
  | {
      tag: 'force_clean_hrmp';
      value: {
        para: PolkadotParachainPrimitivesId;
        inbound: number;
        outbound: number;
      };
    }
  | {
      tag: 'force_process_hrmp_open';
      value: {
        channels: number;
      };
    }
  | {
      tag: 'force_process_hrmp_close';
      value: {
        channels: number;
      };
    }
  | {
      tag: 'hrmp_cancel_open_request';
      value: {
        channelId: PolkadotParachainPrimitivesHrmpChannelId;
        openRequests: number;
      };
    }
  | {
      tag: 'force_open_hrmp_channel';
      value: {
        sender: PolkadotParachainPrimitivesId;
        recipient: PolkadotParachainPrimitivesId;
        maxCapacity: number;
        maxMessageSize: number;
      };
    };

export type PolkadotParachainPrimitivesHrmpChannelId = {
  sender: PolkadotParachainPrimitivesId;
  recipient: PolkadotParachainPrimitivesId;
};

export type PolkadotRuntimeParachainsDisputesPalletCall = 'forceUnfreeze';

export type PolkadotRuntimeParachainsDisputesSlashingPalletCall = {
  tag: 'report_dispute_lost_unsigned';
  value: {
    disputeProof: PolkadotRuntimeParachainsDisputesSlashingDisputeProof;
    keyOwnerProof: SpSessionMembershipProof;
  };
};

export type PolkadotRuntimeParachainsDisputesSlashingDisputeProof = {
  timeSlot: PolkadotRuntimeParachainsDisputesSlashingDisputesTimeSlot;
  kind: PolkadotRuntimeParachainsDisputesSlashingSlashingOffenceKind;
  validatorIndex: PolkadotPrimitivesV4ValidatorIndex;
  validatorId: PolkadotPrimitivesV4ValidatorAppPublic;
};

export type PolkadotRuntimeParachainsDisputesSlashingDisputesTimeSlot = {
  sessionIndex: number;
  candidateHash: PolkadotCorePrimitivesCandidateHash;
};

export type PolkadotRuntimeParachainsDisputesSlashingSlashingOffenceKind = 'forInvalid' | 'againstValid';

export type PolkadotRuntimeCommonParasRegistrarPalletCall =
  | {
      tag: 'register';
      value: {
        id: PolkadotParachainPrimitivesId;
        genesisHead: PolkadotParachainPrimitivesHeadData;
        validationCode: PolkadotParachainPrimitivesValidationCode;
      };
    }
  | {
      tag: 'force_register';
      value: {
        who: AccountId32;
        deposit: bigint;
        id: PolkadotParachainPrimitivesId;
        genesisHead: PolkadotParachainPrimitivesHeadData;
        validationCode: PolkadotParachainPrimitivesValidationCode;
      };
    }
  | {
      tag: 'deregister';
      value: {
        id: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'swap';
      value: {
        id: PolkadotParachainPrimitivesId;
        other: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'remove_lock';
      value: {
        para: PolkadotParachainPrimitivesId;
      };
    }
  | { tag: 'reserve'; value: never }
  | {
      tag: 'add_lock';
      value: {
        para: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'schedule_code_upgrade';
      value: {
        para: PolkadotParachainPrimitivesId;
        newCode: PolkadotParachainPrimitivesValidationCode;
      };
    }
  | {
      tag: 'set_current_head';
      value: {
        para: PolkadotParachainPrimitivesId;
        newHead: PolkadotParachainPrimitivesHeadData;
      };
    };

export type PolkadotRuntimeCommonSlotsPalletCall =
  | {
      tag: 'force_lease';
      value: {
        para: PolkadotParachainPrimitivesId;
        leaser: AccountId32;
        amount: bigint;
        periodBegin: number;
        periodCount: number;
      };
    }
  | {
      tag: 'clear_all_leases';
      value: {
        para: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'trigger_onboard';
      value: {
        para: PolkadotParachainPrimitivesId;
      };
    };

export type PolkadotRuntimeCommonAuctionsPalletCall =
  | {
      tag: 'new_auction';
      value: {
        duration: number;
        leasePeriodIndex: number;
      };
    }
  | {
      tag: 'bid';
      value: {
        para: PolkadotParachainPrimitivesId;
        auctionIndex: number;
        firstSlot: number;
        lastSlot: number;
        amount: bigint;
      };
    }
  | { tag: 'cancel_auction'; value: never };

export type PolkadotRuntimeCommonCrowdloanPalletCall =
  | {
      tag: 'create';
      value: {
        index: PolkadotParachainPrimitivesId;
        cap: bigint;
        firstPeriod: number;
        lastPeriod: number;
        end: number;
        verifier?: SpRuntimeMultiSigner | undefined;
      };
    }
  | {
      tag: 'contribute';
      value: {
        index: PolkadotParachainPrimitivesId;
        value: bigint;
        signature?: SpRuntimeMultiSignature | undefined;
      };
    }
  | {
      tag: 'withdraw';
      value: {
        who: AccountId32;
        index: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'refund';
      value: {
        index: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'dissolve';
      value: {
        index: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'edit';
      value: {
        index: PolkadotParachainPrimitivesId;
        cap: bigint;
        firstPeriod: number;
        lastPeriod: number;
        end: number;
        verifier?: SpRuntimeMultiSigner | undefined;
      };
    }
  | {
      tag: 'add_memo';
      value: {
        index: PolkadotParachainPrimitivesId;
        memo: Bytes;
      };
    }
  | {
      tag: 'poke';
      value: {
        index: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'contribute_all';
      value: {
        index: PolkadotParachainPrimitivesId;
        signature?: SpRuntimeMultiSignature | undefined;
      };
    };

export type SpRuntimeMultiSigner =
  | { tag: 'Ed25519'; value: SpCoreEd25519Public }
  | { tag: 'Sr25519'; value: SpCoreSr25519Public }
  | { tag: 'Ecdsa'; value: SpCoreEcdsaPublic };

export type SpCoreEcdsaPublic = Bytes;

export type SpRuntimeMultiSignature =
  | { tag: 'Ed25519'; value: SpCoreEd25519Signature }
  | { tag: 'Sr25519'; value: SpCoreSr25519Signature }
  | { tag: 'Ecdsa'; value: SpCoreEcdsaSignature };

export type SpCoreEcdsaSignature = Bytes;

export type PalletXcmCall =
  | {
      tag: 'send';
      value: {
        dest: XcmVersionedMultiLocation;
        message: XcmVersionedXcm;
      };
    }
  | {
      tag: 'teleport_assets';
      value: {
        dest: XcmVersionedMultiLocation;
        beneficiary: XcmVersionedMultiLocation;
        assets: XcmVersionedMultiAssets;
        feeAssetItem: number;
      };
    }
  | {
      tag: 'reserve_transfer_assets';
      value: {
        dest: XcmVersionedMultiLocation;
        beneficiary: XcmVersionedMultiLocation;
        assets: XcmVersionedMultiAssets;
        feeAssetItem: number;
      };
    }
  | {
      tag: 'execute';
      value: {
        message: XcmVersionedXcm;
        maxWeight: SpWeightsWeightV2Weight;
      };
    }
  | {
      tag: 'force_xcm_version';
      value: {
        location: XcmV3MultilocationMultiLocation;
        xcmVersion: number;
      };
    }
  | {
      tag: 'force_default_xcm_version';
      value: {
        maybeXcmVersion?: number | undefined;
      };
    }
  | {
      tag: 'force_subscribe_version_notify';
      value: {
        location: XcmVersionedMultiLocation;
      };
    }
  | {
      tag: 'force_unsubscribe_version_notify';
      value: {
        location: XcmVersionedMultiLocation;
      };
    }
  | {
      tag: 'limited_reserve_transfer_assets';
      value: {
        dest: XcmVersionedMultiLocation;
        beneficiary: XcmVersionedMultiLocation;
        assets: XcmVersionedMultiAssets;
        feeAssetItem: number;
        weightLimit: XcmV3WeightLimit;
      };
    }
  | {
      tag: 'limited_teleport_assets';
      value: {
        dest: XcmVersionedMultiLocation;
        beneficiary: XcmVersionedMultiLocation;
        assets: XcmVersionedMultiAssets;
        feeAssetItem: number;
        weightLimit: XcmV3WeightLimit;
      };
    }
  | {
      tag: 'force_suspension';
      value: {
        suspended: boolean;
      };
    };

export type XcmVersionedMultiLocation =
  | { tag: 'V2'; value: XcmV2MultilocationMultiLocation }
  | { tag: 'V3'; value: XcmV3MultilocationMultiLocation };

export type XcmV2MultilocationMultiLocation = {
  parents: number;
  interior: XcmV2MultilocationJunctions;
};

export type XcmV2MultilocationJunctions =
  | { tag: 'Here'; value: never }
  | { tag: 'X1'; value: XcmV2JunctionJunction }
  | { tag: 'X2'; value: [XcmV2JunctionJunction, XcmV2JunctionJunction] }
  | { tag: 'X3'; value: [XcmV2JunctionJunction, XcmV2JunctionJunction, XcmV2JunctionJunction] }
  | { tag: 'X4'; value: [XcmV2JunctionJunction, XcmV2JunctionJunction, XcmV2JunctionJunction, XcmV2JunctionJunction] }
  | {
      tag: 'X5';
      value: [
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
      ];
    }
  | {
      tag: 'X6';
      value: [
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
      ];
    }
  | {
      tag: 'X7';
      value: [
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
      ];
    }
  | {
      tag: 'X8';
      value: [
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
        XcmV2JunctionJunction,
      ];
    };

export type XcmV2JunctionJunction =
  | { tag: 'Parachain'; value: number }
  | {
      tag: 'AccountId32';
      value: {
        network: XcmV2NetworkId;
        id: Bytes;
      };
    }
  | {
      tag: 'AccountIndex64';
      value: {
        network: XcmV2NetworkId;
        index: bigint;
      };
    }
  | {
      tag: 'AccountKey20';
      value: {
        network: XcmV2NetworkId;
        key: Bytes;
      };
    }
  | { tag: 'PalletInstance'; value: number }
  | { tag: 'GeneralIndex'; value: bigint }
  | { tag: 'GeneralKey'; value: Bytes }
  | { tag: 'OnlyChild'; value: never }
  | {
      tag: 'Plurality';
      value: {
        id: XcmV2BodyId;
        part: XcmV2BodyPart;
      };
    };

export type XcmV2NetworkId =
  | { tag: 'Any'; value: never }
  | { tag: 'Named'; value: Bytes }
  | { tag: 'Polkadot'; value: never }
  | { tag: 'Kusama'; value: never };

export type XcmV2BodyId =
  | { tag: 'Unit'; value: never }
  | { tag: 'Named'; value: Bytes }
  | { tag: 'Index'; value: number }
  | { tag: 'Executive'; value: never }
  | { tag: 'Technical'; value: never }
  | { tag: 'Legislative'; value: never }
  | { tag: 'Judicial'; value: never }
  | { tag: 'Defense'; value: never }
  | { tag: 'Administration'; value: never }
  | { tag: 'Treasury'; value: never };

export type XcmV2BodyPart =
  | { tag: 'Voice'; value: never }
  | {
      tag: 'Members';
      value: {
        count: number;
      };
    }
  | {
      tag: 'Fraction';
      value: {
        nom: number;
        denom: number;
      };
    }
  | {
      tag: 'AtLeastProportion';
      value: {
        nom: number;
        denom: number;
      };
    }
  | {
      tag: 'MoreThanProportion';
      value: {
        nom: number;
        denom: number;
      };
    };

export type XcmVersionedXcm = { tag: 'V2'; value: XcmV2Xcm } | { tag: 'V3'; value: XcmV3Xcm };

export type XcmV2Xcm = Array<XcmV2Instruction>;

export type XcmV2Instruction =
  | { tag: 'WithdrawAsset'; value: XcmV2MultiassetMultiAssets }
  | { tag: 'ReserveAssetDeposited'; value: XcmV2MultiassetMultiAssets }
  | { tag: 'ReceiveTeleportedAsset'; value: XcmV2MultiassetMultiAssets }
  | {
      tag: 'QueryResponse';
      value: {
        queryId: bigint;
        response: XcmV2Response;
        maxWeight: bigint;
      };
    }
  | {
      tag: 'TransferAsset';
      value: {
        assets: XcmV2MultiassetMultiAssets;
        beneficiary: XcmV2MultilocationMultiLocation;
      };
    }
  | {
      tag: 'TransferReserveAsset';
      value: {
        assets: XcmV2MultiassetMultiAssets;
        dest: XcmV2MultilocationMultiLocation;
        xcm: XcmV2Xcm;
      };
    }
  | {
      tag: 'Transact';
      value: {
        originType: XcmV2OriginKind;
        requireWeightAtMost: bigint;
        call: XcmDoubleEncodedDoubleEncoded;
      };
    }
  | {
      tag: 'HrmpNewChannelOpenRequest';
      value: {
        sender: number;
        maxMessageSize: number;
        maxCapacity: number;
      };
    }
  | {
      tag: 'HrmpChannelAccepted';
      value: {
        recipient: number;
      };
    }
  | {
      tag: 'HrmpChannelClosing';
      value: {
        initiator: number;
        sender: number;
        recipient: number;
      };
    }
  | { tag: 'ClearOrigin'; value: never }
  | { tag: 'DescendOrigin'; value: XcmV2MultilocationJunctions }
  | {
      tag: 'ReportError';
      value: {
        queryId: bigint;
        dest: XcmV2MultilocationMultiLocation;
        maxResponseWeight: bigint;
      };
    }
  | {
      tag: 'DepositAsset';
      value: {
        assets: XcmV2MultiassetMultiAssetFilter;
        maxAssets: number;
        beneficiary: XcmV2MultilocationMultiLocation;
      };
    }
  | {
      tag: 'DepositReserveAsset';
      value: {
        assets: XcmV2MultiassetMultiAssetFilter;
        maxAssets: number;
        dest: XcmV2MultilocationMultiLocation;
        xcm: XcmV2Xcm;
      };
    }
  | {
      tag: 'ExchangeAsset';
      value: {
        give: XcmV2MultiassetMultiAssetFilter;
        receive: XcmV2MultiassetMultiAssets;
      };
    }
  | {
      tag: 'InitiateReserveWithdraw';
      value: {
        assets: XcmV2MultiassetMultiAssetFilter;
        reserve: XcmV2MultilocationMultiLocation;
        xcm: XcmV2Xcm;
      };
    }
  | {
      tag: 'InitiateTeleport';
      value: {
        assets: XcmV2MultiassetMultiAssetFilter;
        dest: XcmV2MultilocationMultiLocation;
        xcm: XcmV2Xcm;
      };
    }
  | {
      tag: 'QueryHolding';
      value: {
        queryId: bigint;
        dest: XcmV2MultilocationMultiLocation;
        assets: XcmV2MultiassetMultiAssetFilter;
        maxResponseWeight: bigint;
      };
    }
  | {
      tag: 'BuyExecution';
      value: {
        fees: XcmV2MultiassetMultiAsset;
        weightLimit: XcmV2WeightLimit;
      };
    }
  | { tag: 'RefundSurplus'; value: never }
  | { tag: 'SetErrorHandler'; value: XcmV2Xcm }
  | { tag: 'SetAppendix'; value: XcmV2Xcm }
  | { tag: 'ClearError'; value: never }
  | {
      tag: 'ClaimAsset';
      value: {
        assets: XcmV2MultiassetMultiAssets;
        ticket: XcmV2MultilocationMultiLocation;
      };
    }
  | { tag: 'Trap'; value: bigint }
  | {
      tag: 'SubscribeVersion';
      value: {
        queryId: bigint;
        maxResponseWeight: bigint;
      };
    }
  | { tag: 'UnsubscribeVersion'; value: never };

export type XcmV2MultiassetMultiAssets = Array<XcmV2MultiassetMultiAsset>;

export type XcmV2MultiassetMultiAsset = {
  id: XcmV2MultiassetAssetId;
  fun: XcmV2MultiassetFungibility;
};

export type XcmV2MultiassetAssetId =
  | { tag: 'Concrete'; value: XcmV2MultilocationMultiLocation }
  | { tag: 'Abstract'; value: Bytes };

export type XcmV2MultiassetFungibility =
  | { tag: 'Fungible'; value: bigint }
  | { tag: 'NonFungible'; value: XcmV2MultiassetAssetInstance };

export type XcmV2MultiassetAssetInstance =
  | { tag: 'Undefined'; value: never }
  | { tag: 'Index'; value: bigint }
  | { tag: 'Array4'; value: Bytes }
  | { tag: 'Array8'; value: Bytes }
  | { tag: 'Array16'; value: Bytes }
  | { tag: 'Array32'; value: Bytes }
  | { tag: 'Blob'; value: Bytes };

export type XcmV2Response =
  | { tag: 'Null'; value: never }
  | { tag: 'Assets'; value: XcmV2MultiassetMultiAssets }
  | { tag: 'ExecutionResult'; value: [number, XcmV2TraitsError] | undefined }
  | { tag: 'Version'; value: number };

export type XcmV2TraitsError =
  | { tag: 'Overflow'; value: never }
  | { tag: 'Unimplemented'; value: never }
  | { tag: 'UntrustedReserveLocation'; value: never }
  | { tag: 'UntrustedTeleportLocation'; value: never }
  | { tag: 'MultiLocationFull'; value: never }
  | { tag: 'MultiLocationNotInvertible'; value: never }
  | { tag: 'BadOrigin'; value: never }
  | { tag: 'InvalidLocation'; value: never }
  | { tag: 'AssetNotFound'; value: never }
  | { tag: 'FailedToTransactAsset'; value: never }
  | { tag: 'NotWithdrawable'; value: never }
  | { tag: 'LocationCannotHold'; value: never }
  | { tag: 'ExceedsMaxMessageSize'; value: never }
  | { tag: 'DestinationUnsupported'; value: never }
  | { tag: 'Transport'; value: never }
  | { tag: 'Unroutable'; value: never }
  | { tag: 'UnknownClaim'; value: never }
  | { tag: 'FailedToDecode'; value: never }
  | { tag: 'MaxWeightInvalid'; value: never }
  | { tag: 'NotHoldingFees'; value: never }
  | { tag: 'TooExpensive'; value: never }
  | { tag: 'Trap'; value: bigint }
  | { tag: 'UnhandledXcmVersion'; value: never }
  | { tag: 'WeightLimitReached'; value: bigint }
  | { tag: 'Barrier'; value: never }
  | { tag: 'WeightNotComputable'; value: never };

export type XcmV2OriginKind = 'native' | 'sovereignAccount' | 'superuser' | 'xcm';

export type XcmDoubleEncodedDoubleEncoded = {
  encoded: Bytes;
};

export type XcmV2MultiassetMultiAssetFilter =
  | { tag: 'Definite'; value: XcmV2MultiassetMultiAssets }
  | { tag: 'Wild'; value: XcmV2MultiassetWildMultiAsset };

export type XcmV2MultiassetWildMultiAsset =
  | { tag: 'All'; value: never }
  | {
      tag: 'AllOf';
      value: {
        id: XcmV2MultiassetAssetId;
        fun: XcmV2MultiassetWildFungibility;
      };
    };

export type XcmV2MultiassetWildFungibility = 'fungible' | 'nonFungible';

export type XcmV2WeightLimit = { tag: 'Unlimited'; value: never } | { tag: 'Limited'; value: bigint };

export type XcmV3Xcm = Array<XcmV3Instruction>;

export type XcmV3Instruction =
  | { tag: 'WithdrawAsset'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'ReserveAssetDeposited'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'ReceiveTeleportedAsset'; value: XcmV3MultiassetMultiAssets }
  | {
      tag: 'QueryResponse';
      value: {
        queryId: bigint;
        response: XcmV3Response;
        maxWeight: SpWeightsWeightV2Weight;
        querier?: XcmV3MultilocationMultiLocation | undefined;
      };
    }
  | {
      tag: 'TransferAsset';
      value: {
        assets: XcmV3MultiassetMultiAssets;
        beneficiary: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'TransferReserveAsset';
      value: {
        assets: XcmV3MultiassetMultiAssets;
        dest: XcmV3MultilocationMultiLocation;
        xcm: XcmV3Xcm;
      };
    }
  | {
      tag: 'Transact';
      value: {
        originKind: XcmV2OriginKind;
        requireWeightAtMost: SpWeightsWeightV2Weight;
        call: XcmDoubleEncodedDoubleEncoded;
      };
    }
  | {
      tag: 'HrmpNewChannelOpenRequest';
      value: {
        sender: number;
        maxMessageSize: number;
        maxCapacity: number;
      };
    }
  | {
      tag: 'HrmpChannelAccepted';
      value: {
        recipient: number;
      };
    }
  | {
      tag: 'HrmpChannelClosing';
      value: {
        initiator: number;
        sender: number;
        recipient: number;
      };
    }
  | { tag: 'ClearOrigin'; value: never }
  | { tag: 'DescendOrigin'; value: XcmV3JunctionsJunctions }
  | { tag: 'ReportError'; value: XcmV3QueryResponseInfo }
  | {
      tag: 'DepositAsset';
      value: {
        assets: XcmV3MultiassetMultiAssetFilter;
        beneficiary: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'DepositReserveAsset';
      value: {
        assets: XcmV3MultiassetMultiAssetFilter;
        dest: XcmV3MultilocationMultiLocation;
        xcm: XcmV3Xcm;
      };
    }
  | {
      tag: 'ExchangeAsset';
      value: {
        give: XcmV3MultiassetMultiAssetFilter;
        want: XcmV3MultiassetMultiAssets;
        maximal: boolean;
      };
    }
  | {
      tag: 'InitiateReserveWithdraw';
      value: {
        assets: XcmV3MultiassetMultiAssetFilter;
        reserve: XcmV3MultilocationMultiLocation;
        xcm: XcmV3Xcm;
      };
    }
  | {
      tag: 'InitiateTeleport';
      value: {
        assets: XcmV3MultiassetMultiAssetFilter;
        dest: XcmV3MultilocationMultiLocation;
        xcm: XcmV3Xcm;
      };
    }
  | {
      tag: 'ReportHolding';
      value: {
        responseInfo: XcmV3QueryResponseInfo;
        assets: XcmV3MultiassetMultiAssetFilter;
      };
    }
  | {
      tag: 'BuyExecution';
      value: {
        fees: XcmV3MultiassetMultiAsset;
        weightLimit: XcmV3WeightLimit;
      };
    }
  | { tag: 'RefundSurplus'; value: never }
  | { tag: 'SetErrorHandler'; value: XcmV3Xcm }
  | { tag: 'SetAppendix'; value: XcmV3Xcm }
  | { tag: 'ClearError'; value: never }
  | {
      tag: 'ClaimAsset';
      value: {
        assets: XcmV3MultiassetMultiAssets;
        ticket: XcmV3MultilocationMultiLocation;
      };
    }
  | { tag: 'Trap'; value: bigint }
  | {
      tag: 'SubscribeVersion';
      value: {
        queryId: bigint;
        maxResponseWeight: SpWeightsWeightV2Weight;
      };
    }
  | { tag: 'UnsubscribeVersion'; value: never }
  | { tag: 'BurnAsset'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'ExpectAsset'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'ExpectOrigin'; value: XcmV3MultilocationMultiLocation | undefined }
  | { tag: 'ExpectError'; value: [number, XcmV3TraitsError] | undefined }
  | { tag: 'ExpectTransactStatus'; value: XcmV3MaybeErrorCode }
  | {
      tag: 'QueryPallet';
      value: {
        moduleName: Bytes;
        responseInfo: XcmV3QueryResponseInfo;
      };
    }
  | {
      tag: 'ExpectPallet';
      value: {
        index: number;
        name: Bytes;
        moduleName: Bytes;
        crateMajor: number;
        minCrateMinor: number;
      };
    }
  | { tag: 'ReportTransactStatus'; value: XcmV3QueryResponseInfo }
  | { tag: 'ClearTransactStatus'; value: never }
  | { tag: 'UniversalOrigin'; value: XcmV3JunctionJunction }
  | {
      tag: 'ExportMessage';
      value: {
        network: XcmV3JunctionNetworkId;
        destination: XcmV3JunctionsJunctions;
        xcm: XcmV3Xcm;
      };
    }
  | {
      tag: 'LockAsset';
      value: {
        asset: XcmV3MultiassetMultiAsset;
        unlocker: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'UnlockAsset';
      value: {
        asset: XcmV3MultiassetMultiAsset;
        target: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'NoteUnlockable';
      value: {
        asset: XcmV3MultiassetMultiAsset;
        owner: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'RequestUnlock';
      value: {
        asset: XcmV3MultiassetMultiAsset;
        locker: XcmV3MultilocationMultiLocation;
      };
    }
  | {
      tag: 'SetFeesMode';
      value: {
        jitWithdraw: boolean;
      };
    }
  | { tag: 'SetTopic'; value: Bytes }
  | { tag: 'ClearTopic'; value: never }
  | { tag: 'AliasOrigin'; value: XcmV3MultilocationMultiLocation }
  | {
      tag: 'UnpaidExecution';
      value: {
        weightLimit: XcmV3WeightLimit;
        checkOrigin?: XcmV3MultilocationMultiLocation | undefined;
      };
    };

export type XcmV3MultiassetMultiAssets = Array<XcmV3MultiassetMultiAsset>;

export type XcmV3MultiassetMultiAsset = {
  id: XcmV3MultiassetAssetId;
  fun: XcmV3MultiassetFungibility;
};

export type XcmV3MultiassetAssetId =
  | { tag: 'Concrete'; value: XcmV3MultilocationMultiLocation }
  | { tag: 'Abstract'; value: Bytes };

export type XcmV3MultiassetFungibility =
  | { tag: 'Fungible'; value: bigint }
  | { tag: 'NonFungible'; value: XcmV3MultiassetAssetInstance };

export type XcmV3MultiassetAssetInstance =
  | { tag: 'Undefined'; value: never }
  | { tag: 'Index'; value: bigint }
  | { tag: 'Array4'; value: Bytes }
  | { tag: 'Array8'; value: Bytes }
  | { tag: 'Array16'; value: Bytes }
  | { tag: 'Array32'; value: Bytes };

export type XcmV3Response =
  | { tag: 'Null'; value: never }
  | { tag: 'Assets'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'ExecutionResult'; value: [number, XcmV3TraitsError] | undefined }
  | { tag: 'Version'; value: number }
  | { tag: 'PalletsInfo'; value: Array<XcmV3PalletInfo> }
  | { tag: 'DispatchResult'; value: XcmV3MaybeErrorCode };

export type XcmV3TraitsError =
  | { tag: 'Overflow'; value: never }
  | { tag: 'Unimplemented'; value: never }
  | { tag: 'UntrustedReserveLocation'; value: never }
  | { tag: 'UntrustedTeleportLocation'; value: never }
  | { tag: 'LocationFull'; value: never }
  | { tag: 'LocationNotInvertible'; value: never }
  | { tag: 'BadOrigin'; value: never }
  | { tag: 'InvalidLocation'; value: never }
  | { tag: 'AssetNotFound'; value: never }
  | { tag: 'FailedToTransactAsset'; value: never }
  | { tag: 'NotWithdrawable'; value: never }
  | { tag: 'LocationCannotHold'; value: never }
  | { tag: 'ExceedsMaxMessageSize'; value: never }
  | { tag: 'DestinationUnsupported'; value: never }
  | { tag: 'Transport'; value: never }
  | { tag: 'Unroutable'; value: never }
  | { tag: 'UnknownClaim'; value: never }
  | { tag: 'FailedToDecode'; value: never }
  | { tag: 'MaxWeightInvalid'; value: never }
  | { tag: 'NotHoldingFees'; value: never }
  | { tag: 'TooExpensive'; value: never }
  | { tag: 'Trap'; value: bigint }
  | { tag: 'ExpectationFalse'; value: never }
  | { tag: 'PalletNotFound'; value: never }
  | { tag: 'NameMismatch'; value: never }
  | { tag: 'VersionIncompatible'; value: never }
  | { tag: 'HoldingWouldOverflow'; value: never }
  | { tag: 'ExportError'; value: never }
  | { tag: 'ReanchorFailed'; value: never }
  | { tag: 'NoDeal'; value: never }
  | { tag: 'FeesNotMet'; value: never }
  | { tag: 'LockError'; value: never }
  | { tag: 'NoPermission'; value: never }
  | { tag: 'Unanchored'; value: never }
  | { tag: 'NotDepositable'; value: never }
  | { tag: 'UnhandledXcmVersion'; value: never }
  | { tag: 'WeightLimitReached'; value: SpWeightsWeightV2Weight }
  | { tag: 'Barrier'; value: never }
  | { tag: 'WeightNotComputable'; value: never }
  | { tag: 'ExceedsStackLimit'; value: never };

export type XcmV3PalletInfo = {
  index: number;
  name: Bytes;
  moduleName: Bytes;
  major: number;
  minor: number;
  patch: number;
};

export type XcmV3MaybeErrorCode =
  | { tag: 'Success'; value: never }
  | { tag: 'Error'; value: Bytes }
  | { tag: 'TruncatedError'; value: Bytes };

export type XcmV3QueryResponseInfo = {
  destination: XcmV3MultilocationMultiLocation;
  queryId: bigint;
  maxWeight: SpWeightsWeightV2Weight;
};

export type XcmV3MultiassetMultiAssetFilter =
  | { tag: 'Definite'; value: XcmV3MultiassetMultiAssets }
  | { tag: 'Wild'; value: XcmV3MultiassetWildMultiAsset };

export type XcmV3MultiassetWildMultiAsset =
  | { tag: 'All'; value: never }
  | {
      tag: 'AllOf';
      value: {
        id: XcmV3MultiassetAssetId;
        fun: XcmV3MultiassetWildFungibility;
      };
    }
  | { tag: 'AllCounted'; value: number }
  | {
      tag: 'AllOfCounted';
      value: {
        id: XcmV3MultiassetAssetId;
        fun: XcmV3MultiassetWildFungibility;
        count: number;
      };
    };

export type XcmV3MultiassetWildFungibility = 'fungible' | 'nonFungible';

export type XcmV3WeightLimit = { tag: 'Unlimited'; value: never } | { tag: 'Limited'; value: SpWeightsWeightV2Weight };

export type XcmVersionedMultiAssets =
  | { tag: 'V2'; value: XcmV2MultiassetMultiAssets }
  | { tag: 'V3'; value: XcmV3MultiassetMultiAssets };

export type PalletMessageQueueCall =
  | {
      tag: 'reap_page';
      value: {
        messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        pageIndex: number;
      };
    }
  | {
      tag: 'execute_overweight';
      value: {
        messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        page: number;
        index: number;
        weightLimit: SpWeightsWeightV2Weight;
      };
    };

export type PolkadotRuntimeParachainsInclusionAggregateMessageOrigin = {
  tag: 'Ump';
  value: PolkadotRuntimeParachainsInclusionUmpQueueId;
};

export type PolkadotRuntimeParachainsInclusionUmpQueueId = { tag: 'Para'; value: PolkadotParachainPrimitivesId };

export type PalletConvictionVotingTally = {
  ayes: bigint;
  nays: bigint;
  support: bigint;
};

export type PalletWhitelistEvent =
  | {
      tag: 'CallWhitelisted';
      value: {
        callHash: H256;
      };
    }
  | {
      tag: 'WhitelistedCallRemoved';
      value: {
        callHash: H256;
      };
    }
  | {
      tag: 'WhitelistedCallDispatched';
      value: {
        callHash: H256;
        result: FrameSupportDispatchPostDispatchInfo | SpRuntimeDispatchErrorWithPostInfo;
      };
    };

export type FrameSupportDispatchPostDispatchInfo = {
  actualWeight?: SpWeightsWeightV2Weight | undefined;
  paysFee: FrameSupportDispatchPays;
};

export type SpRuntimeDispatchErrorWithPostInfo = {
  postInfo: FrameSupportDispatchPostDispatchInfo;
  error: SpRuntimeDispatchError;
};

export type PolkadotRuntimeCommonClaimsPalletEvent = {
  tag: 'Claimed';
  value: {
    who: AccountId32;
    ethereumAddress: PolkadotRuntimeCommonClaimsEthereumAddress;
    amount: bigint;
  };
};

export type PalletVestingEvent =
  | {
      tag: 'VestingUpdated';
      value: {
        account: AccountId32;
        unvested: bigint;
      };
    }
  | {
      tag: 'VestingCompleted';
      value: {
        account: AccountId32;
      };
    };

export type PalletUtilityEvent =
  | {
      tag: 'BatchInterrupted';
      value: {
        index: number;
        error: SpRuntimeDispatchError;
      };
    }
  | { tag: 'BatchCompleted'; value: never }
  | { tag: 'BatchCompletedWithErrors'; value: never }
  | { tag: 'ItemCompleted'; value: never }
  | {
      tag: 'ItemFailed';
      value: {
        error: SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'DispatchedAs';
      value: {
        result: never | SpRuntimeDispatchError;
      };
    };

export type PalletIdentityEvent =
  | {
      tag: 'IdentitySet';
      value: {
        who: AccountId32;
      };
    }
  | {
      tag: 'IdentityCleared';
      value: {
        who: AccountId32;
        deposit: bigint;
      };
    }
  | {
      tag: 'IdentityKilled';
      value: {
        who: AccountId32;
        deposit: bigint;
      };
    }
  | {
      tag: 'JudgementRequested';
      value: {
        who: AccountId32;
        registrarIndex: number;
      };
    }
  | {
      tag: 'JudgementUnrequested';
      value: {
        who: AccountId32;
        registrarIndex: number;
      };
    }
  | {
      tag: 'JudgementGiven';
      value: {
        target: AccountId32;
        registrarIndex: number;
      };
    }
  | {
      tag: 'RegistrarAdded';
      value: {
        registrarIndex: number;
      };
    }
  | {
      tag: 'SubIdentityAdded';
      value: {
        sub: AccountId32;
        main: AccountId32;
        deposit: bigint;
      };
    }
  | {
      tag: 'SubIdentityRemoved';
      value: {
        sub: AccountId32;
        main: AccountId32;
        deposit: bigint;
      };
    }
  | {
      tag: 'SubIdentityRevoked';
      value: {
        sub: AccountId32;
        main: AccountId32;
        deposit: bigint;
      };
    };

export type PalletProxyEvent =
  | {
      tag: 'ProxyExecuted';
      value: {
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'PureCreated';
      value: {
        pure: AccountId32;
        who: AccountId32;
        proxyType: PolkadotRuntimeProxyType;
        disambiguationIndex: number;
      };
    }
  | {
      tag: 'Announced';
      value: {
        real: AccountId32;
        proxy: AccountId32;
        callHash: H256;
      };
    }
  | {
      tag: 'ProxyAdded';
      value: {
        delegator: AccountId32;
        delegatee: AccountId32;
        proxyType: PolkadotRuntimeProxyType;
        delay: number;
      };
    }
  | {
      tag: 'ProxyRemoved';
      value: {
        delegator: AccountId32;
        delegatee: AccountId32;
        proxyType: PolkadotRuntimeProxyType;
        delay: number;
      };
    };

export type PalletMultisigEvent =
  | {
      tag: 'NewMultisig';
      value: {
        approving: AccountId32;
        multisig: AccountId32;
        callHash: Bytes;
      };
    }
  | {
      tag: 'MultisigApproval';
      value: {
        approving: AccountId32;
        timepoint: PalletMultisigTimepoint;
        multisig: AccountId32;
        callHash: Bytes;
      };
    }
  | {
      tag: 'MultisigExecuted';
      value: {
        approving: AccountId32;
        timepoint: PalletMultisigTimepoint;
        multisig: AccountId32;
        callHash: Bytes;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'MultisigCancelled';
      value: {
        cancelling: AccountId32;
        timepoint: PalletMultisigTimepoint;
        multisig: AccountId32;
        callHash: Bytes;
      };
    };

export type PalletBountiesEvent =
  | {
      tag: 'BountyProposed';
      value: {
        index: number;
      };
    }
  | {
      tag: 'BountyRejected';
      value: {
        index: number;
        bond: bigint;
      };
    }
  | {
      tag: 'BountyBecameActive';
      value: {
        index: number;
      };
    }
  | {
      tag: 'BountyAwarded';
      value: {
        index: number;
        beneficiary: AccountId32;
      };
    }
  | {
      tag: 'BountyClaimed';
      value: {
        index: number;
        payout: bigint;
        beneficiary: AccountId32;
      };
    }
  | {
      tag: 'BountyCanceled';
      value: {
        index: number;
      };
    }
  | {
      tag: 'BountyExtended';
      value: {
        index: number;
      };
    };

export type PalletChildBountiesEvent =
  | {
      tag: 'Added';
      value: {
        index: number;
        childIndex: number;
      };
    }
  | {
      tag: 'Awarded';
      value: {
        index: number;
        childIndex: number;
        beneficiary: AccountId32;
      };
    }
  | {
      tag: 'Claimed';
      value: {
        index: number;
        childIndex: number;
        payout: bigint;
        beneficiary: AccountId32;
      };
    }
  | {
      tag: 'Canceled';
      value: {
        index: number;
        childIndex: number;
      };
    };

export type PalletTipsEvent =
  | {
      tag: 'NewTip';
      value: {
        tipHash: H256;
      };
    }
  | {
      tag: 'TipClosing';
      value: {
        tipHash: H256;
      };
    }
  | {
      tag: 'TipClosed';
      value: {
        tipHash: H256;
        who: AccountId32;
        payout: bigint;
      };
    }
  | {
      tag: 'TipRetracted';
      value: {
        tipHash: H256;
      };
    }
  | {
      tag: 'TipSlashed';
      value: {
        tipHash: H256;
        finder: AccountId32;
        deposit: bigint;
      };
    };

export type PalletElectionProviderMultiPhaseEvent =
  | {
      tag: 'SolutionStored';
      value: {
        compute: PalletElectionProviderMultiPhaseElectionCompute;
        origin?: AccountId32 | undefined;
        prevEjected: boolean;
      };
    }
  | {
      tag: 'ElectionFinalized';
      value: {
        compute: PalletElectionProviderMultiPhaseElectionCompute;
        score: SpNposElectionsElectionScore;
      };
    }
  | { tag: 'ElectionFailed'; value: never }
  | {
      tag: 'Rewarded';
      value: {
        account: AccountId32;
        value: bigint;
      };
    }
  | {
      tag: 'Slashed';
      value: {
        account: AccountId32;
        value: bigint;
      };
    }
  | {
      tag: 'PhaseTransitioned';
      value: {
        from: PalletElectionProviderMultiPhasePhase;
        to: PalletElectionProviderMultiPhasePhase;
        round: number;
      };
    };

export type PalletElectionProviderMultiPhaseElectionCompute =
  | 'onChain'
  | 'signed'
  | 'unsigned'
  | 'fallback'
  | 'emergency';

export type PalletElectionProviderMultiPhasePhase =
  | { tag: 'Off'; value: never }
  | { tag: 'Signed'; value: never }
  | { tag: 'Unsigned'; value: [boolean, number] }
  | { tag: 'Emergency'; value: never };

export type PalletBagsListEvent =
  | {
      tag: 'Rebagged';
      value: {
        who: AccountId32;
        from: bigint;
        to: bigint;
      };
    }
  | {
      tag: 'ScoreUpdated';
      value: {
        who: AccountId32;
        newScore: bigint;
      };
    };

export type PalletNominationPoolsEvent =
  | {
      tag: 'Created';
      value: {
        depositor: AccountId32;
        poolId: number;
      };
    }
  | {
      tag: 'Bonded';
      value: {
        member: AccountId32;
        poolId: number;
        bonded: bigint;
        joined: boolean;
      };
    }
  | {
      tag: 'PaidOut';
      value: {
        member: AccountId32;
        poolId: number;
        payout: bigint;
      };
    }
  | {
      tag: 'Unbonded';
      value: {
        member: AccountId32;
        poolId: number;
        balance: bigint;
        points: bigint;
        era: number;
      };
    }
  | {
      tag: 'Withdrawn';
      value: {
        member: AccountId32;
        poolId: number;
        balance: bigint;
        points: bigint;
      };
    }
  | {
      tag: 'Destroyed';
      value: {
        poolId: number;
      };
    }
  | {
      tag: 'StateChanged';
      value: {
        poolId: number;
        newState: PalletNominationPoolsPoolState;
      };
    }
  | {
      tag: 'MemberRemoved';
      value: {
        poolId: number;
        member: AccountId32;
      };
    }
  | {
      tag: 'RolesUpdated';
      value: {
        root?: AccountId32 | undefined;
        bouncer?: AccountId32 | undefined;
        nominator?: AccountId32 | undefined;
      };
    }
  | {
      tag: 'PoolSlashed';
      value: {
        poolId: number;
        balance: bigint;
      };
    }
  | {
      tag: 'UnbondingPoolSlashed';
      value: {
        poolId: number;
        era: number;
        balance: bigint;
      };
    }
  | {
      tag: 'PoolCommissionUpdated';
      value: {
        poolId: number;
        current?: [Perbill, AccountId32] | undefined;
      };
    }
  | {
      tag: 'PoolMaxCommissionUpdated';
      value: {
        poolId: number;
        maxCommission: Perbill;
      };
    }
  | {
      tag: 'PoolCommissionChangeRateUpdated';
      value: {
        poolId: number;
        changeRate: PalletNominationPoolsCommissionChangeRate;
      };
    }
  | {
      tag: 'PoolCommissionClaimed';
      value: {
        poolId: number;
        commission: bigint;
      };
    };

export type PalletFastUnstakeEvent =
  | {
      tag: 'Unstaked';
      value: {
        stash: AccountId32;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'Slashed';
      value: {
        stash: AccountId32;
        amount: bigint;
      };
    }
  | { tag: 'InternalError'; value: never }
  | {
      tag: 'BatchChecked';
      value: {
        eras: Array<number>;
      };
    }
  | {
      tag: 'BatchFinished';
      value: {
        size: number;
      };
    };

export type PolkadotRuntimeParachainsInclusionPalletEvent =
  | {
      tag: 'CandidateBacked';
      value: [
        PolkadotPrimitivesV4CandidateReceipt,
        PolkadotParachainPrimitivesHeadData,
        PolkadotPrimitivesV4CoreIndex,
        PolkadotPrimitivesV4GroupIndex,
      ];
    }
  | {
      tag: 'CandidateIncluded';
      value: [
        PolkadotPrimitivesV4CandidateReceipt,
        PolkadotParachainPrimitivesHeadData,
        PolkadotPrimitivesV4CoreIndex,
        PolkadotPrimitivesV4GroupIndex,
      ];
    }
  | {
      tag: 'CandidateTimedOut';
      value: [PolkadotPrimitivesV4CandidateReceipt, PolkadotParachainPrimitivesHeadData, PolkadotPrimitivesV4CoreIndex];
    }
  | {
      tag: 'UpwardMessagesReceived';
      value: {
        from: PolkadotParachainPrimitivesId;
        count: number;
      };
    };

export type PolkadotPrimitivesV4CandidateReceipt = {
  descriptor: PolkadotPrimitivesV4CandidateDescriptor;
  commitmentsHash: H256;
};

export type PolkadotPrimitivesV4CoreIndex = number;

export type PolkadotPrimitivesV4GroupIndex = number;

export type PolkadotRuntimeParachainsParasPalletEvent =
  | { tag: 'CurrentCodeUpdated'; value: PolkadotParachainPrimitivesId }
  | { tag: 'CurrentHeadUpdated'; value: PolkadotParachainPrimitivesId }
  | { tag: 'CodeUpgradeScheduled'; value: PolkadotParachainPrimitivesId }
  | { tag: 'NewHeadNoted'; value: PolkadotParachainPrimitivesId }
  | { tag: 'ActionQueued'; value: [PolkadotParachainPrimitivesId, number] }
  | { tag: 'PvfCheckStarted'; value: [PolkadotParachainPrimitivesValidationCodeHash, PolkadotParachainPrimitivesId] }
  | { tag: 'PvfCheckAccepted'; value: [PolkadotParachainPrimitivesValidationCodeHash, PolkadotParachainPrimitivesId] }
  | { tag: 'PvfCheckRejected'; value: [PolkadotParachainPrimitivesValidationCodeHash, PolkadotParachainPrimitivesId] };

export type PolkadotRuntimeParachainsHrmpPalletEvent =
  | {
      tag: 'OpenChannelRequested';
      value: [PolkadotParachainPrimitivesId, PolkadotParachainPrimitivesId, number, number];
    }
  | { tag: 'OpenChannelCanceled'; value: [PolkadotParachainPrimitivesId, PolkadotParachainPrimitivesHrmpChannelId] }
  | { tag: 'OpenChannelAccepted'; value: [PolkadotParachainPrimitivesId, PolkadotParachainPrimitivesId] }
  | { tag: 'ChannelClosed'; value: [PolkadotParachainPrimitivesId, PolkadotParachainPrimitivesHrmpChannelId] }
  | {
      tag: 'HrmpChannelForceOpened';
      value: [PolkadotParachainPrimitivesId, PolkadotParachainPrimitivesId, number, number];
    };

export type PolkadotRuntimeParachainsDisputesPalletEvent =
  | {
      tag: 'DisputeInitiated';
      value: [PolkadotCorePrimitivesCandidateHash, PolkadotRuntimeParachainsDisputesDisputeLocation];
    }
  | {
      tag: 'DisputeConcluded';
      value: [PolkadotCorePrimitivesCandidateHash, PolkadotRuntimeParachainsDisputesDisputeResult];
    }
  | { tag: 'Revert'; value: number };

export type PolkadotRuntimeParachainsDisputesDisputeLocation = 'local' | 'remote';

export type PolkadotRuntimeParachainsDisputesDisputeResult = 'valid' | 'invalid';

export type PolkadotRuntimeCommonParasRegistrarPalletEvent =
  | {
      tag: 'Registered';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        manager: AccountId32;
      };
    }
  | {
      tag: 'Deregistered';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'Reserved';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        who: AccountId32;
      };
    }
  | {
      tag: 'Swapped';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        otherId: PolkadotParachainPrimitivesId;
      };
    };

export type PolkadotRuntimeCommonSlotsPalletEvent =
  | {
      tag: 'NewLeasePeriod';
      value: {
        leasePeriod: number;
      };
    }
  | {
      tag: 'Leased';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        leaser: AccountId32;
        periodBegin: number;
        periodCount: number;
        extraReserved: bigint;
        totalAmount: bigint;
      };
    };

export type PolkadotRuntimeCommonAuctionsPalletEvent =
  | {
      tag: 'AuctionStarted';
      value: {
        auctionIndex: number;
        leasePeriod: number;
        ending: number;
      };
    }
  | {
      tag: 'AuctionClosed';
      value: {
        auctionIndex: number;
      };
    }
  | {
      tag: 'Reserved';
      value: {
        bidder: AccountId32;
        extraReserved: bigint;
        totalAmount: bigint;
      };
    }
  | {
      tag: 'Unreserved';
      value: {
        bidder: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'ReserveConfiscated';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        leaser: AccountId32;
        amount: bigint;
      };
    }
  | {
      tag: 'BidAccepted';
      value: {
        bidder: AccountId32;
        paraId: PolkadotParachainPrimitivesId;
        amount: bigint;
        firstSlot: number;
        lastSlot: number;
      };
    }
  | {
      tag: 'WinningOffset';
      value: {
        auctionIndex: number;
        blockNumber: number;
      };
    };

export type PolkadotRuntimeCommonCrowdloanPalletEvent =
  | {
      tag: 'Created';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'Contributed';
      value: {
        who: AccountId32;
        fundIndex: PolkadotParachainPrimitivesId;
        amount: bigint;
      };
    }
  | {
      tag: 'Withdrew';
      value: {
        who: AccountId32;
        fundIndex: PolkadotParachainPrimitivesId;
        amount: bigint;
      };
    }
  | {
      tag: 'PartiallyRefunded';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'AllRefunded';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'Dissolved';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'HandleBidResult';
      value: {
        paraId: PolkadotParachainPrimitivesId;
        result: never | SpRuntimeDispatchError;
      };
    }
  | {
      tag: 'Edited';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    }
  | {
      tag: 'MemoUpdated';
      value: {
        who: AccountId32;
        paraId: PolkadotParachainPrimitivesId;
        memo: Bytes;
      };
    }
  | {
      tag: 'AddedToNewRaise';
      value: {
        paraId: PolkadotParachainPrimitivesId;
      };
    };

export type PalletXcmEvent =
  | { tag: 'Attempted'; value: XcmV3TraitsOutcome }
  | { tag: 'Sent'; value: [XcmV3MultilocationMultiLocation, XcmV3MultilocationMultiLocation, XcmV3Xcm] }
  | { tag: 'UnexpectedResponse'; value: [XcmV3MultilocationMultiLocation, bigint] }
  | { tag: 'ResponseReady'; value: [bigint, XcmV3Response] }
  | { tag: 'Notified'; value: [bigint, number, number] }
  | { tag: 'NotifyOverweight'; value: [bigint, number, number, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight] }
  | { tag: 'NotifyDispatchError'; value: [bigint, number, number] }
  | { tag: 'NotifyDecodeFailed'; value: [bigint, number, number] }
  | {
      tag: 'InvalidResponder';
      value: [XcmV3MultilocationMultiLocation, bigint, XcmV3MultilocationMultiLocation | undefined];
    }
  | { tag: 'InvalidResponderVersion'; value: [XcmV3MultilocationMultiLocation, bigint] }
  | { tag: 'ResponseTaken'; value: bigint }
  | { tag: 'AssetsTrapped'; value: [H256, XcmV3MultilocationMultiLocation, XcmVersionedMultiAssets] }
  | { tag: 'VersionChangeNotified'; value: [XcmV3MultilocationMultiLocation, number, XcmV3MultiassetMultiAssets] }
  | { tag: 'SupportedVersionChanged'; value: [XcmV3MultilocationMultiLocation, number] }
  | { tag: 'NotifyTargetSendFail'; value: [XcmV3MultilocationMultiLocation, bigint, XcmV3TraitsError] }
  | { tag: 'NotifyTargetMigrationFail'; value: [XcmVersionedMultiLocation, bigint] }
  | { tag: 'InvalidQuerierVersion'; value: [XcmV3MultilocationMultiLocation, bigint] }
  | {
      tag: 'InvalidQuerier';
      value: [
        XcmV3MultilocationMultiLocation,
        bigint,
        XcmV3MultilocationMultiLocation,
        XcmV3MultilocationMultiLocation | undefined,
      ];
    }
  | { tag: 'VersionNotifyStarted'; value: [XcmV3MultilocationMultiLocation, XcmV3MultiassetMultiAssets] }
  | { tag: 'VersionNotifyRequested'; value: [XcmV3MultilocationMultiLocation, XcmV3MultiassetMultiAssets] }
  | { tag: 'VersionNotifyUnrequested'; value: [XcmV3MultilocationMultiLocation, XcmV3MultiassetMultiAssets] }
  | { tag: 'FeesPaid'; value: [XcmV3MultilocationMultiLocation, XcmV3MultiassetMultiAssets] }
  | { tag: 'AssetsClaimed'; value: [H256, XcmV3MultilocationMultiLocation, XcmVersionedMultiAssets] };

export type XcmV3TraitsOutcome =
  | { tag: 'Complete'; value: SpWeightsWeightV2Weight }
  | { tag: 'Incomplete'; value: [SpWeightsWeightV2Weight, XcmV3TraitsError] }
  | { tag: 'Error'; value: XcmV3TraitsError };

export type PalletMessageQueueEvent =
  | {
      tag: 'ProcessingFailed';
      value: {
        id: Bytes;
        origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        error: FrameSupportMessagesProcessMessageError;
      };
    }
  | {
      tag: 'Processed';
      value: {
        id: Bytes;
        origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        weightUsed: SpWeightsWeightV2Weight;
        success: boolean;
      };
    }
  | {
      tag: 'OverweightEnqueued';
      value: {
        id: Bytes;
        origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        pageIndex: number;
        messageIndex: number;
      };
    }
  | {
      tag: 'PageReaped';
      value: {
        origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
        index: number;
      };
    };

export type FrameSupportMessagesProcessMessageError =
  | { tag: 'BadFormat'; value: never }
  | { tag: 'Corrupt'; value: never }
  | { tag: 'Unsupported'; value: never }
  | { tag: 'Overweight'; value: SpWeightsWeightV2Weight }
  | { tag: 'Yield'; value: never };

export type FrameSystemPhase =
  | { tag: 'ApplyExtrinsic'; value: number }
  | { tag: 'Finalization'; value: never }
  | { tag: 'Initialization'; value: never };

export type FrameSystemLastRuntimeUpgradeInfo = {
  specVersion: number;
  specName: string;
};

export type FrameSystemLimitsBlockWeights = {
  baseBlock: SpWeightsWeightV2Weight;
  maxBlock: SpWeightsWeightV2Weight;
  perClass: {
    normal: FrameSystemLimitsWeightsPerClass;
    operational: FrameSystemLimitsWeightsPerClass;
    mandatory: FrameSystemLimitsWeightsPerClass;
  };
};

export type FrameSystemLimitsWeightsPerClass = {
  baseExtrinsic: SpWeightsWeightV2Weight;
  maxExtrinsic?: SpWeightsWeightV2Weight | undefined;
  maxTotal?: SpWeightsWeightV2Weight | undefined;
  reserved?: SpWeightsWeightV2Weight | undefined;
};

export type FrameSystemLimitsBlockLength = {
  max: {
    normal: number;
    operational: number;
    mandatory: number;
  };
};

export type SpWeightsRuntimeDbWeight = {
  read: bigint;
  write: bigint;
};

export type SpVersionRuntimeVersion = {
  specName: string;
  implName: string;
  authoringVersion: number;
  specVersion: number;
  implVersion: number;
  apis: Cow;
  transactionVersion: number;
  stateVersion: number;
};

export type Cow = Array<[Bytes, number]>;

export type FrameSystemError =
  | 'invalidSpecName'
  | 'specVersionNeedsToIncrease'
  | 'failedToExtractRuntimeVersion'
  | 'nonDefaultComposite'
  | 'nonZeroRefCount'
  | 'callFiltered';

export type PalletSchedulerScheduled = {
  maybeId?: Bytes | undefined;
  priority: number;
  call: FrameSupportPreimagesBounded;
  maybePeriodic?: [number, number] | undefined;
  origin: PolkadotRuntimeOriginCaller;
};

export type PalletSchedulerError =
  | 'failedToSchedule'
  | 'notFound'
  | 'targetBlockNumberInPast'
  | 'rescheduleNoChange'
  | 'named';

export type PalletPreimageRequestStatus =
  | {
      tag: 'Unrequested';
      value: {
        deposit: [AccountId32, bigint];
        len: number;
      };
    }
  | {
      tag: 'Requested';
      value: {
        deposit?: [AccountId32, bigint] | undefined;
        count: number;
        len?: number | undefined;
      };
    };

export type PalletPreimageError =
  | 'tooBig'
  | 'alreadyNoted'
  | 'notAuthorized'
  | 'notNoted'
  | 'requested'
  | 'notRequested';

export type SpConsensusBabeDigestsPreDigest =
  | { tag: 'Primary'; value: SpConsensusBabeDigestsPrimaryPreDigest }
  | { tag: 'SecondaryPlain'; value: SpConsensusBabeDigestsSecondaryPlainPreDigest }
  | { tag: 'SecondaryVRF'; value: SpConsensusBabeDigestsSecondaryVRFPreDigest };

export type SpConsensusBabeDigestsPrimaryPreDigest = {
  authorityIndex: number;
  slot: SpConsensusSlotsSlot;
  vrfSignature: SpCoreSr25519VrfVrfSignature;
};

export type SpCoreSr25519VrfVrfSignature = {
  output: Bytes;
  proof: Bytes;
};

export type SpConsensusBabeDigestsSecondaryPlainPreDigest = {
  authorityIndex: number;
  slot: SpConsensusSlotsSlot;
};

export type SpConsensusBabeDigestsSecondaryVRFPreDigest = {
  authorityIndex: number;
  slot: SpConsensusSlotsSlot;
  vrfSignature: SpCoreSr25519VrfVrfSignature;
};

export type SpConsensusBabeBabeEpochConfiguration = {
  c: [bigint, bigint];
  allowedSlots: SpConsensusBabeAllowedSlots;
};

export type PalletBabeError =
  | 'invalidEquivocationProof'
  | 'invalidKeyOwnershipProof'
  | 'duplicateOffenceReport'
  | 'invalidConfiguration';

export type PalletIndicesError = 'notAssigned' | 'notOwner' | 'inUse' | 'notTransfer' | 'permanent';

export type PalletBalancesBalanceLock = {
  id: Bytes;
  amount: bigint;
  reasons: PalletBalancesReasons;
};

export type PalletBalancesReasons = 'fee' | 'misc' | 'all';

export type PalletBalancesReserveData = {
  id: Bytes;
  amount: bigint;
};

export type PalletBalancesIdAmount = {
  id: never;
  amount: bigint;
};

export type PalletBalancesError =
  | 'vestingBalance'
  | 'liquidityRestrictions'
  | 'insufficientBalance'
  | 'existentialDeposit'
  | 'expendability'
  | 'existingVestingSchedule'
  | 'deadAccount'
  | 'tooManyReserves'
  | 'tooManyHolds'
  | 'tooManyFreezes';

export type SpArithmeticFixedPointFixedU128 = bigint;

export type PalletTransactionPaymentReleases = 'v1Ancient' | 'v2';

export type PalletStakingStakingLedger = {
  stash: AccountId32;
  total: bigint;
  active: bigint;
  unlocking: Array<PalletStakingUnlockChunk>;
  claimedRewards: Array<number>;
};

export type PalletStakingUnlockChunk = {
  value: bigint;
  era: number;
};

export type PalletStakingNominations = {
  targets: Array<AccountId32>;
  submittedIn: number;
  suppressed: boolean;
};

export type PalletStakingActiveEraInfo = {
  index: number;
  start?: bigint | undefined;
};

export type PalletStakingEraRewardPoints = {
  total: number;
  individual: Array<[AccountId32, number]>;
};

export type PalletStakingUnappliedSlash = {
  validator: AccountId32;
  own: bigint;
  others: Array<[AccountId32, bigint]>;
  reporters: Array<AccountId32>;
  payout: bigint;
};

export type PalletStakingSlashingSlashingSpans = {
  spanIndex: number;
  lastStart: number;
  lastNonzeroSlash: number;
  prior: Array<number>;
};

export type PalletStakingSlashingSpanRecord = {
  slashed: bigint;
  paidOut: bigint;
};

export type PalletStakingPalletError =
  | 'notController'
  | 'notStash'
  | 'alreadyBonded'
  | 'alreadyPaired'
  | 'emptyTargets'
  | 'duplicateIndex'
  | 'invalidSlashIndex'
  | 'insufficientBond'
  | 'noMoreChunks'
  | 'noUnlockChunk'
  | 'fundedTarget'
  | 'invalidEraToReward'
  | 'invalidNumberOfNominations'
  | 'notSortedAndUnique'
  | 'alreadyClaimed'
  | 'incorrectHistoryDepth'
  | 'incorrectSlashingSpans'
  | 'badState'
  | 'tooManyTargets'
  | 'badTarget'
  | 'cannotChillOther'
  | 'tooManyNominators'
  | 'tooManyValidators'
  | 'commissionTooLow'
  | 'boundNotMet';

export type SpStakingOffenceOffenceDetails = {
  offender: [AccountId32, PalletStakingExposure];
  reporters: Array<AccountId32>;
};

export type SpCoreCryptoKeyTypeId = Bytes;

export type PalletSessionError = 'invalidProof' | 'noAssociatedValidatorId' | 'duplicatedKey' | 'noKeys' | 'noAccount';

export type PalletGrandpaStoredState =
  | { tag: 'Live'; value: never }
  | {
      tag: 'PendingPause';
      value: {
        scheduledAt: number;
        delay: number;
      };
    }
  | { tag: 'Paused'; value: never }
  | {
      tag: 'PendingResume';
      value: {
        scheduledAt: number;
        delay: number;
      };
    };

export type PalletGrandpaStoredPendingChange = {
  scheduledAt: number;
  delay: number;
  nextAuthorities: Array<[SpConsensusGrandpaAppPublic, bigint]>;
  forced?: number | undefined;
};

export type PalletGrandpaError =
  | 'pauseFailed'
  | 'resumeFailed'
  | 'changePending'
  | 'tooSoon'
  | 'invalidKeyOwnershipProof'
  | 'invalidEquivocationProof'
  | 'duplicateOffenceReport';

export type FrameSupportMiscWrapperOpaque = [number, PalletImOnlineBoundedOpaqueNetworkState];

export type PalletImOnlineBoundedOpaqueNetworkState = {
  peerId: Bytes;
  externalAddresses: Array<Bytes>;
};

export type PalletImOnlineError = 'invalidKey' | 'duplicatedHeartbeat';

export type PalletDemocracyReferendumInfo =
  | { tag: 'Ongoing'; value: PalletDemocracyReferendumStatus }
  | {
      tag: 'Finished';
      value: {
        approved: boolean;
        end: number;
      };
    };

export type PalletDemocracyReferendumStatus = {
  end: number;
  proposal: FrameSupportPreimagesBounded;
  threshold: PalletDemocracyVoteThresholdVoteThreshold;
  delay: number;
  tally: PalletDemocracyTally;
};

export type PalletDemocracyTally = {
  ayes: bigint;
  nays: bigint;
  turnout: bigint;
};

export type PalletDemocracyVoteVoting =
  | {
      tag: 'Direct';
      value: {
        votes: Array<[number, PalletDemocracyVoteAccountVote]>;
        delegations: PalletDemocracyDelegations;
        prior: PalletDemocracyVotePriorLock;
      };
    }
  | {
      tag: 'Delegating';
      value: {
        balance: bigint;
        target: AccountId32;
        conviction: PalletDemocracyConvictionConviction;
        delegations: PalletDemocracyDelegations;
        prior: PalletDemocracyVotePriorLock;
      };
    };

export type PalletDemocracyDelegations = {
  votes: bigint;
  capital: bigint;
};

export type PalletDemocracyVotePriorLock = [number, bigint];

export type PalletDemocracyError =
  | 'valueLow'
  | 'proposalMissing'
  | 'alreadyCanceled'
  | 'duplicateProposal'
  | 'proposalBlacklisted'
  | 'notSimpleMajority'
  | 'invalidHash'
  | 'noProposal'
  | 'alreadyVetoed'
  | 'referendumInvalid'
  | 'noneWaiting'
  | 'notVoter'
  | 'noPermission'
  | 'alreadyDelegating'
  | 'insufficientFunds'
  | 'notDelegating'
  | 'votesExist'
  | 'instantNotAllowed'
  | 'nonsense'
  | 'wrongUpperBound'
  | 'maxVotesReached'
  | 'tooMany'
  | 'votingPeriodLow'
  | 'preimageNotExist';

export type PalletCollectiveVotes = {
  index: number;
  threshold: number;
  ayes: Array<AccountId32>;
  nays: Array<AccountId32>;
  end: number;
};

export type PalletCollectiveError =
  | 'notMember'
  | 'duplicateProposal'
  | 'proposalMissing'
  | 'wrongIndex'
  | 'duplicateVote'
  | 'alreadyInitialized'
  | 'tooEarly'
  | 'tooManyProposals'
  | 'wrongProposalWeight'
  | 'wrongProposalLength';

export type PalletElectionsPhragmenSeatHolder = {
  who: AccountId32;
  stake: bigint;
  deposit: bigint;
};

export type PalletElectionsPhragmenVoter = {
  votes: Array<AccountId32>;
  stake: bigint;
  deposit: bigint;
};

export type PalletElectionsPhragmenError =
  | 'unableToVote'
  | 'noVotes'
  | 'tooManyVotes'
  | 'maximumVotesExceeded'
  | 'lowBalance'
  | 'unableToPayBond'
  | 'mustBeVoter'
  | 'duplicatedCandidate'
  | 'tooManyCandidates'
  | 'memberSubmit'
  | 'runnerUpSubmit'
  | 'insufficientCandidateFunds'
  | 'notMember'
  | 'invalidWitnessData'
  | 'invalidVoteCount'
  | 'invalidRenouncing'
  | 'invalidReplacement';

export type PalletMembershipError = 'alreadyMember' | 'notMember' | 'tooManyMembers';

export type PalletTreasuryProposal = {
  proposer: AccountId32;
  value: bigint;
  beneficiary: AccountId32;
  bond: bigint;
};

export type FrameSupportPalletId = Bytes;

export type PalletTreasuryError =
  | 'insufficientProposersBalance'
  | 'invalidIndex'
  | 'tooManyApprovals'
  | 'insufficientPermission'
  | 'proposalNotApproved';

export type PalletConvictionVotingVoteVoting =
  | { tag: 'Casting'; value: PalletConvictionVotingVoteCasting }
  | { tag: 'Delegating'; value: PalletConvictionVotingVoteDelegating };

export type PalletConvictionVotingVoteCasting = {
  votes: Array<[number, PalletConvictionVotingVoteAccountVote]>;
  delegations: PalletConvictionVotingDelegations;
  prior: PalletConvictionVotingVotePriorLock;
};

export type PalletConvictionVotingDelegations = {
  votes: bigint;
  capital: bigint;
};

export type PalletConvictionVotingVotePriorLock = [number, bigint];

export type PalletConvictionVotingVoteDelegating = {
  balance: bigint;
  target: AccountId32;
  conviction: PalletConvictionVotingConvictionConviction;
  delegations: PalletConvictionVotingDelegations;
  prior: PalletConvictionVotingVotePriorLock;
};

export type PalletConvictionVotingError =
  | 'notOngoing'
  | 'notVoter'
  | 'noPermission'
  | 'noPermissionYet'
  | 'alreadyDelegating'
  | 'alreadyVoting'
  | 'insufficientFunds'
  | 'notDelegating'
  | 'nonsense'
  | 'maxVotesReached'
  | 'classNeeded'
  | 'badClass';

export type PalletReferendaReferendumInfo =
  | { tag: 'Ongoing'; value: PalletReferendaReferendumStatus }
  | { tag: 'Approved'; value: [number, PalletReferendaDeposit | undefined, PalletReferendaDeposit | undefined] }
  | { tag: 'Rejected'; value: [number, PalletReferendaDeposit | undefined, PalletReferendaDeposit | undefined] }
  | { tag: 'Cancelled'; value: [number, PalletReferendaDeposit | undefined, PalletReferendaDeposit | undefined] }
  | { tag: 'TimedOut'; value: [number, PalletReferendaDeposit | undefined, PalletReferendaDeposit | undefined] }
  | { tag: 'Killed'; value: number };

export type PalletReferendaReferendumStatus = {
  track: number;
  origin: PolkadotRuntimeOriginCaller;
  proposal: FrameSupportPreimagesBounded;
  enactment: FrameSupportScheduleDispatchTime;
  submitted: number;
  submissionDeposit: PalletReferendaDeposit;
  decisionDeposit?: PalletReferendaDeposit | undefined;
  deciding?: PalletReferendaDecidingStatus | undefined;
  tally: PalletConvictionVotingTally;
  inQueue: boolean;
  alarm?: [number, [number, number]] | undefined;
};

export type PalletReferendaDeposit = {
  who: AccountId32;
  amount: bigint;
};

export type PalletReferendaDecidingStatus = {
  since: number;
  confirming?: number | undefined;
};

export type PalletReferendaTrackInfo = {
  name: string;
  maxDeciding: number;
  decisionDeposit: bigint;
  preparePeriod: number;
  decisionPeriod: number;
  confirmPeriod: number;
  minEnactmentPeriod: number;
  minApproval: PalletReferendaCurve;
  minSupport: PalletReferendaCurve;
};

export type PalletReferendaCurve =
  | {
      tag: 'LinearDecreasing';
      value: {
        length: Perbill;
        floor: Perbill;
        ceil: Perbill;
      };
    }
  | {
      tag: 'SteppedDecreasing';
      value: {
        begin: Perbill;
        end: Perbill;
        step: Perbill;
        period: Perbill;
      };
    }
  | {
      tag: 'Reciprocal';
      value: {
        factor: SpArithmeticFixedPointFixedI64;
        xOffset: SpArithmeticFixedPointFixedI64;
        yOffset: SpArithmeticFixedPointFixedI64;
      };
    };

export type SpArithmeticFixedPointFixedI64 = bigint;

export type PalletReferendaError =
  | 'notOngoing'
  | 'hasDeposit'
  | 'badTrack'
  | 'full'
  | 'queueEmpty'
  | 'badReferendum'
  | 'nothingToDo'
  | 'noTrack'
  | 'unfinished'
  | 'noPermission'
  | 'noDeposit'
  | 'badStatus'
  | 'preimageNotExist';

export type PalletWhitelistError =
  | 'unavailablePreImage'
  | 'undecodableCall'
  | 'invalidCallWeightWitness'
  | 'callIsNotWhitelisted'
  | 'callAlreadyWhitelisted';

export type PolkadotRuntimeCommonClaimsPalletError =
  | 'invalidEthereumSignature'
  | 'signerHasNoClaim'
  | 'senderHasNoClaim'
  | 'potUnderflow'
  | 'invalidStatement'
  | 'vestedBalanceExists';

export type PalletVestingReleases = 'v0' | 'v1';

export type PalletVestingError =
  | 'notVesting'
  | 'atMaxVestingSchedules'
  | 'amountLow'
  | 'scheduleIndexOutOfBounds'
  | 'invalidScheduleParams';

export type PalletUtilityError = 'tooManyCalls';

export type PalletIdentityRegistration = {
  judgements: Array<[number, PalletIdentityJudgement]>;
  deposit: bigint;
  info: PalletIdentityIdentityInfo;
};

export type PalletIdentityRegistrarInfo = {
  account: AccountId32;
  fee: bigint;
  fields: PalletIdentityBitFlags;
};

export type PalletIdentityError =
  | 'tooManySubAccounts'
  | 'notFound'
  | 'notNamed'
  | 'emptyIndex'
  | 'feeChanged'
  | 'noIdentity'
  | 'stickyJudgement'
  | 'judgementGiven'
  | 'invalidJudgement'
  | 'invalidIndex'
  | 'invalidTarget'
  | 'tooManyFields'
  | 'tooManyRegistrars'
  | 'alreadyClaimed'
  | 'notSub'
  | 'notOwned'
  | 'judgementForDifferentIdentity'
  | 'judgementPaymentFailed';

export type PalletProxyProxyDefinition = {
  delegate: AccountId32;
  proxyType: PolkadotRuntimeProxyType;
  delay: number;
};

export type PalletProxyAnnouncement = {
  real: AccountId32;
  callHash: H256;
  height: number;
};

export type PalletProxyError =
  | 'tooMany'
  | 'notFound'
  | 'notProxy'
  | 'unproxyable'
  | 'duplicate'
  | 'noPermission'
  | 'unannounced'
  | 'noSelfProxy';

export type PalletMultisigMultisig = {
  when: PalletMultisigTimepoint;
  deposit: bigint;
  depositor: AccountId32;
  approvals: Array<AccountId32>;
};

export type PalletMultisigError =
  | 'minimumThreshold'
  | 'alreadyApproved'
  | 'noApprovalsNeeded'
  | 'tooFewSignatories'
  | 'tooManySignatories'
  | 'signatoriesOutOfOrder'
  | 'senderInSignatories'
  | 'notFound'
  | 'notOwner'
  | 'noTimepoint'
  | 'wrongTimepoint'
  | 'unexpectedTimepoint'
  | 'maxWeightTooLow'
  | 'alreadyStored';

export type PalletBountiesBounty = {
  proposer: AccountId32;
  value: bigint;
  fee: bigint;
  curatorDeposit: bigint;
  bond: bigint;
  status: PalletBountiesBountyStatus;
};

export type PalletBountiesBountyStatus =
  | { tag: 'Proposed'; value: never }
  | { tag: 'Approved'; value: never }
  | { tag: 'Funded'; value: never }
  | {
      tag: 'CuratorProposed';
      value: {
        curator: AccountId32;
      };
    }
  | {
      tag: 'Active';
      value: {
        curator: AccountId32;
        updateDue: number;
      };
    }
  | {
      tag: 'PendingPayout';
      value: {
        curator: AccountId32;
        beneficiary: AccountId32;
        unlockAt: number;
      };
    };

export type PalletBountiesError =
  | 'insufficientProposersBalance'
  | 'invalidIndex'
  | 'reasonTooBig'
  | 'unexpectedStatus'
  | 'requireCurator'
  | 'invalidValue'
  | 'invalidFee'
  | 'pendingPayout'
  | 'premature'
  | 'hasActiveChildBounty'
  | 'tooManyQueued';

export type PalletChildBountiesChildBounty = {
  parentBounty: number;
  value: bigint;
  fee: bigint;
  curatorDeposit: bigint;
  status: PalletChildBountiesChildBountyStatus;
};

export type PalletChildBountiesChildBountyStatus =
  | { tag: 'Added'; value: never }
  | {
      tag: 'CuratorProposed';
      value: {
        curator: AccountId32;
      };
    }
  | {
      tag: 'Active';
      value: {
        curator: AccountId32;
      };
    }
  | {
      tag: 'PendingPayout';
      value: {
        curator: AccountId32;
        beneficiary: AccountId32;
        unlockAt: number;
      };
    };

export type PalletChildBountiesError = 'parentBountyNotActive' | 'insufficientBountyBalance' | 'tooManyChildBounties';

export type PalletTipsOpenTip = {
  reason: H256;
  who: AccountId32;
  finder: AccountId32;
  deposit: bigint;
  closes?: number | undefined;
  tips: Array<[AccountId32, bigint]>;
  findersFee: boolean;
};

export type PalletTipsError = 'reasonTooBig' | 'alreadyKnown' | 'unknownTip' | 'notFinder' | 'stillOpen' | 'premature';

export type PalletElectionProviderMultiPhaseReadySolution = {
  supports: Array<[AccountId32, SpNposElectionsSupport]>;
  score: SpNposElectionsElectionScore;
  compute: PalletElectionProviderMultiPhaseElectionCompute;
};

export type PalletElectionProviderMultiPhaseRoundSnapshot = {
  voters: Array<[AccountId32, bigint, Array<AccountId32>]>;
  targets: Array<AccountId32>;
};

export type PalletElectionProviderMultiPhaseSignedSignedSubmission = {
  who: AccountId32;
  deposit: bigint;
  rawSolution: PalletElectionProviderMultiPhaseRawSolution;
  callFee: bigint;
};

export type PalletElectionProviderMultiPhaseError =
  | 'preDispatchEarlySubmission'
  | 'preDispatchWrongWinnerCount'
  | 'preDispatchWeakSubmission'
  | 'signedQueueFull'
  | 'signedCannotPayDeposit'
  | 'signedInvalidWitness'
  | 'signedTooMuchWeight'
  | 'ocwCallWrongEra'
  | 'missingSnapshotMetadata'
  | 'invalidSubmissionIndex'
  | 'callNotAllowed'
  | 'fallbackFailed'
  | 'boundNotMet'
  | 'tooManyWinners';

export type PalletBagsListListNode = {
  id: AccountId32;
  prev?: AccountId32 | undefined;
  next?: AccountId32 | undefined;
  bagUpper: bigint;
  score: bigint;
};

export type PalletBagsListListBag = {
  head?: AccountId32 | undefined;
  tail?: AccountId32 | undefined;
};

export type PalletBagsListError = { tag: 'List'; value: PalletBagsListListListError };

export type PalletBagsListListListError = 'duplicate' | 'notHeavier' | 'notInSameBag' | 'nodeNotFound';

export type PalletNominationPoolsPoolMember = {
  poolId: number;
  points: bigint;
  lastRecordedRewardCounter: SpArithmeticFixedPointFixedU128;
  unbondingEras: Array<[number, bigint]>;
};

export type PalletNominationPoolsBondedPoolInner = {
  commission: PalletNominationPoolsCommission;
  memberCounter: number;
  points: bigint;
  roles: PalletNominationPoolsPoolRoles;
  state: PalletNominationPoolsPoolState;
};

export type PalletNominationPoolsCommission = {
  current?: [Perbill, AccountId32] | undefined;
  max?: Perbill | undefined;
  changeRate?: PalletNominationPoolsCommissionChangeRate | undefined;
  throttleFrom?: number | undefined;
};

export type PalletNominationPoolsPoolRoles = {
  depositor: AccountId32;
  root?: AccountId32 | undefined;
  nominator?: AccountId32 | undefined;
  bouncer?: AccountId32 | undefined;
};

export type PalletNominationPoolsRewardPool = {
  lastRecordedRewardCounter: SpArithmeticFixedPointFixedU128;
  lastRecordedTotalPayouts: bigint;
  totalRewardsClaimed: bigint;
  totalCommissionPending: bigint;
  totalCommissionClaimed: bigint;
};

export type PalletNominationPoolsSubPools = {
  noEra: PalletNominationPoolsUnbondPool;
  withEra: Array<[number, PalletNominationPoolsUnbondPool]>;
};

export type PalletNominationPoolsUnbondPool = {
  points: bigint;
  balance: bigint;
};

export type PalletNominationPoolsError =
  | { tag: 'PoolNotFound'; value: never }
  | { tag: 'PoolMemberNotFound'; value: never }
  | { tag: 'RewardPoolNotFound'; value: never }
  | { tag: 'SubPoolsNotFound'; value: never }
  | { tag: 'AccountBelongsToOtherPool'; value: never }
  | { tag: 'FullyUnbonding'; value: never }
  | { tag: 'MaxUnbondingLimit'; value: never }
  | { tag: 'CannotWithdrawAny'; value: never }
  | { tag: 'MinimumBondNotMet'; value: never }
  | { tag: 'OverflowRisk'; value: never }
  | { tag: 'NotDestroying'; value: never }
  | { tag: 'NotNominator'; value: never }
  | { tag: 'NotKickerOrDestroying'; value: never }
  | { tag: 'NotOpen'; value: never }
  | { tag: 'MaxPools'; value: never }
  | { tag: 'MaxPoolMembers'; value: never }
  | { tag: 'CanNotChangeState'; value: never }
  | { tag: 'DoesNotHavePermission'; value: never }
  | { tag: 'MetadataExceedsMaxLen'; value: never }
  | { tag: 'Defensive'; value: PalletNominationPoolsDefensiveError }
  | { tag: 'PartialUnbondNotAllowedPermissionlessly'; value: never }
  | { tag: 'MaxCommissionRestricted'; value: never }
  | { tag: 'CommissionExceedsMaximum'; value: never }
  | { tag: 'CommissionChangeThrottled'; value: never }
  | { tag: 'CommissionChangeRateNotAllowed'; value: never }
  | { tag: 'NoPendingCommission'; value: never }
  | { tag: 'NoCommissionCurrentSet'; value: never }
  | { tag: 'PoolIdInUse'; value: never }
  | { tag: 'InvalidPoolId'; value: never }
  | { tag: 'BondExtraRestricted'; value: never };

export type PalletNominationPoolsDefensiveError =
  | 'notEnoughSpaceInUnbondPool'
  | 'poolNotFound'
  | 'rewardPoolNotFound'
  | 'subPoolsNotFound'
  | 'bondedStashKilledPrematurely';

export type PalletFastUnstakeUnstakeRequest = {
  stashes: Array<[AccountId32, bigint]>;
  checked: Array<number>;
};

export type PalletFastUnstakeError =
  | 'notController'
  | 'alreadyQueued'
  | 'notFullyBonded'
  | 'notQueued'
  | 'alreadyHead'
  | 'callNotAllowed';

export type PolkadotRuntimeParachainsConfigurationHostConfiguration = {
  maxCodeSize: number;
  maxHeadDataSize: number;
  maxUpwardQueueCount: number;
  maxUpwardQueueSize: number;
  maxUpwardMessageSize: number;
  maxUpwardMessageNumPerCandidate: number;
  hrmpMaxMessageNumPerCandidate: number;
  validationUpgradeCooldown: number;
  validationUpgradeDelay: number;
  asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
  maxPovSize: number;
  maxDownwardMessageSize: number;
  hrmpMaxParachainOutboundChannels: number;
  hrmpMaxParathreadOutboundChannels: number;
  hrmpSenderDeposit: bigint;
  hrmpRecipientDeposit: bigint;
  hrmpChannelMaxCapacity: number;
  hrmpChannelMaxTotalSize: number;
  hrmpMaxParachainInboundChannels: number;
  hrmpMaxParathreadInboundChannels: number;
  hrmpChannelMaxMessageSize: number;
  executorParams: PolkadotPrimitivesV4ExecutorParamsExecutorParams;
  codeRetentionPeriod: number;
  parathreadCores: number;
  parathreadRetries: number;
  groupRotationFrequency: number;
  chainAvailabilityPeriod: number;
  threadAvailabilityPeriod: number;
  schedulingLookahead: number;
  maxValidatorsPerCore?: number | undefined;
  maxValidators?: number | undefined;
  disputePeriod: number;
  disputePostConclusionAcceptancePeriod: number;
  noShowSlots: number;
  nDelayTranches: number;
  zerothDelayTrancheWidth: number;
  neededApprovals: number;
  relayVrfModuloSamples: number;
  pvfCheckingEnabled: boolean;
  pvfVotingTtl: number;
  minimumValidationUpgradeDelay: number;
};

export type PolkadotRuntimeParachainsConfigurationPalletError = 'invalidNewValue';

export type PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord = {
  bitfield: PolkadotPrimitivesV4AvailabilityBitfield;
  submittedAt: number;
};

export type PolkadotRuntimeParachainsInclusionCandidatePendingAvailability = {
  core: PolkadotPrimitivesV4CoreIndex;
  hash: PolkadotCorePrimitivesCandidateHash;
  descriptor: PolkadotPrimitivesV4CandidateDescriptor;
  availabilityVotes: BitSequence;
  backers: BitSequence;
  relayParentNumber: number;
  backedInNumber: number;
  backingGroup: PolkadotPrimitivesV4GroupIndex;
};

export type PolkadotRuntimeParachainsInclusionPalletError =
  | 'unsortedOrDuplicateValidatorIndices'
  | 'unsortedOrDuplicateDisputeStatementSet'
  | 'unsortedOrDuplicateBackedCandidates'
  | 'unexpectedRelayParent'
  | 'wrongBitfieldSize'
  | 'bitfieldAllZeros'
  | 'bitfieldDuplicateOrUnordered'
  | 'validatorIndexOutOfBounds'
  | 'invalidBitfieldSignature'
  | 'unscheduledCandidate'
  | 'candidateScheduledBeforeParaFree'
  | 'wrongCollator'
  | 'scheduledOutOfOrder'
  | 'headDataTooLarge'
  | 'prematureCodeUpgrade'
  | 'newCodeTooLarge'
  | 'candidateNotInParentContext'
  | 'invalidGroupIndex'
  | 'insufficientBacking'
  | 'invalidBacking'
  | 'notCollatorSigned'
  | 'validationDataHashMismatch'
  | 'incorrectDownwardMessageHandling'
  | 'invalidUpwardMessages'
  | 'hrmpWatermarkMishandling'
  | 'invalidOutboundHrmp'
  | 'invalidValidationCodeHash'
  | 'paraHeadMismatch'
  | 'bitfieldReferencesFreedCore';

export type PolkadotPrimitivesV4ScrapedOnChainVotes = {
  session: number;
  backingValidatorsPerCandidate: Array<
    [
      PolkadotPrimitivesV4CandidateReceipt,
      Array<[PolkadotPrimitivesV4ValidatorIndex, PolkadotPrimitivesV4ValidityAttestation]>,
    ]
  >;
  disputes: Array<PolkadotPrimitivesV4DisputeStatementSet>;
};

export type PolkadotRuntimeParachainsParasInherentPalletError =
  | 'tooManyInclusionInherents'
  | 'invalidParentHeader'
  | 'candidateConcludedInvalid'
  | 'inherentOverweight'
  | 'disputeStatementsUnsortedOrDuplicates'
  | 'disputeInvalid';

export type PolkadotRuntimeParachainsSchedulerParathreadClaimQueue = {
  queue: Array<PolkadotRuntimeParachainsSchedulerQueuedParathread>;
  nextCoreOffset: number;
};

export type PolkadotRuntimeParachainsSchedulerQueuedParathread = {
  claim: PolkadotPrimitivesV4ParathreadEntry;
  coreOffset: number;
};

export type PolkadotPrimitivesV4ParathreadEntry = {
  claim: PolkadotPrimitivesV4ParathreadClaim;
  retries: number;
};

export type PolkadotPrimitivesV4ParathreadClaim = [
  PolkadotParachainPrimitivesId,
  PolkadotPrimitivesV4CollatorAppPublic,
];

export type PolkadotPrimitivesV4CoreOccupied =
  | { tag: 'Parathread'; value: PolkadotPrimitivesV4ParathreadEntry }
  | { tag: 'Parachain'; value: never };

export type PolkadotRuntimeParachainsSchedulerCoreAssignment = {
  core: PolkadotPrimitivesV4CoreIndex;
  paraId: PolkadotParachainPrimitivesId;
  kind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
  groupIdx: PolkadotPrimitivesV4GroupIndex;
};

export type PolkadotRuntimeParachainsSchedulerAssignmentKind =
  | { tag: 'Parachain'; value: never }
  | { tag: 'Parathread'; value: [PolkadotPrimitivesV4CollatorAppPublic, number] };

export type PolkadotRuntimeParachainsParasPvfCheckActiveVoteState = {
  votesAccept: BitSequence;
  votesReject: BitSequence;
  age: number;
  createdAt: number;
  causes: Array<PolkadotRuntimeParachainsParasPvfCheckCause>;
};

export type PolkadotRuntimeParachainsParasPvfCheckCause =
  | { tag: 'Onboarding'; value: PolkadotParachainPrimitivesId }
  | {
      tag: 'Upgrade';
      value: {
        id: PolkadotParachainPrimitivesId;
        relayParentNumber: number;
      };
    };

export type PolkadotRuntimeParachainsParasParaLifecycle =
  | 'onboarding'
  | 'parathread'
  | 'parachain'
  | 'upgradingParathread'
  | 'downgradingParachain'
  | 'offboardingParathread'
  | 'offboardingParachain';

export type PolkadotRuntimeParachainsParasParaPastCodeMeta = {
  upgradeTimes: Array<PolkadotRuntimeParachainsParasReplacementTimes>;
  lastPruned?: number | undefined;
};

export type PolkadotRuntimeParachainsParasReplacementTimes = {
  expectedAt: number;
  activatedAt: number;
};

export type PolkadotPrimitivesV4UpgradeGoAhead = 'abort' | 'goAhead';

export type PolkadotPrimitivesV4UpgradeRestriction = 'present';

export type PolkadotRuntimeParachainsParasParaGenesisArgs = {
  genesisHead: PolkadotParachainPrimitivesHeadData;
  validationCode: PolkadotParachainPrimitivesValidationCode;
  paraKind: boolean;
};

export type PolkadotRuntimeParachainsParasPalletError =
  | 'notRegistered'
  | 'cannotOnboard'
  | 'cannotOffboard'
  | 'cannotUpgrade'
  | 'cannotDowngrade'
  | 'pvfCheckStatementStale'
  | 'pvfCheckStatementFuture'
  | 'pvfCheckValidatorIndexOutOfBounds'
  | 'pvfCheckInvalidSignature'
  | 'pvfCheckDoubleVote'
  | 'pvfCheckSubjectInvalid'
  | 'cannotUpgradeCode';

export type PolkadotRuntimeParachainsInitializerBufferedSessionChange = {
  validators: Array<PolkadotPrimitivesV4ValidatorAppPublic>;
  queued: Array<PolkadotPrimitivesV4ValidatorAppPublic>;
  sessionIndex: number;
};

export type PolkadotCorePrimitivesInboundDownwardMessage = {
  sentAt: number;
  msg: Bytes;
};

export type PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest = {
  confirmed: boolean;
  age: number;
  senderDeposit: bigint;
  maxMessageSize: number;
  maxCapacity: number;
  maxTotalSize: number;
};

export type PolkadotRuntimeParachainsHrmpHrmpChannel = {
  maxCapacity: number;
  maxTotalSize: number;
  maxMessageSize: number;
  msgCount: number;
  totalSize: number;
  mqcHead?: H256 | undefined;
  senderDeposit: bigint;
  recipientDeposit: bigint;
};

export type PolkadotCorePrimitivesInboundHrmpMessage = {
  sentAt: number;
  data: Bytes;
};

export type PolkadotRuntimeParachainsHrmpPalletError =
  | 'openHrmpChannelToSelf'
  | 'openHrmpChannelInvalidRecipient'
  | 'openHrmpChannelZeroCapacity'
  | 'openHrmpChannelCapacityExceedsLimit'
  | 'openHrmpChannelZeroMessageSize'
  | 'openHrmpChannelMessageSizeExceedsLimit'
  | 'openHrmpChannelAlreadyExists'
  | 'openHrmpChannelAlreadyRequested'
  | 'openHrmpChannelLimitExceeded'
  | 'acceptHrmpChannelDoesntExist'
  | 'acceptHrmpChannelAlreadyConfirmed'
  | 'acceptHrmpChannelLimitExceeded'
  | 'closeHrmpChannelUnauthorized'
  | 'closeHrmpChannelDoesntExist'
  | 'closeHrmpChannelAlreadyUnderway'
  | 'cancelHrmpOpenChannelUnauthorized'
  | 'openHrmpChannelDoesntExist'
  | 'openHrmpChannelAlreadyConfirmed'
  | 'wrongWitness';

export type PolkadotPrimitivesV4SessionInfo = {
  activeValidatorIndices: Array<PolkadotPrimitivesV4ValidatorIndex>;
  randomSeed: Bytes;
  disputePeriod: number;
  validators: Array<PolkadotPrimitivesV4ValidatorAppPublic>;
  discoveryKeys: Array<SpAuthorityDiscoveryAppPublic>;
  assignmentKeys: Array<PolkadotPrimitivesV4AssignmentAppPublic>;
  validatorGroups: Array<Array<PolkadotPrimitivesV4ValidatorIndex>>;
  nCores: number;
  zerothDelayTrancheWidth: number;
  relayVrfModuloSamples: number;
  nDelayTranches: number;
  noShowSlots: number;
  neededApprovals: number;
};

export type PolkadotPrimitivesV4DisputeState = {
  validatorsFor: BitSequence;
  validatorsAgainst: BitSequence;
  start: number;
  concludedAt?: number | undefined;
};

export type BTreeSet = Array<PolkadotPrimitivesV4ValidatorIndex>;

export type PolkadotRuntimeParachainsDisputesPalletError =
  | 'duplicateDisputeStatementSets'
  | 'ancientDisputeStatement'
  | 'validatorIndexOutOfBounds'
  | 'invalidSignature'
  | 'duplicateStatement'
  | 'singleSidedDispute'
  | 'maliciousBacker'
  | 'missingBackingVotes'
  | 'unconfirmedDispute';

export type PolkadotRuntimeParachainsDisputesSlashingPendingSlashes = {
  keys: Array<[PolkadotPrimitivesV4ValidatorIndex, PolkadotPrimitivesV4ValidatorAppPublic]>;
  kind: PolkadotRuntimeParachainsDisputesSlashingSlashingOffenceKind;
};

export type PolkadotRuntimeParachainsDisputesSlashingPalletError =
  | 'invalidKeyOwnershipProof'
  | 'invalidSessionIndex'
  | 'invalidCandidateHash'
  | 'invalidValidatorIndex'
  | 'validatorIndexIdMismatch'
  | 'duplicateSlashingReport';

export type PolkadotRuntimeCommonParasRegistrarParaInfo = {
  manager: AccountId32;
  deposit: bigint;
  locked: boolean;
};

export type PolkadotRuntimeCommonParasRegistrarPalletError =
  | 'notRegistered'
  | 'alreadyRegistered'
  | 'notOwner'
  | 'codeTooLarge'
  | 'headDataTooLarge'
  | 'notParachain'
  | 'notParathread'
  | 'cannotDeregister'
  | 'cannotDowngrade'
  | 'cannotUpgrade'
  | 'paraLocked'
  | 'notReserved'
  | 'emptyCode'
  | 'cannotSwap';

export type PolkadotRuntimeCommonSlotsPalletError = 'paraNotOnboarding' | 'leaseError';

export type PolkadotRuntimeCommonAuctionsPalletError =
  | 'auctionInProgress'
  | 'leasePeriodInPast'
  | 'paraNotRegistered'
  | 'notCurrentAuction'
  | 'notAuction'
  | 'auctionEnded'
  | 'alreadyLeasedOut';

export type PolkadotRuntimeCommonCrowdloanFundInfo = {
  depositor: AccountId32;
  verifier?: SpRuntimeMultiSigner | undefined;
  deposit: bigint;
  raised: bigint;
  end: number;
  cap: bigint;
  lastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
  firstPeriod: number;
  lastPeriod: number;
  fundIndex: number;
};

export type PolkadotRuntimeCommonCrowdloanLastContribution =
  | { tag: 'Never'; value: never }
  | { tag: 'PreEnding'; value: number }
  | { tag: 'Ending'; value: number };

export type PolkadotRuntimeCommonCrowdloanPalletError =
  | 'firstPeriodInPast'
  | 'firstPeriodTooFarInFuture'
  | 'lastPeriodBeforeFirstPeriod'
  | 'lastPeriodTooFarInFuture'
  | 'cannotEndInPast'
  | 'endTooFarInFuture'
  | 'overflow'
  | 'contributionTooSmall'
  | 'invalidParaId'
  | 'capExceeded'
  | 'contributionPeriodOver'
  | 'invalidOrigin'
  | 'notParachain'
  | 'leaseActive'
  | 'bidOrLeaseActive'
  | 'fundNotEnded'
  | 'noContributions'
  | 'notReadyToDissolve'
  | 'invalidSignature'
  | 'memoTooLarge'
  | 'alreadyInNewRaise'
  | 'vrfDelayInProgress'
  | 'noLeasePeriod';

export type PalletXcmQueryStatus =
  | {
      tag: 'Pending';
      value: {
        responder: XcmVersionedMultiLocation;
        maybeMatchQuerier?: XcmVersionedMultiLocation | undefined;
        maybeNotify?: [number, number] | undefined;
        timeout: number;
      };
    }
  | {
      tag: 'VersionNotifier';
      value: {
        origin: XcmVersionedMultiLocation;
        isActive: boolean;
      };
    }
  | {
      tag: 'Ready';
      value: {
        response: XcmVersionedResponse;
        at: number;
      };
    };

export type XcmVersionedResponse = { tag: 'V2'; value: XcmV2Response } | { tag: 'V3'; value: XcmV3Response };

export type PalletXcmVersionMigrationStage =
  | { tag: 'MigrateSupportedVersion'; value: never }
  | { tag: 'MigrateVersionNotifiers'; value: never }
  | { tag: 'NotifyCurrentTargets'; value: Bytes | undefined }
  | { tag: 'MigrateAndNotifyOldTargets'; value: never };

export type XcmVersionedAssetId = { tag: 'V3'; value: XcmV3MultiassetAssetId };

export type PalletXcmRemoteLockedFungibleRecord = {
  amount: bigint;
  owner: XcmVersionedMultiLocation;
  locker: XcmVersionedMultiLocation;
  consumers: Array<[never, bigint]>;
};

export type PalletXcmError =
  | 'unreachable'
  | 'sendFailure'
  | 'filtered'
  | 'unweighableMessage'
  | 'destinationNotInvertible'
  | 'empty'
  | 'cannotReanchor'
  | 'tooManyAssets'
  | 'invalidOrigin'
  | 'badVersion'
  | 'badLocation'
  | 'noSubscription'
  | 'alreadySubscribed'
  | 'invalidAsset'
  | 'lowBalance'
  | 'tooManyLocks'
  | 'accountNotSovereign'
  | 'feesNotMet'
  | 'lockNotFound'
  | 'inUse';

export type PalletMessageQueueBookState = {
  begin: number;
  end: number;
  count: number;
  readyNeighbours?: PalletMessageQueueNeighbours | undefined;
  messageCount: bigint;
  size: bigint;
};

export type PalletMessageQueueNeighbours = {
  prev: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
  next: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
};

export type PalletMessageQueuePage = {
  remaining: number;
  remainingSize: number;
  firstIndex: number;
  first: number;
  last: number;
  heap: Bytes;
};

export type PalletMessageQueueError =
  | 'notReapable'
  | 'noPage'
  | 'noMessage'
  | 'alreadyProcessed'
  | 'queued'
  | 'insufficientWeight'
  | 'temporarilyUnprocessable';

export type SpRuntimeUncheckedExtrinsicUncheckedExtrinsic = Bytes;

export type FrameSystemExtensionsCheckNonZeroSenderCheckNonZeroSender = never;

export type FrameSystemExtensionsCheckSpecVersionCheckSpecVersion = never;

export type FrameSystemExtensionsCheckTxVersionCheckTxVersion = never;

export type FrameSystemExtensionsCheckGenesisCheckGenesis = never;

export type FrameSystemExtensionsCheckMortalityCheckMortality = SpRuntimeEraEra;

export type SpRuntimeEraEra =
  | { tag: 'Immortal'; value: never }
  | { tag: 'Mortal1'; value: number }
  | { tag: 'Mortal2'; value: number }
  | { tag: 'Mortal3'; value: number }
  | { tag: 'Mortal4'; value: number }
  | { tag: 'Mortal5'; value: number }
  | { tag: 'Mortal6'; value: number }
  | { tag: 'Mortal7'; value: number }
  | { tag: 'Mortal8'; value: number }
  | { tag: 'Mortal9'; value: number }
  | { tag: 'Mortal10'; value: number }
  | { tag: 'Mortal11'; value: number }
  | { tag: 'Mortal12'; value: number }
  | { tag: 'Mortal13'; value: number }
  | { tag: 'Mortal14'; value: number }
  | { tag: 'Mortal15'; value: number }
  | { tag: 'Mortal16'; value: number }
  | { tag: 'Mortal17'; value: number }
  | { tag: 'Mortal18'; value: number }
  | { tag: 'Mortal19'; value: number }
  | { tag: 'Mortal20'; value: number }
  | { tag: 'Mortal21'; value: number }
  | { tag: 'Mortal22'; value: number }
  | { tag: 'Mortal23'; value: number }
  | { tag: 'Mortal24'; value: number }
  | { tag: 'Mortal25'; value: number }
  | { tag: 'Mortal26'; value: number }
  | { tag: 'Mortal27'; value: number }
  | { tag: 'Mortal28'; value: number }
  | { tag: 'Mortal29'; value: number }
  | { tag: 'Mortal30'; value: number }
  | { tag: 'Mortal31'; value: number }
  | { tag: 'Mortal32'; value: number }
  | { tag: 'Mortal33'; value: number }
  | { tag: 'Mortal34'; value: number }
  | { tag: 'Mortal35'; value: number }
  | { tag: 'Mortal36'; value: number }
  | { tag: 'Mortal37'; value: number }
  | { tag: 'Mortal38'; value: number }
  | { tag: 'Mortal39'; value: number }
  | { tag: 'Mortal40'; value: number }
  | { tag: 'Mortal41'; value: number }
  | { tag: 'Mortal42'; value: number }
  | { tag: 'Mortal43'; value: number }
  | { tag: 'Mortal44'; value: number }
  | { tag: 'Mortal45'; value: number }
  | { tag: 'Mortal46'; value: number }
  | { tag: 'Mortal47'; value: number }
  | { tag: 'Mortal48'; value: number }
  | { tag: 'Mortal49'; value: number }
  | { tag: 'Mortal50'; value: number }
  | { tag: 'Mortal51'; value: number }
  | { tag: 'Mortal52'; value: number }
  | { tag: 'Mortal53'; value: number }
  | { tag: 'Mortal54'; value: number }
  | { tag: 'Mortal55'; value: number }
  | { tag: 'Mortal56'; value: number }
  | { tag: 'Mortal57'; value: number }
  | { tag: 'Mortal58'; value: number }
  | { tag: 'Mortal59'; value: number }
  | { tag: 'Mortal60'; value: number }
  | { tag: 'Mortal61'; value: number }
  | { tag: 'Mortal62'; value: number }
  | { tag: 'Mortal63'; value: number }
  | { tag: 'Mortal64'; value: number }
  | { tag: 'Mortal65'; value: number }
  | { tag: 'Mortal66'; value: number }
  | { tag: 'Mortal67'; value: number }
  | { tag: 'Mortal68'; value: number }
  | { tag: 'Mortal69'; value: number }
  | { tag: 'Mortal70'; value: number }
  | { tag: 'Mortal71'; value: number }
  | { tag: 'Mortal72'; value: number }
  | { tag: 'Mortal73'; value: number }
  | { tag: 'Mortal74'; value: number }
  | { tag: 'Mortal75'; value: number }
  | { tag: 'Mortal76'; value: number }
  | { tag: 'Mortal77'; value: number }
  | { tag: 'Mortal78'; value: number }
  | { tag: 'Mortal79'; value: number }
  | { tag: 'Mortal80'; value: number }
  | { tag: 'Mortal81'; value: number }
  | { tag: 'Mortal82'; value: number }
  | { tag: 'Mortal83'; value: number }
  | { tag: 'Mortal84'; value: number }
  | { tag: 'Mortal85'; value: number }
  | { tag: 'Mortal86'; value: number }
  | { tag: 'Mortal87'; value: number }
  | { tag: 'Mortal88'; value: number }
  | { tag: 'Mortal89'; value: number }
  | { tag: 'Mortal90'; value: number }
  | { tag: 'Mortal91'; value: number }
  | { tag: 'Mortal92'; value: number }
  | { tag: 'Mortal93'; value: number }
  | { tag: 'Mortal94'; value: number }
  | { tag: 'Mortal95'; value: number }
  | { tag: 'Mortal96'; value: number }
  | { tag: 'Mortal97'; value: number }
  | { tag: 'Mortal98'; value: number }
  | { tag: 'Mortal99'; value: number }
  | { tag: 'Mortal100'; value: number }
  | { tag: 'Mortal101'; value: number }
  | { tag: 'Mortal102'; value: number }
  | { tag: 'Mortal103'; value: number }
  | { tag: 'Mortal104'; value: number }
  | { tag: 'Mortal105'; value: number }
  | { tag: 'Mortal106'; value: number }
  | { tag: 'Mortal107'; value: number }
  | { tag: 'Mortal108'; value: number }
  | { tag: 'Mortal109'; value: number }
  | { tag: 'Mortal110'; value: number }
  | { tag: 'Mortal111'; value: number }
  | { tag: 'Mortal112'; value: number }
  | { tag: 'Mortal113'; value: number }
  | { tag: 'Mortal114'; value: number }
  | { tag: 'Mortal115'; value: number }
  | { tag: 'Mortal116'; value: number }
  | { tag: 'Mortal117'; value: number }
  | { tag: 'Mortal118'; value: number }
  | { tag: 'Mortal119'; value: number }
  | { tag: 'Mortal120'; value: number }
  | { tag: 'Mortal121'; value: number }
  | { tag: 'Mortal122'; value: number }
  | { tag: 'Mortal123'; value: number }
  | { tag: 'Mortal124'; value: number }
  | { tag: 'Mortal125'; value: number }
  | { tag: 'Mortal126'; value: number }
  | { tag: 'Mortal127'; value: number }
  | { tag: 'Mortal128'; value: number }
  | { tag: 'Mortal129'; value: number }
  | { tag: 'Mortal130'; value: number }
  | { tag: 'Mortal131'; value: number }
  | { tag: 'Mortal132'; value: number }
  | { tag: 'Mortal133'; value: number }
  | { tag: 'Mortal134'; value: number }
  | { tag: 'Mortal135'; value: number }
  | { tag: 'Mortal136'; value: number }
  | { tag: 'Mortal137'; value: number }
  | { tag: 'Mortal138'; value: number }
  | { tag: 'Mortal139'; value: number }
  | { tag: 'Mortal140'; value: number }
  | { tag: 'Mortal141'; value: number }
  | { tag: 'Mortal142'; value: number }
  | { tag: 'Mortal143'; value: number }
  | { tag: 'Mortal144'; value: number }
  | { tag: 'Mortal145'; value: number }
  | { tag: 'Mortal146'; value: number }
  | { tag: 'Mortal147'; value: number }
  | { tag: 'Mortal148'; value: number }
  | { tag: 'Mortal149'; value: number }
  | { tag: 'Mortal150'; value: number }
  | { tag: 'Mortal151'; value: number }
  | { tag: 'Mortal152'; value: number }
  | { tag: 'Mortal153'; value: number }
  | { tag: 'Mortal154'; value: number }
  | { tag: 'Mortal155'; value: number }
  | { tag: 'Mortal156'; value: number }
  | { tag: 'Mortal157'; value: number }
  | { tag: 'Mortal158'; value: number }
  | { tag: 'Mortal159'; value: number }
  | { tag: 'Mortal160'; value: number }
  | { tag: 'Mortal161'; value: number }
  | { tag: 'Mortal162'; value: number }
  | { tag: 'Mortal163'; value: number }
  | { tag: 'Mortal164'; value: number }
  | { tag: 'Mortal165'; value: number }
  | { tag: 'Mortal166'; value: number }
  | { tag: 'Mortal167'; value: number }
  | { tag: 'Mortal168'; value: number }
  | { tag: 'Mortal169'; value: number }
  | { tag: 'Mortal170'; value: number }
  | { tag: 'Mortal171'; value: number }
  | { tag: 'Mortal172'; value: number }
  | { tag: 'Mortal173'; value: number }
  | { tag: 'Mortal174'; value: number }
  | { tag: 'Mortal175'; value: number }
  | { tag: 'Mortal176'; value: number }
  | { tag: 'Mortal177'; value: number }
  | { tag: 'Mortal178'; value: number }
  | { tag: 'Mortal179'; value: number }
  | { tag: 'Mortal180'; value: number }
  | { tag: 'Mortal181'; value: number }
  | { tag: 'Mortal182'; value: number }
  | { tag: 'Mortal183'; value: number }
  | { tag: 'Mortal184'; value: number }
  | { tag: 'Mortal185'; value: number }
  | { tag: 'Mortal186'; value: number }
  | { tag: 'Mortal187'; value: number }
  | { tag: 'Mortal188'; value: number }
  | { tag: 'Mortal189'; value: number }
  | { tag: 'Mortal190'; value: number }
  | { tag: 'Mortal191'; value: number }
  | { tag: 'Mortal192'; value: number }
  | { tag: 'Mortal193'; value: number }
  | { tag: 'Mortal194'; value: number }
  | { tag: 'Mortal195'; value: number }
  | { tag: 'Mortal196'; value: number }
  | { tag: 'Mortal197'; value: number }
  | { tag: 'Mortal198'; value: number }
  | { tag: 'Mortal199'; value: number }
  | { tag: 'Mortal200'; value: number }
  | { tag: 'Mortal201'; value: number }
  | { tag: 'Mortal202'; value: number }
  | { tag: 'Mortal203'; value: number }
  | { tag: 'Mortal204'; value: number }
  | { tag: 'Mortal205'; value: number }
  | { tag: 'Mortal206'; value: number }
  | { tag: 'Mortal207'; value: number }
  | { tag: 'Mortal208'; value: number }
  | { tag: 'Mortal209'; value: number }
  | { tag: 'Mortal210'; value: number }
  | { tag: 'Mortal211'; value: number }
  | { tag: 'Mortal212'; value: number }
  | { tag: 'Mortal213'; value: number }
  | { tag: 'Mortal214'; value: number }
  | { tag: 'Mortal215'; value: number }
  | { tag: 'Mortal216'; value: number }
  | { tag: 'Mortal217'; value: number }
  | { tag: 'Mortal218'; value: number }
  | { tag: 'Mortal219'; value: number }
  | { tag: 'Mortal220'; value: number }
  | { tag: 'Mortal221'; value: number }
  | { tag: 'Mortal222'; value: number }
  | { tag: 'Mortal223'; value: number }
  | { tag: 'Mortal224'; value: number }
  | { tag: 'Mortal225'; value: number }
  | { tag: 'Mortal226'; value: number }
  | { tag: 'Mortal227'; value: number }
  | { tag: 'Mortal228'; value: number }
  | { tag: 'Mortal229'; value: number }
  | { tag: 'Mortal230'; value: number }
  | { tag: 'Mortal231'; value: number }
  | { tag: 'Mortal232'; value: number }
  | { tag: 'Mortal233'; value: number }
  | { tag: 'Mortal234'; value: number }
  | { tag: 'Mortal235'; value: number }
  | { tag: 'Mortal236'; value: number }
  | { tag: 'Mortal237'; value: number }
  | { tag: 'Mortal238'; value: number }
  | { tag: 'Mortal239'; value: number }
  | { tag: 'Mortal240'; value: number }
  | { tag: 'Mortal241'; value: number }
  | { tag: 'Mortal242'; value: number }
  | { tag: 'Mortal243'; value: number }
  | { tag: 'Mortal244'; value: number }
  | { tag: 'Mortal245'; value: number }
  | { tag: 'Mortal246'; value: number }
  | { tag: 'Mortal247'; value: number }
  | { tag: 'Mortal248'; value: number }
  | { tag: 'Mortal249'; value: number }
  | { tag: 'Mortal250'; value: number }
  | { tag: 'Mortal251'; value: number }
  | { tag: 'Mortal252'; value: number }
  | { tag: 'Mortal253'; value: number }
  | { tag: 'Mortal254'; value: number }
  | { tag: 'Mortal255'; value: number };

export type FrameSystemExtensionsCheckNonceCheckNonce = number;

export type FrameSystemExtensionsCheckWeightCheckWeight = never;

export type PalletTransactionPaymentChargeTransactionPayment = bigint;

export type PolkadotRuntimeCommonClaimsPrevalidateAttests = never;

export type PolkadotRuntimeRuntime = never;