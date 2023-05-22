import ResultItem from '../ResultItem/ResultItem.jsx';
import store from '../../store/store.js';
import { observer } from 'mobx-react-lite';

const ResultPart = observer(() => {
   const { resultValue } = store;

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
});

export default ResultPart;
