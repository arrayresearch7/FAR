import "./App.css";
import About from "./components/About";
import Announce from "./components/Announce";
import Archives from "./components/Archives";
import Current from "./components/Current";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Submissions from "./components/Submissions";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Vol_12 from "./components/Vol_12";
import Vol_13 from "./components/Vol_13";
import Vol_14 from "./components/Vol_14";
import Vol_11 from "./components/Vol_11";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🔹 GLOBAL LOGO WATERMARK BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0
        flex items-center justify-center"
      >
        <img
          src="/logo_a.png"
          alt="Background Logo"
          className="
            w-[520px] max-w-[80%]
            opacity-[0.05]
            blur-[1px]
            select-none
          "
        />
      </div>

      {/* 🔹 MAIN APP CONTENT */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/current" element={<Current />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/announcements" element={<Announce />} />
          <Route path="/about" element={<About />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vol_12" element={<Vol_12 />} />
          <Route path="/vol_13" element={<Vol_13 />} />
          <Route path="/vol_14" element={<Vol_14 />} />
          <Route path="/vol_11" element={<Vol_11 />} />
          <Route
            path="/article/:volume/:index"
            element={<ArticleDetail />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
