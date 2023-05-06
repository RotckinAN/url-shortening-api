import { Button, ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const CustomButton = ({
   shape,
   marginTop,
   buttonText,
   isNarrow,
   hashLink,
   link,
}) => {
   const buttonClassName = `getStartedButton ${
      isNarrow ? 'getStartedButton_type_narrow' : 'getStartedButton_type_wide'
   }`;

   return (
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: 'hsl(180, 66%, 49%)',
            },
         }}
      >
         <Button
            className={buttonClassName}
            type="primary"
            style={{
               marginTop: `${marginTop}`,
               borderRadius: `${shape === 'round' ? '30px' : '10px'}`,
            }}
            htmlType="submit"
         >
            {hashLink ? (
               <HashLink smooth to={link}>
                  {buttonText}
               </HashLink>
            ) : (
               buttonText
            )}
         </Button>
      </ConfigProvider>
   );
};

CustomButton.propTypes = {
   isNarrow: PropTypes.bool.isRequired,
   shape: PropTypes.string.isRequired,
   marginTop: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
   hashLink: PropTypes.bool.isRequired,
   link: PropTypes.string,
};

export default CustomButton;
