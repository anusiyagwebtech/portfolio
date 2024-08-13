import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

function ThemeContextProvider({children}) {

  const [theme, setTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('blue');
  const [menubar, setMenuBar] = useState('');

  const changeTheme = () => {
   return setTheme ((prevTheme) => {
    return prevTheme === 'light' ? 'dark': 'light';
   })
  }
  const changeColorTheme = (color) => {
  return  setColorTheme(color);
  }

  const changeMenuBar = () => {
   return  setMenuBar((old) => old === 'open' ? '' : 'open');
  }
  
   
  return (
   <ThemeContext.Provider value={{theme,changeTheme, colorTheme, changeColorTheme, menubar, changeMenuBar}}>
     {children}
   </ThemeContext.Provider>
  )
}

export default ThemeContextProvider