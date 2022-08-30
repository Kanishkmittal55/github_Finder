import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
