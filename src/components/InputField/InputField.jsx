import isURL from 'validator/lib/isURL.js';
import CustomButton from '../CustomButton/CustomButton.jsx';
import axios from 'axios';
import store from '../../store/store.js';
import { observer } from 'mobx-react-lite';

const InputField = observer(() => {
   const { value, errorMessage, setValue, getUrl, setErrorMessage } = store;
   const inputClassName = `inputField__input ${
      errorMessage ? 'inputField__input_type_error' : ''
   }`;
   const errorMessageClassName = `inputField__errorMessage ${
      errorMessage ? 'inputField__errorMessage_type_active' : ''
   } `;

   const handleSubmit = async (evt) => {
      evt.preventDefault();
      const isUrl = isURL(value, { protocols: ['http', 'https'] });

      if (value && isUrl) {
         try {
            const response = await axios.get(
               `https://api.shrtco.de/v2/shorten?url=${value}`
            );

            if (response.data.ok) {
               getUrl({
                  origin: value,
                  short: response.data.result.full_short_link,
               });
            }
         } catch (err) {
            console.error(err);
         }
      } else {
         setErrorMessage();
      }
   };

   return (
      <section className="inputField">
         <form
            className="inputField__form"
            name="shorteningForm"
            id="inputField"
            onSubmit={handleSubmit}
            noValidate
         >
            <label className="inputField__label">
               <input
                  className={inputClassName}
                  placeholder="Shorten a link here..."
                  type="url"
                  value={value}
                  onChange={setValue}
               />
               <span className={errorMessageClassName}>Please add a link</span>
            </label>
            <CustomButton
               shape="default"
               marginTop="0"
               buttonText="Shotren It!"
               isNarrow={false}
               hashLink={false}
            />
         </form>
      </section>
   );
});

export default InputField;
