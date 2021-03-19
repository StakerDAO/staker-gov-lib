import Network from '../../common/network'
import VoteValue from '../../entity/vote-value'

/**
 * Encapsulates a ballot for an address to vote for an `Idea`.
 */
type Ballot = {
  // Address that may vote on this ballot.
  address: string

  // The network the address is on.
  network: Network

  // The IPFS hash of the Idea this ballot is for.
  ideaIpfsHash: string

  // A numeric string representing the weight of this balot.
  voteWeight: string

  // The IPFS hash of the `Vote` entity, if the address has already voted this `Idea`, otherwise undefined.
  voteIpfsHash: string | undefined

  // The value of the `Vote` entity, if the address has already voted on this `Idea`, otherwise undefined.
  voteValue: VoteValue | undefined
}

export default Ballot
