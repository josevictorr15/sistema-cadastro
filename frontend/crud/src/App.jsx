import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './components/template/Logo'
import Home from './components/home/Home'
import Footer from './components/template/Footer'
import Nav from './components/template/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Logo />
        <Nav/>
        <Home />
        <Footer/>
      </div>
    </>
  )
}

export default App
