import Ballot from '../entity/ballot'
import Network from '../../common/network'

/**
 * A request to get a `Ballot`.
 */
export type GetBallotRequest = {
  // The address to request for.
  address: string

  // The network the address is on.
  network: Network

  // The IPFS hash of the `Idea` to request for.
  ideaIpfsHash: string
}

/**
 * A response to get a `Ballot`.
 */
export type GetBallotResponse = {
  // The retrieved `Ballot`.
  ballot: Ballot
}
