import './App.css'
import About from './components/About';
import Announce from './components/Announce';
import Archives from './components/Archives';
import Current from './components/Current';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Submissions from './components/Submissions'
import Contact from './components/Contact'
import { Routes, Route } from "react-router-dom";
import Vol_12 from './components/Vol_12';
import Vol_13 from './components/Vol_13';
import Vol_14 from './components/Vol_14';
import Vol_11 from './components/Vol_11';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />  
          <Route path="/current" element={<Current/>} />
          <Route path="/archives" element={<Archives/>} />
          <Route path="/announcements" element={<Announce/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/submissions" element={<Submissions/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/vol_12" element={<Vol_12/>} />
          <Route path="/vol_13" element={<Vol_13/>} />
          <Route path="/vol_14" element={<Vol_14/>} />
          <Route path="/vol_11" element={<Vol_11/>}></Route>
      </Routes>
    </>
  )
}

export default App
