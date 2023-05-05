import { Link } from 'react-router-dom';
import NavigateList from '../NavigateList/NavigateList.jsx';
import UserButtons from '../UserButtons/UserButtons.jsx';
import { IoMenuSharp } from 'react-icons/io5';

function Header() {
   return (
      <header className="header">
         <div className="header__navContainer">
            <Link to="/">
               <div className="logo header__logo"></div>
            </Link>
            <NavigateList />
            <IoMenuSharp className="header__burgerIcon" />
         </div>
         <UserButtons />
      </header>
   );
}

export default Header;
