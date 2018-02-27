import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import * as AbsintheSocket from '@absinthe/socket'
import {createAbsintheSocketLink} from '@absinthe/socket-apollo-link'
import {Socket as PhoenixSocket} from 'phoenix'

// import { WebSocketLink } from 'apollo-link-ws'
import 'subscriptions-transport-ws'

export default (ctx) => {
  const httpLink = new HttpLink({uri: 'http://localhost:4000/api'})

  // auth token
  let token = process.server ? ctx.req.session : window.__NUXT__.state.session

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: { authorization: `Bearer ${token}` }
    })
    return forward(operation)
  })

  const wsLink = process.client ? createAbsintheSocketLink(AbsintheSocket.create(
    new PhoenixSocket('ws://localhost:4000/socket')
  )) : ''

  const link = process.server ? httpLink : wsLink
  return {
    link: concat(middlewareLink, link),
    cache: new InMemoryCache()
  }
}
