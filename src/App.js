import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Header from './components/Header';
import About from './components/About';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/"  element={<About/>} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
