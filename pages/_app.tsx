import '../styles/globals.css'

type Appinput = {
  Component: any
  pageProps?: any
}

function App({ Component }: Appinput) {
  return (
    <div>
      <Component />
    </div>
  )
}

export default App
