
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Videos from "./components/Videos"
import Upload from "./components/Upload"
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
