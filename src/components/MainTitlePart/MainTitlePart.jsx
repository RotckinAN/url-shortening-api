import mainImage from '../../images/illustration-working.svg';
import GetStartedButton from '../GetStartedButton/GetStartedButton.jsx';

const MainTitlePart = () => {
   return (
      <section className="mainTitlePart__titleSection">
         <article className="mainTitlePart__titleContainer">
            <h1 className="mainTitlePart__title">
               More than just shorter links
            </h1>
            <p className="mainTitlePart__subTitle">
               Build your brand's recognition and get detailed insights on how
               your links are performing.
            </p>
            <GetStartedButton />
         </article>
         <div className="mainTitlePart__imageContainer">
            <img
               src={mainImage}
               alt="main image"
               className="mainTitlePart__mainImage"
            />
         </div>
      </section>
   );
};

export default MainTitlePart;
