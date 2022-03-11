import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from '../graphql/appSchema.graphql';
import { resolvers } from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
