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

export default NavigateLinks;
