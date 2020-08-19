import React from 'react';
// import ListMenu from './components/list-menu/listMenu';
import Videos from './components/videos/videos';
import Activities from './components/activity/activity'
import TopMenu from './components/top-menu/topMenu';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="background-primary">
      <div className="container">
        <TopMenu />
        <div className="row">
          <div className="col-7">
            <Videos />
          </div>
          <div className="col-5">
            <Activities />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
