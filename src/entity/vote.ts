import EntityCommon from './entity-common'
import VoteValue from './vote-value'

/** An `Vote` of an `Idea`. */
type Vote = {
  // The IPFS hash of the `Idea` to vote for.
  ideaIpfsHash: string

  // The value of this `Vote`.
  value: VoteValue
} & EntityCommon

export default Vote
