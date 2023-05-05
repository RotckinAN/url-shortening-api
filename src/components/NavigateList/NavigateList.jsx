import { Link } from 'react-router-dom';

const NavigateList = () => {
   return (
      <nav className="navigateList">
         <ul className="navigateList__list">
            <li>
               <Link className="navigateList__listItem" to={'/'}>
                  Features
               </Link>
            </li>
            <li>
               <Link className="navigateList__listItem" to={'/'}>
                  Pricing
               </Link>
            </li>
            <li>
               <Link className="navigateList__listItem" to={'/'}>
                  Resourses
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavigateList;
