import Network from '../common/network'

/**
 * Common fields which are present in all entities.
 */
type EntityCommon = {
  // The address which created the entity.
  address: string

  // The network the address is on.
  network: Network

  // The version of the schema.
  version: string
}

export default EntityCommon
