import App from './_app'
import All from './All'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <App Component={All} />
      <Footer />
    </div>
  )
}
