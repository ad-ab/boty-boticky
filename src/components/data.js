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
    const res = await fetch(`/boty/boty.csv`);
    const botyFile = await res.text();

    const [headerLine, ...botyLines] = botyFile.split(/\r?\n/);
    const headers = headerLine.split("|").map((x) => x.trim());

    const boty = botyLines
      .filter((x) => x)
      .map((x) => x.split(delimiter).map((x) => x.trim()))
      .map((x) => arrayToObject(x, headers));

    // const getColumnValues = (columnName) =>
    //   Object.keys(
    //     boty.reduce((acc, cur) => {
    //       const columnValue = cur[columnName];
    //       if (!acc[columnValue]) acc[columnValue] = true;
    //       return acc;
    //     }, [])
    //   );

    // const options = headers
    //   .filter((x) => filterColumns.includes(x))
    //   .reduce((acc, cur) => {
    //     acc[cur] = getColumnValues(cur);
    //     return acc;
    //   }, {});

    const result = { boty };
    set(result);
    return { boty };
  };

  return {
    subscribe,
    reset: () => set(defaultValue),
    load,
    set,
  };
};

export const boty = createBoty();
