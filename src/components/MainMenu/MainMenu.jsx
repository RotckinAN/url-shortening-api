import NavigateList from '../NavigateList/NavigateList.jsx';
import UserButtons from '../UserButtons/UserButtons.jsx';
import PropTypes from 'prop-types';

const MainMenu = ({ isOpen }) => {
   const menuClassName = `mainMenu ${isOpen ? 'mainMenu_type_opened' : ''}`;

   return (
      <div className={menuClassName}>
         <NavigateList forMainMenu={true} />
         <UserButtons forMainMenu={true} />
      </div>
   );
};

MainMenu.propTypes = {
   isOpen: PropTypes.bool.isRequired,
};

export default MainMenu;
