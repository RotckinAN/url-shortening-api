import { Button, ConfigProvider } from 'antd';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ origin, short }) => {
   const [isCopied, setIsCopied] = useState(false);
   const primaryColor = `${
      isCopied ? 'hsl(257, 27%, 26%)' : 'hsl(180, 66%, 49%)'
   }`;
   const buttonText = `${isCopied ? 'Copied!' : 'Copy'}`;

   if (isCopied) {
      setTimeout(setIsCopied, 3000);
   }

   return (
      <div className="resultItem">
         <div className="resultItem__textContainer">
            <p className="resultItem__paragraph">{origin}</p>
            <p className="resultItem__paragraph resultItem__paragraph_type_short">
               {short}
            </p>
         </div>
         <ConfigProvider
            theme={{
               token: {
                  colorPrimary: `${primaryColor}`,
               },
            }}
         >
            <Button
               className="resultItem__button"
               type="primary"
               onClick={() => {
                  copy(short);
                  setIsCopied(true);
               }}
            >
               {buttonText}
            </Button>
         </ConfigProvider>
      </div>
   );
};
ResultItem.propTypes = {
   origin: PropTypes.string.isRequired,
   short: PropTypes.string.isRequired,
};

export default ResultItem;
