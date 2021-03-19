import IdeaData from '../entity/idea-data'

/**
 * A request to get a list of all Ideas.
 */
export type ListIdeasRequest = Record<string, unknown>

/**
 * A response to list all ideas.
 */
export type ListIdeasResponse = {
  // The retrieved `Ideas`.
  ideas: Array<IdeaData>
}
