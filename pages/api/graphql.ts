import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => req,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
