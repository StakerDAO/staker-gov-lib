import IdeaData from '../entity/idea-data';
export declare type ListIdeasRequest = Record<string, unknown>;
export declare type ListIdeasResponse = {
    ideas: Array<IdeaData>;
};
