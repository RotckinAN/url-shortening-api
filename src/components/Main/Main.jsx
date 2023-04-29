import { Button, ConfigProvider } from 'antd';
import mainImage from '../../images/illustration-working.svg';

const Main = () => {
   return (
      <main className="main">
         <section className="main__titleSection">
            <article className="main__titleContainer">
               <h1 className="main__title">More than just shorter links</h1>
               <p className="main__subTitle">
                  Build your brand's recognition and get detailed insights on
                  how your links are performing.
               </p>
               <ConfigProvider
                  theme={{
                     token: {
                        colorPrimary: 'hsl(180, 66%, 49%)',
                     },
                  }}
               >
                  <Button
                     className="main__mainButton"
                     type="primary"
                     shape="round"
                     href={'#footer'}
                  >
                     Get Started
                  </Button>
               </ConfigProvider>
            </article>
            <div className="main__imageContainer">
               <img
                  src={mainImage}
                  alt="main image"
                  className="main__mainImage"
               />
            </div>
         </section>
      </main>
   );
};

export default Main;
