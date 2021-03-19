import IdeaData from '../entity/idea-data';
export declare type GetIdeaRequest = {
    ideaIpfsHash: string;
};
export declare type GetIdeaResponse = {
    idea: IdeaData;
};
