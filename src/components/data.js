import { writable } from "svelte/store";

const defaultValue = [];
const delimiter = "|";
const newline = /\r?\n/;
const { subscribe, set } = writable(defaultValue);

const arrayToObject = (array, headers) => {
  const result = {};
  for (let i = 0; i < array.length; i++) result[headers[i]] = array[i];
  return result;
};

const load = async ({ fetch }) => {
  // check if we have data in store
  const getData = () => new Promise(subscribe);
  let products = await getData();
  // if not download, process, set to store
  if (!products || products.length === 0) {
    // const res = await fetch(`https://www.vyprodej-dovoz.cz/boty/produkty.csv`); - this has cors issues
    const productsRes = await fetch(`/boty/products.csv`);
    const productsFile = await productsRes.text();

    const [headerLine, ...productLines] = productsFile.split(newline);
    const headers = headerLine.split("|").map((x) => x.trim());

    const stockRes = await fetch(`/boty/stock.csv`);
    const stockFile = await stockRes.text();

    const stockLines = stockFile.split(newline)
    
    const stock = stockLines
      .filter(x => x)
      .reduce((acc, cur) => {
        const [id, stockArray] = cur.split(delimiter)
        acc[id] = Object.fromEntries(stockArray.split(',').map(x => {
          const [size, stockString] = x.split(':')
          const stock = Number((stockString || '').trim())
          return stock ? [size.trim(), stock] : null
        }).filter(x => x))
        return acc
      }, {})
    

    products = productLines
      .filter((x) => x)
      .map((x) => x.split(delimiter).map((x) => x.trim()))
      .map((x) => arrayToObject([...x, stock[x[0]] || {}], [...headers, "stock"]));
    set(products);
  }

  return products;
};


export default {
  subscribe,
  reset: () => set(defaultValue),
  load,
  set,
};
