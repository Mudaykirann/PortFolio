import './App.css'
import CustomCursor from './components/CustomCursor'
import FinalFooter from './components/FinalFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Skillset from './pages/Skillset'
import Work from './pages/Work'
import Footer from './pages/footer'

function App() {

  return (
    <>
      <div className='App'>
        <CustomCursor />
        <Navbar />
        <Home />
        <Aboutme />
        <Work />
        <Skillset />
        <Footer />
        <FinalFooter />
      </div>
    </>
  )
}

export default App
