import { Button, ConfigProvider } from 'antd';
import PropTypes from 'prop-types';

const UserButtons = ({ isHidden, forMainMenu }) => {
   const userButtonsClassName = `userButtons ${
      isHidden ? 'userButtons_type_hidden' : ''
   } ${forMainMenu ? 'userButtons_type_mainMenu' : ''}`;
   const userButtonClassName = `userButtons__button userButtons__button_type_text ${
      forMainMenu ? 'userButtons__button_type_mainMenu' : ''
   }`;
   const userButtonPrimaryClassName = `userButtons__button userButtons__button_type_primary ${
      forMainMenu
         ? 'userButtons__button_type_mainMenu userButtons__button_type_wide'
         : ''
   }`;

   return (
      <div className={userButtonsClassName}>
         <Button className={userButtonClassName} type="text" shape="round">
            Login
         </Button>
         <ConfigProvider
            theme={{
               token: {
                  colorPrimary: 'hsl(180, 66%, 49%)',
               },
            }}
         >
            <Button
               className={userButtonPrimaryClassName}
               type="primary"
               shape="round"
            >
               Sign Up
            </Button>
         </ConfigProvider>
      </div>
   );
};

UserButtons.propTypes = {
   isHidden: PropTypes.bool,
   forMainMenu: PropTypes.bool,
};

export default UserButtons;
