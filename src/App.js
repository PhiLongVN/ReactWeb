import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
{/* ----------------------------  */}
        <Header />
{/* ----------------------------  */}

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
{/* ------------------------- */}
      <Footer />
{/* ----------------------------  */}
    </div>
  );
}

export default App;
