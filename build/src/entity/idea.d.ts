import EntityCommon from './entity-common';
declare type Idea = {
    blockNumber: string;
    contactInformation: string;
    ideaTitle: string;
    ideaText: string;
    forumLink: string;
} & EntityCommon;
export default Idea;
