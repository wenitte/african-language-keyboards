import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home.js';
import Convert from './Containers/Convert/convert.js';
import About from './Containers/About/about.js';
import "./fonts/goulsse.ttf"
import {Routes, Route,   BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write/:script" element={<Home />} />
          <Route path="/convert/:script" element={<Convert />} />
          <Route path="/about/:script" element={<About />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
