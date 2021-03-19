import EntityCommon from './entity-common';
import VoteValue from './vote-value';
declare type Vote = {
    ideaIpfsHash: string;
    value: VoteValue;
} & EntityCommon;
export default Vote;
