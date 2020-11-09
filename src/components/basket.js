import { writable } from "svelte/store";

const defaultValue = [];
const { subscribe, set } = writable(defaultValue);
let basket

subscribe(value => {
  basket = value;
});


export default {
    subscribe,
    reset: () => set(defaultValue),
    set,
    add: (product) => 
      set([...basket, product])
    
  };
