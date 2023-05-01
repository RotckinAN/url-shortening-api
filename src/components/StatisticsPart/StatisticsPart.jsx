import ArticleField from '../ArticleField/ArticleField.jsx';
import { ARTICLES } from '../../utils/constants.js';

const StatisticsPart = () => {
   return (
      <section className="statisticsPart">
         <h2 className="statisticPart__title">Advanced Statistics</h2>
         <p className="statisticPart__paragraph">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
         </p>
         <div className="statisticsPart__articlesContainer">
            {ARTICLES.map((article, index) => {
               return (
                  <ArticleField
                     imageLink={article.image}
                     paragraph={article.paragraph}
                     title={article.title}
                     key={index}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default StatisticsPart;
