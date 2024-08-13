import React, { useContext } from 'react'
import { ThemeContext } from '../../ContextProviders/ThemeContextProvider/ThemeContextProvider'

function MenuBar() {
 const { changeMenuBar } =  useContext(ThemeContext);
  return (
    <div className='menubar' onClick={changeMenuBar}>
        <i class="fa-solid fa-bars"></i>
    </div>
  )
}

export default MenuBar;