import Introduction from './components/Introduction'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import About from './components/About'

import { Education } from './components/Education/Education'
import { Work } from './components/WorkSection/Work'
import './App.css'

function App() {
  return (
    <main>
      <Introduction />

      <About />
      <Skills />
      <Education />
      <Work />

      <Footer />
    </main>
  )
}

export default App
