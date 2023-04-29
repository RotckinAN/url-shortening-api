import { Button, ConfigProvider, Typography } from 'antd';
const { Link } = Typography;

function Header() {
   return (
      <header className="header">
         <div className="header__navContainer">
            <Link to="/">
               <div className="logo header__logo"></div>
            </Link>
            <nav className="header__navigate">
               <ul className="header__navigateList">
                  <li className="header__navigateListItem">Features</li>
                  <li className="header__navigateListItem">Pricing</li>
                  <li className="header__navigateListItem">Resourses</li>
               </ul>
            </nav>
         </div>
         <div className="header__buttonContainer">
            <Button
               className="header__button header__button_type_text"
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
                  className="header__button header__button_type_primary"
                  type="primary"
                  shape="round"
               >
                  Sign Up
               </Button>
            </ConfigProvider>
         </div>
      </header>
   );
}

export default Header;
