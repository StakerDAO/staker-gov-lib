import EntityCommon from './entity-common'

/**
 * An entity representing a Receipt.
 */
type Receipt = {
  // The IPFS hash of the `Entity` that this is a `Receipt` for.
  ipfsHash: string
} & EntityCommon

export default Receipt
