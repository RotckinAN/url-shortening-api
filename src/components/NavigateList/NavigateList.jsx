import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigateList = ({ isHidden, forMainMenu }) => {
   const navigateClassName = `navigateList ${
      isHidden ? 'navigateList_type_hidden' : ''
   }`;

   const navigateListClassName = `navigateList__list ${
      forMainMenu ? 'navigateList__list_type_mainMenu' : ''
   }`;
   const navigateListItemClassName = `navigateList__listItem ${
      forMainMenu ? 'navigateList__listItem_type_mainMenu' : ''
   }`;

   return (
      <nav className={navigateClassName}>
         <ul className={navigateListClassName}>
            <li>
               <Link className={navigateListItemClassName} to={'/'}>
                  Features
               </Link>
            </li>
            <li>
               <Link className={navigateListItemClassName} to={'/'}>
                  Pricing
               </Link>
            </li>
            <li>
               <Link className={navigateListItemClassName} to={'/'}>
                  Resourses
               </Link>
            </li>
         </ul>
      </nav>
   );
};

NavigateList.propTypes = {
   isHidden: PropTypes.bool,
   forMainMenu: PropTypes.bool,
};

export default NavigateList;
