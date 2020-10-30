<script context="module">
  export const prerender = true;
  export async function preload(page) {
    const { slug } = page.params;

    const res = await this.fetch(`/boty/boty.csv`);
    const botyFile = await res.text();

    const delimiter = "|"
    const filterColumns = ["gender", "size", "season", "brand"]
    const [headerLine, ...botyLines] = botyFile
      .split(/\r?\n/)
    const headers = headerLine.split("|").map(x=> x.trim())
    
    const arrayToObject = array => {
      const result = {}
      for (let i = 0; i < array.length; i++) 
        result[headers[i]] = array[i]
      return result;      
    }

    const boty = botyLines
      .filter(x=> x)
      .map((x) => x.split(delimiter).map(x => x.trim()))
      .map(arrayToObject);

    const getColumnValues = (columnName) =>
      Object.keys(
        boty.reduce((acc, cur) => {
          const columnValue = cur[columnName];
          if (!acc[columnValue]) acc[columnValue] = true;
          return acc;
        }, [])
      );

    let options = headers.filter(x=> filterColumns.includes(x)).reduce((acc, cur) => {
      acc[cur] = getColumnValues(cur)
      return acc;
    },{})
    
    return { boty, options };
  }
</script>

<script>
  import Bota from "$components/Bota.svelte";

  export let boty;
  export let options;
  
  // result of all option filters
  let filterResults = {}
  
  // applies all the filters from filterResults over each other
  const applyFilters = filterResults => product => 
    Object.entries(filterResults)
      .map(([key, value])=> (!value || product[key] === value))
      .reduce((acc, cur)=> acc && cur, true) 
</script>

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .obsah {
    padding: 4px;
  }
</style>

<h1>Boty</h1>

<div>
  {#each Object.keys(options) as optionName}
    <select bind:value={filterResults[optionName]} >
      <option value="">žádné</option>
      {#each options[optionName] as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  {/each}
</div>

<hr />

<div class="card-list">
  {#each boty.filter(applyFilters(filterResults)) as bota}
    <div class="obsah">
      <Bota width="220px" height="400px" {...bota} />
    </div>
  {/each}
</div>
