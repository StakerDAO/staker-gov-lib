import IdeaStatus from './idea-status';
declare type IdeaMetadata = {
    ipfsHash: string;
    yayCount: string;
    nayCount: string;
    quorum: string;
    startBlock: string;
    endBlock: string;
    ideaStatus: IdeaStatus;
};
export default IdeaMetadata;
