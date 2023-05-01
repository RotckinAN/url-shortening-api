import { Button, ConfigProvider } from 'antd';

const GetStartedButton = () => {
   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: 'hsl(180, 66%, 49%)',
            },
         }}
      >
         <Button
            className="getStartedButton"
            type="primary"
            shape="round"
            href={'#footer'}
         >
            Get Started
         </Button>
      </ConfigProvider>
   );
};

export default GetStartedButton;
