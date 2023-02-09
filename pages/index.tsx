import App from './_app'
import All from './All'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <App Component={All} />
    </div>
  )
}
