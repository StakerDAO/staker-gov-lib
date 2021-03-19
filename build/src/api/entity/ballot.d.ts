import Network from '../../common/network';
import VoteValue from '../../entity/vote-value';
declare type Ballot = {
    address: string;
    network: Network;
    ideaIpfsHash: string;
    voteWeight: string;
    voteIpfsHash: string | undefined;
    voteValue: VoteValue | undefined;
};
export default Ballot;
