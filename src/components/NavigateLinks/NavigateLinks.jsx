import PropTypes from 'prop-types';

const NavigateLinks = ({ title, navigateItems }) => {
   return (
      <nav className="navigateLinks">
         <p className="navigateLinks__title">{title}</p>
         <ul className="navigateLinks__list">
            {navigateItems.map((navigateItem, index) => {
               return (
                  <li key={index}>
                     <a href="/" className="navigateLinks__listItem">
                        {navigateItem}
                     </a>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};
NavigateLinks.propTypes = {
   title: PropTypes.string.isRequired,
   navigateItems: PropTypes.array.isRequired,
};

export default NavigateLinks;
