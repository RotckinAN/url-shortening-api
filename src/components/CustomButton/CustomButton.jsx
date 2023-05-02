import { Button, ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const CustomButton = ({
   shape,
   marginTop,
   buttonText,
   narrow,
   hashLink,
   link,
}) => {
   const width = narrow ? '200px' : '230px';
   const height = narrow ? '60px' : '65px';

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
            style={{
               marginTop: `${marginTop}`,
               width: `${width}`,
               height: `${height}`,
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
   narrow: PropTypes.bool.isRequired,
   shape: PropTypes.string.isRequired,
   marginTop: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
   hashLink: PropTypes.bool.isRequired,
   link: PropTypes.string,
};

export default CustomButton;
