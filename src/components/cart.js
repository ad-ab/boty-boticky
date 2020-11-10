import { writable } from "svelte/store";

const defaultValue = [];
const { subscribe, set } = writable(defaultValue);
let cart

subscribe(value => {
  cart = value;
});


export default {
    subscribe,
    reset: () => set(defaultValue),
    set,
    add: (product) => 
      set([...cart, product])
    
  };
