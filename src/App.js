import React from 'react';
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.component'

import MobileHeader from './components/mobile/header/header.component'
import MobileFooter from '.components/mobile/footer/footer.component'
import MobileHomePage from '.components/mobile'

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
        <Router>
          <MobileHeader />
          <Routes>
            <Route path="/" element={<MobileHomePage/>}></Route>
          </Routes> 
          <MobielFooter/>         
        </Router>
      </MediaQuery>
    </div>
  );
}

export default App;
