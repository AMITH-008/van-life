import './App.css';
import React from 'react';
import { Routes, Route , Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link className="site-logo" to="/">#VANLIFE</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
