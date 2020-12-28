import { writable } from "svelte/store";
import { isClientSide } from "$components/common.js";

const defaultValue = [];
const { subscribe, set } = writable(defaultValue);
if (isClientSide) {
  const storageValue = JSON.parse(localStorage.getItem('cart'));
  if (storageValue) set(storageValue);
}

let cart;

subscribe(value => {
  cart = value;
});

const store = (value) => {
  localStorage.setItem('cart', JSON.stringify(value));
  set(value);
}


export default {
  subscribe,
  reset: () => store(defaultValue),
  set: store,
  add: (product) =>
    store([...cart, product])

};
