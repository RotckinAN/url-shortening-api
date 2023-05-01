import MainTitlePart from '../MainTitlePart/MainTitlePart.jsx';
import BoostPart from '../BoostPart/BoostPart.jsx';
import StatisticsPart from '../StatisticsPart/StatisticsPart.jsx';

const Main = () => {
   return (
      <main className="main">
         <MainTitlePart />
         <StatisticsPart />
         <BoostPart />
      </main>
   );
};

export default Main;
