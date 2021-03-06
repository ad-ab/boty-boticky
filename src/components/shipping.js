import { writable } from "svelte/store";

const { subscribe, set } = writable(undefined);

// download and filter this during the build process
export const getZasilkovnaShippingData = async ({ fetch }) => {
  const response = await fetch("/shipping/zasilkovna_cz.json");
  if (!response.ok) return [];

  const result = await response.json();
  const filteredResult = result;

  return filteredResult.sort((a,b) => (a.name).localeCompare(b.name));
};

export const load = async ({ fetch }) => {
  const getData = () => new Promise(subscribe);
  let result = await getData();

  if (!result) {
    const response = await fetch("/shipping/data.json");
    if (!response.ok) return { shippingOptions: undefined, freeShippingLimit: undefined };
    const json = await response.json()
    result = json
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
