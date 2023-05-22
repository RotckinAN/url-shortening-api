import { makeAutoObservable } from 'mobx';

export class Store {
   value = '';
   errorMessage = false;
   resultValue = [];

   constructor() {
      // makeAutoObservable(this, {}, { autoBind: true });
      makeAutoObservable(this);
   }

   setValue = (event) => {
      this.value = event.target.value;
   };

   getUrl = (payload) => {
      this.resultValue = [...this.resultValue, payload];
      this.value = '';
      this.errorMessage = false;
   };

   setErrorMessage = () => {
      this.errorMessage = true;
   };
}

const store = new Store();
export default store;
