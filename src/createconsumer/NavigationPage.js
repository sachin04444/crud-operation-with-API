import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Create from './Create';
import Detailt from './Detailt';
import EditF from './EditF';
import Home from './Home';

const NavigationPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/Home/Create'  element={<Create/>} />
            <Route path='/Home/Edit/:Empid'  element={<EditF/>} />
            <Route path='/Home/detail/:Empid'  element={<Detailt/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavigationPage
