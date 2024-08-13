import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import * as Screens from '../Screens';
import * as Components from '../Components';
import newResume from '../Assets/newresume.pdf'

function MainStack() {
  return (
    <div>
     <Router>
    
        <Routes>
            <Route path='/' element={<Screens.HomeScreen/>}/>
            <Route path='/about' element={<Screens.AboutPage/>}/>
            <Route path='/service' element={<Screens.Services/>}/>
            <Route path='/portfolio' element={<Screens.Portfolio/>}/>
            <Route path='/contact' element={<Screens.ContactPage/>}/>
            {/* <Route path='/newresume' element={newResume}/> */}
        </Routes>
        <Components.Theme/>
        <Components.MenuBar/>
     </Router>
    </div>
  )
}

export default MainStack;