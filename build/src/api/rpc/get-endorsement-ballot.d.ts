import Ballot from '../entity/ballot';
import Network from '../../common/network';
export declare type GetBallotRequest = {
    address: string;
    network: Network;
    ideaIpfsHash: string;
};
export declare type GetBallotResponse = {
    ballot: Ballot;
};
