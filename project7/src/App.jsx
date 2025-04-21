import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import About from "./components/About";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
