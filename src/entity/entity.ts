import Vote from './vote'
import EntityType from './entity-type'
import Idea from './idea'
import Receipt from './receipt'

/** An entity of an arbitrary type. */
type Entity = {
  // A discriminator to determine the type of entity.
  entityType: EntityType

  // The entity.
  entity: Vote | Idea | Receipt
}

export default Entity
