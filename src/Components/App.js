
import '../CSS/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Article from "./Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/:article" element={<Article />} /> */}
    </Routes>
  )
    
}

export default App;
