import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../ContextProviders/ThemeContextProvider/ThemeContextProvider';
import { Link } from 'react-router-dom';

function SideBar() {
  const [menu, setMenu] = useState('');
  const {menubar} = useContext(ThemeContext);
  


  const handleClick = (menuItem) => {
   setMenu(menuItem);
  }
  
  return (
    <div className={`sidebar ${menubar}`}>
        <div>
            <div className='logo'>Atlas</div>
        </div>
        <div className='sidebar-content'>
            <div  >
              <Link to={'/portfolio/'} className={menu === 'home' ? 'active': ''} aria-current={menu === 'home' ? 'page': undefined}onClick={()=> handleClick('home')}>
            <i class="fa-solid fa-house-chimney"></i>
            <p>Home</p></Link>
            </div>
            <div > <Link to={'/portfolio/about'} className={menu === 'about' ? 'active': ''} aria-current={menu === 'about' ? 'page': undefined} onClick={()=> handleClick('about')}>
            <i class="fa-solid fa-user"></i>
            <p>About</p></Link>
            </div>
            <div> <Link to={'/portfolio/service'} className={menu === 'service' ? 'active': ''} aria-current={menu === 'home' ? 'service': undefined}  onClick={()=> handleClick('service')}>
            <i class="fa-solid fa-bars-staggered"></i>
            <p>Services</p></Link>
            </div>
            <div   
           
            > <Link to={'/portfolio/portfolio'} className={menu === 'portfolio' ? 'active': ''} aria-current={menu === 'portfolio' ? 'page': undefined}  onClick={()=> handleClick('portfolio')}>
            <i class="fa-solid fa-briefcase"></i>
            <p>Portfolio</p></Link>
            </div>
            <div > <Link to={'/portfolio/contact'} className={menu === 'contact' ? 'active': ''} aria-current={menu === 'contact' ? 'page': undefined} onClick={()=> handleClick('contact')}>
            <i class="fa-solid fa-comment"></i>
            <p>Contact</p></Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar;