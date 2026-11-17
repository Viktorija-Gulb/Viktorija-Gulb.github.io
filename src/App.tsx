import Introduction from './pages/Introduction'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Education } from './pages/Education'
import { Work } from './pages/Work'
import Skills from './components/Skills/Skills'

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
