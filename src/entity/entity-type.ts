/**
 * The type of an entity.
 */
enum EntityType {
  // An `Idea`
  Idea = 'idea',

  // A `Vote` on an `Idea`
  Vote = 'vote',

  // A `Receipt` indicating the server has accepted a given `Idea` or `Endorsement`.
  Receipt = 'receipt',
}

export default EntityType
