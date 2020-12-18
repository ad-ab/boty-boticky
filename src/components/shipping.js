import { writable } from "svelte/store";

const { subscribe, set } = writable(undefined);

// download and filter this during the build process
export const getZasilkovnaShippingData = async ({ fetch }) => {
  const response = fetch("https://www.zasilkovna.cz/api/v4/41494564a70d6de6/branch.json");
  if (!response.ok) return [];

  const result = response.json();
  return Object.entries(result).map(([key, value]) => ({ name: key, price: value }));
};

export const load = async ({ fetch }) => {
  const getData = () => new Promise(subscribe);
  let result = await getData();

  if (!result) {
    const response = fetch("/shipping/data.json");
    if (!response.ok) return { shippingOptions: undefined, freeShippingLimit: undefined };

    const result = Object.values(response.json().data).filter(x=>x.country==="cz");
    result.zasilkovnaShippingOptions = await getZasilkovnaShippingData({ fetch });

    set(result);
  }
  return result;
};

export default { 
  load,
  subscribe,
  set
}