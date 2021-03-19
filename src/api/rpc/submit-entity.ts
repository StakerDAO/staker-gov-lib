import SignedEntity from '../../entity/signed-entity'

/**
 * Request format for submitting a new entity.
 */
export type SubmitEntityRequest = {
  // A signed entity.
  signedEntity: SignedEntity
}

/**
 * Resonse format for submitting a new entity.
 */
export type SubmitEntityResponse = {
  // A signed entity. The entity is always a `Receipt`.
  signedEntity: SignedEntity
}
