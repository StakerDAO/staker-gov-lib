import Idea from '../../entity/idea'
import IdeaMetadata from './idea-metadata'

/** Data about an `Idea`, including the `Idea` itself, associated metadata, and voting data. */
type IdeaData = {
  // The raw `Idea` entity
  idea: Idea

  // Computed metadata about the `Idea`
  metadata: IdeaMetadata
}

export default IdeaData
