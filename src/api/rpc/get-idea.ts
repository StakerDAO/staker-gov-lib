import IdeaData from '../entity/idea-data'

/**
 * A request to get idea and associated metadata.
 */
export type GetIdeaRequest = {
  // The IPFS hash of the idea.
  ideaIpfsHash: string
}

/**
 * A response to get an idea and associated metadata.
 */
export type GetIdeaResponse = {
  // The retrieved `Idea`.
  idea: IdeaData
}
