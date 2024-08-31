import React from 'react';

import './App.css';
import AppNavbar from './AppNavbar';
import Register from './Register';
import TopSales from './TopSales';
import Login from './Login';
import AddSales from './AddSales';
import Revenue from './Revenue';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar> 
      {/*  bar requierd at top so it keep outside router */}
    <BrowserRouter>
       <Routes>
          <Route path='/Login'Component={Login}></Route>
          <Route path='/Register' Component={Register}></Route>
          <Route path='/' Component={AddSales}></Route>
          <Route path='/TopSales' Component={TopSales}></Route>
          <Route path='/Revenue' Component={Revenue}></Route>
       </Routes>    
    </BrowserRouter>
       
    </div>
  );
}

export default App;
