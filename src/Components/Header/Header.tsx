import { useState } from 'react';

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setIsHamburgerOpen((prevIsHamburgerOpen) => !prevIsHamburgerOpen)
  }

  return(
    <div className="nav">

      <div className='nav-left-section'>
        <img className='header-logo' alt='' src='https://img.icons8.com/?size=100&id=16318&format=png&color=640494'/>

        <div className='logo-text-container'>
          <p className='logo-text'>Mofidi</p>
          <p className='developer-p'>Developer</p>
        </div>

      </div>

      <div className='nav-right-section'>

        <a href='#about' role='button' className='about'>
          <p>About</p>
        </a>

        <a href='#projects' role='button' className='work'>
          <p>Work</p>
        </a>

        <a href='#contact' role='button' className='contact'>
          <p>Contact</p>
        </a>

        <div role='button' onClick={handleHamburger} className='hamburger-menu-container'>
          <div className={`${isHamburgerOpen ? 'close' : 'menu'} icon`}></div>
          {
            isHamburgerOpen ?
            <div className='hamburger-dropdown show'>

              <a href='#about' role='button' className='about-dropdown'>About</a>
              <a href='#projects' role='button' className='work-dropdown'>Work</a>
              <a href='#contact' role='button' className='contact-dropdown' >Contact</a>

            </div>
              :
              <div></div>
          }
        </div>

      </div>
    </div>
  );
}