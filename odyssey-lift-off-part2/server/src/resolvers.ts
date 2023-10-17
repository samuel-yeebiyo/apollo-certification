import type { Resolvers } from "./types";

export const resolvers: Resolvers = {
  // Parent - value of the resolver for this field's parent (chaining)
  // Args - contains all graphql arguments provided for the field
  // Contextvalue - object shared across all resolvers executed for a particular operation
  //              like authentication information, db connection, or a RESTDataSource
  // Info - execution state
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
