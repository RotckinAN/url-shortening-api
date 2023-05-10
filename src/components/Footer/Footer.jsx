import { Typography } from 'antd';
import NavigateLinks from '../NavigateLinks/NavigateLinks.jsx';
import { FOOTERLINKS } from '../../utils/constants.js';
const { Link } = Typography;

const Footer = () => {
   return (
      <footer className="footer">
         <Link to="url-shortening-api/">
            <div className="logo footer__logo"></div>
         </Link>
         <div className="footer__mainContainer">
            <div className="footer__navLinkContainer">
               <NavigateLinks
                  title={Object.keys(FOOTERLINKS)[0]}
                  navigateItems={FOOTERLINKS['Features']}
               />
               <NavigateLinks
                  title={Object.keys(FOOTERLINKS)[1]}
                  navigateItems={FOOTERLINKS['Resources']}
               />
               <NavigateLinks
                  title={Object.keys(FOOTERLINKS)[2]}
                  navigateItems={FOOTERLINKS['Company']}
               />
            </div>
            <div className="footer__navIconContainer">
               <Link to={'url-shortening-api/'}>
                  <div className="footer__linkLogo footer__linkLogo_type_facebook"></div>
               </Link>
               <Link to={'url-shortening-api/'}>
                  <div className="footer__linkLogo footer__linkLogo_type_twitter"></div>
               </Link>
               <Link to={'url-shortening-api/'}>
                  <div className="footer__linkLogo footer__linkLogo_type_pinterset"></div>
               </Link>
               <Link to={'url-shortening-api/'}>
                  <div className="footer__linkLogo footer__linkLogo_type_instagram"></div>
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
