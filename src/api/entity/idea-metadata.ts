import IdeaStatus from './idea-status'

/**
 * Computed Metadata for an `Idea`.
 */
type IdeaMetadata = {
  // The IPFS hash of the `Idea`.
  ipfsHash: string

  // A numeric string representing the number of 'yay' votes the idea has received.
  yayCount: string

  // A numeric string representing the number of 'nay' votes the idea has received.
  nayCount: string

  // A numeric string reresenting the number of endorsements required for quorum.
  quorum: string

  // A numeric string representing the starting block of the voting.
  startBlock: string

  // A numeric string representing the end date for voting.
  endBlock: string

  // The status of the idea.
  ideaStatus: IdeaStatus
}
export default IdeaMetadata
