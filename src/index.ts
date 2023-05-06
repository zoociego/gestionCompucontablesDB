import './mongo'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from '../lib/typeDefinitions.gql'
import  { resolvers } from '../utils/resolvers.gql'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen()
  .then(
    ({ url }) => console.log(`Server ready at ${url}`)
  )