import React from 'react';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.component'

import './App.css';
import HomePage from './pages/homepage/homepage.page';
import Footer from './components/footer/footer.component';

import MediaQuery from 'react-responsive';

function App() {
  return (
    <div>
      <MediaQuery minWidth={1224}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer/>
      </Router>
      </MediaQuery>

      <MediaQuery maxWidth={1224}>
        <h1>Mobile site</h1>
      </MediaQuery>
    </div>
  );
}

export default App;
