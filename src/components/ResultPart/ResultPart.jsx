import { useSelector } from 'react-redux';
import ResultItem from '../ResultItem/ResultItem.jsx';

const ResultPart = () => {
   const { resultValue } = useSelector((state) => state.inputValues);

   return (
      <article className="resultPart">
         {resultValue.map((item, index) => {
            return (
               <ResultItem
                  origin={item.origin}
                  short={item.short}
                  key={index}
               />
            );
         })}
      </article>
   );
};

export default ResultPart;
