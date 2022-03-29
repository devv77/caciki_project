import React from 'react';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.component'

import './App.css';
import HomePage from './pages/homepage/homepage.page';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
