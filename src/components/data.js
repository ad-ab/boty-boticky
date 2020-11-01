import { writable } from "svelte/store";

const defaultValue = [];
const delimiter = "|";
const filterColumns = ["gender", "size", "season", "brand"];

const arrayToObject = (array, headers) => {
  const result = {};
  for (let i = 0; i < array.length; i++) result[headers[i]] = array[i];
  return result;
};

const createBoty = () => {
  const { subscribe, set } = writable(defaultValue);

  const load = async ({ fetch }) => {
    // check if we have data in store
    const getData = () => new Promise(subscribe);
    let boty = await getData();

    // if not download, process, set to store
    if (!boty || boty.length === 0) {
      // const res = await fetch(`https://www.vyprodej-dovoz.cz/boty/produkty.csv`); 
      const res = await fetch(`/boty/boty.csv`);
      const botyFile = await res.text();

      const [headerLine, ...botyLines] = botyFile.split(/\r?\n/);
      const headers = headerLine.split("|").map((x) => x.trim());

      boty = botyLines
        .filter((x) => x)
        .map((x) => x.split(delimiter).map((x) => x.trim()))
        .map((x) => arrayToObject(x, headers));

      set(boty);
    }

    // return back for SSR
    return boty;
  };

  return {
    subscribe,
    reset: () => set(defaultValue),
    load,
    set,
  };
};

export const boty = createBoty();
