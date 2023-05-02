import MainTitlePart from '../MainTitlePart/MainTitlePart.jsx';
import BoostPart from '../BoostPart/BoostPart.jsx';
import StatisticsPart from '../StatisticsPart/StatisticsPart.jsx';
import InputField from '../InputField/InputField.jsx';
import ResultPart from '../ResultPart/ResultPart.jsx';

const Main = () => {
   return (
      <main className="main">
         <MainTitlePart />
         <InputField />
         <ResultPart />
         <StatisticsPart />
         <BoostPart />
      </main>
   );
};

export default Main;
