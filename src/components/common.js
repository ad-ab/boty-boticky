export const isClientSide = typeof window !== "undefined";

// creates a object with the search values from the url
const excludedParams = ['fbclid'];
export const getQuery = () => {
  const result = {};
  const query = new URLSearchParams(window.location.search);
  for (const [key, value] of query) {
    if (excludedParams.includes(key)) continue;
    result[key] = value.split(",");
  } 
  return result;
};

// creates an url search string
export const createQuery = (object) =>
  Object.entries(object)
    .map(([k, v]) => (v.length > 0 ? `${k}=${v.join(",")}` : null))
    .filter((x) => x)
    .join("&");

export const pushState = (object, pathName = location.pathname) => {
  let pushPath = pathName.split("?")[0].replace(/[/]*$/, "");

  const newQueryString = createQuery(object);
  if (window.location.search === newQueryString) return;
  if (newQueryString) pushPath += `?${newQueryString}`;

  window.history.pushState(window.location.origin, document.title, pushPath);
};

// gets distinct values of the [column] field in the data array
export const extractColumnValues = (data) => (column) =>
  Object.keys(
    data
      .filter((x) => x)
      .reduce((acc, cur) => {
        const current = cur[column];
        if (acc[current]) return acc;
        acc[current] = true;
        return acc;
      }, {})
  );

export const format = (number) =>
  new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  }).format(Number(number));

export const fixUrl = str => str.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

export const productDataType = (prod) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: prod.name,
  image: [`https://www.vyprodej-dovoz.cz/boty/boty-fotky/${prod.photo}`],
  description: undefined,
  sku: prod.id,
  mpn: prod.id,
  brand: {
    '@type': 'Brand',
    name: prod.brand,
  },
  offers: {
    '@type': 'Offer',
    url: `https://www.boty-boticky.com/boty/${fixUrl(prod.name)}`,
    itemCondition: 'http://schema.org/NewCondition',
    availability: 'http://schema.org/InStock',
    price: prod.price,
    priceCurrency: 'CZK',
    priceValidUntil: new Date().toISOString().split('T')[0],
  },
});