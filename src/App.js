import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioProject from "./components/PortfolioProject";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/projects" element={<PortfolioProject />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
