import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home/Home.js';
import Convert from './Containers/Convert/convert.js';
import About from './Containers/About/about.js';
import {Routes, Route,   BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write/:lang/:script" element={<Home />} />
          <Route path="/convert/" element={<Convert />} />
          <Route path="/about/:script" element={<About />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
