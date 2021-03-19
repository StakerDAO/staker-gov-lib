import Entity from './entity'

/**
 * An entity which is cryptographically signed.
 *
 * The `signature` should be from the same key listed in
 * the `entity.entity.address` field.
 */
type SignedEntity = {
  // The entity which is signed.
  entity: Entity

  // The signature.
  signature: string
}

export default SignedEntity
