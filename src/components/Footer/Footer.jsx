import { Typography } from 'antd';
import NavigateLinks from '../NavigateLinks/NavigateLinks.jsx';
const { Link } = Typography;

const Footer = () => {
   const data = {
      Features: ['Link Shortening', 'Branded Links', 'Analytics'],
      Resources: ['Blog', 'Developers', 'Support'],
      Company: ['About', 'Our Team', 'Careers', 'Contact'],
   };

   return (
      <footer className="footer" id="footer">
         <Link to="/">
            <div className="logo footer__logo"></div>
         </Link>
         <div className="footer__mainContainer">
            <div className="footer__navLinkContainer">
               <NavigateLinks
                  title={Object.keys(data)[0]}
                  navigateItems={data['Features']}
               />
               <NavigateLinks
                  title={Object.keys(data)[1]}
                  navigateItems={data['Resources']}
               />
               <NavigateLinks
                  title={Object.keys(data)[2]}
                  navigateItems={data['Company']}
               />
            </div>
            <div className="footer__navIconContainer">
               <Link to="/">
                  <div className="footer__linkLogo footer__linkLogo_type_facebook"></div>
               </Link>
               <Link to="/">
                  <div className="footer__linkLogo footer__linkLogo_type_twitter"></div>
               </Link>
               <Link to="/">
                  <div className="footer__linkLogo footer__linkLogo_type_pinterset"></div>
               </Link>
               <Link to="/">
                  <div className="footer__linkLogo footer__linkLogo_type_instagram"></div>
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
