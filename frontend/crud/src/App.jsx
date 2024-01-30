
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './components/template/Logo'
import Footer from './components/template/Footer'
import Nav from './components/template/Nav'
import MainRoutes from './Routes'

function App( {...props} ) {

  return (
    <div className="app">
      <Logo />
      <Nav/>
      <MainRoutes />
      <Footer/>
    </div>
  )
}

export default App
