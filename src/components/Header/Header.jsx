import { Link } from 'react-router-dom';
import NavigateList from '../NavigateList/NavigateList.jsx';
import UserButtons from '../UserButtons/UserButtons.jsx';
import { IoMenuSharp } from 'react-icons/io5';
import { useState } from 'react';
import MainMenu from '../MainMenu/MainMenu.jsx';

function Header() {
   const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

   return (
      <header className="header">
         <div className="header__navContainer">
            <Link to="/" aria-label="logo">
               <div className="logo header__logo"></div>
            </Link>
            <NavigateList isHidden={true} />
            <button
               className="header__menuButton"
               title="burgerMenuButton"
               onClick={() =>
                  !isMainMenuOpen
                     ? setIsMainMenuOpen(true)
                     : setIsMainMenuOpen(false)
               }
            >
               <IoMenuSharp className="header__burgerIcon" />
            </button>
         </div>
         <UserButtons isHidden={true} />

         <MainMenu isOpen={isMainMenuOpen} />
      </header>
   );
}

export default Header;
