/** Status of an Idea. */
enum IdeaStatus {
  // Idea is available for voting.
  Active,

  // Idea has finished voting and passed, but is not implemented.
  Passed,

  // Idea has finished voting and failed.
  Failed,

  // Idea has passed and been implemented.
  Implemented,
}

export default IdeaStatus
