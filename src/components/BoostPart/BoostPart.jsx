import CustomButton from '../CustomButton/CustomButton.jsx';

const BoostPart = () => {
   return (
      <section className="boostPart">
         <h2 className="boostPart__title">Boost your links today</h2>
         <CustomButton
            shape="round"
            marginTop="32px"
            buttonText="Get Started"
            narrow={true}
            hashLink={true}
            link="#inputField"
         />
      </section>
   );
};

export default BoostPart;
