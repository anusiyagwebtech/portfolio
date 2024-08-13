import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../ContextProviders/ThemeContextProvider/ThemeContextProvider';

function Theme() {
  const {changeTheme, theme, changeColorTheme} = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  
    

  return (
    <div className='theme'>
      <div >
       <div className='theme-gear' onClick={() => setVisible(!visible)}> <i class="fa-solid fa-gear"></i></div>
     <div className='moon' onClick={changeTheme}>
       {/* <i className={theme === 'light' ? "fa-solid fa-moon": "fa-solid fa-sun" }></i>  */}

     { theme === 'light'?  <i className={"fa-solid fa-moon" }></i> :  <i className={"fa-solid fa-sun" }></i>}
       </div></div>
     <div className={visible ? 'theme-container visible': 'theme-container'}>
       <p>
        Theme Colors
       </p>
       <div className='theme-rounds '>
        <div className='round' style={{background: '#E53935'}} onClick={()=> changeColorTheme('red')}></div>
        <div className='round'  style={{background: '#FFB300'}}  onClick={()=> changeColorTheme('yellow')}></div>
        <div className='round'  style={{background: '#E91E63'}} onClick={()=> changeColorTheme('pink')}></div>
        <div className='round'  style={{background: '#8E24AA'}} onClick={()=> changeColorTheme('hotpink')}></div>
        <div className='round'  style={{background: '#1E88E5'}} onClick={()=> changeColorTheme('blue')}></div>
       </div>
     </div>
    </div>
  )
}

export default Theme;
