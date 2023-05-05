import { Button, ConfigProvider } from 'antd';

const UserButtons = () => {
   return (
      <div className="userButtons">
         <Button
            className="userButtons__button userButtons__button_type_text"
            type="text"
            shape="round"
         >
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
               className="userButtons__button userButtons__button_type_primary"
               type="primary"
               shape="round"
            >
               Sign Up
            </Button>
         </ConfigProvider>
      </div>
   );
};

export default UserButtons;
