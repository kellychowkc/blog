import '../styles/globals.css'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import { Appinput } from './schema/type'

const restLink = new RestLink({
  uri: 'https://hacker-news.firebaseio.com/v0/item',
})

const query = gql`
  query GetArticleByID($id: ID) {
    item(id: $id) @rest(type: "story", path: "/{args.id}.json") {
      title
    }
  }
`

function App({ Component }: Appinput) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink,
  })

  return (
    <ApolloProvider client={client}>
      <div>
        <Component />
      </div>
    </ApolloProvider>
  )
}

export default App
