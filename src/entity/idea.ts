import EntityCommon from './entity-common'

/**
 * Represents an idea.
 */
type Idea = {
  // A numeric string representing the block number the idea was submitted on.
  blockNumber: string

  // An arbitrary payload of contact information for the author.
  contactInformation: string

  // A title for the idea.
  ideaTitle: string

  // An arbitrary payload of text representing the idea.
  ideaText: string

  // Link for the idea to a forum.
  forumLink: string
} & EntityCommon

export default Idea
