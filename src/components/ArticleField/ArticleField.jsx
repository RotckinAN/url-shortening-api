import PropTypes from 'prop-types';

const ArticleField = ({ imageLink, title, paragraph }) => {
   return (
      <article className="articleField">
         <div className="articleField__imageContainer">
            <img className="articleField__image" src={imageLink} alt="" />
         </div>
         <h3 className="articleField__title">{title}</h3>
         <p className="articleField__paragraph">{paragraph}</p>
      </article>
   );
};

ArticleField.propTypes = {
   imageLink: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   paragraph: PropTypes.string.isRequired,
};

export default ArticleField;
