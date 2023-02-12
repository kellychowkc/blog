import App from './_app'
import All from './All'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { useEffect, useState } from 'react'
import TabNav from './components/TabNav'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY)
      if (window.scrollY > 760) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div>
      {scrolled ? <TabNav /> : <Navbar />}

      <App Component={All} />
      <Footer />
    </div>
  )
}
