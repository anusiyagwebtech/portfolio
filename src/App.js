import React, { useContext } from 'react';
import './App.css';
import './scroll.css';
import Navigation from './Navigation/Navigation';
import { ThemeContext } from './ContextProviders/ThemeContextProvider/ThemeContextProvider';

function App() {
  const {theme, colorTheme} =  useContext(ThemeContext);
  console.log(theme);
  
  return (
    <div className={`body ${theme} ${colorTheme}`}>
   

      <Navigation/>
    
    </div>
    
  )
}

export default App;