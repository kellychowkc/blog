import '../styles/globals.css'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useLazyQuery,
} from '@apollo/client'
import { RestLink } from 'apollo-link-rest'
import { json } from 'stream/consumers'

type Appinput = {
  Component: any
  pageProps?: any
}
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

  // client.query({ query }).then((response) => {
  //   console.log(response.data)
  // })

  return (
    <ApolloProvider client={client}>
      <div>
        <Component />
      </div>
    </ApolloProvider>
  )
}

export default App
