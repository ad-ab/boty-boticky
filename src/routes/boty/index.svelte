<script context="module">
  import { boty as botyStore } from "$components/data.js";

  export const prerender = true;
  export async function preload(page) {
    let boty = await botyStore.load(this);
    return { boty };
  }
</script>

<script>
  import Bota from "$components/Bota.svelte";
  import BrandSelector from "$components/BrandSelector.svelte";
  import GenderSelector from "$components/GenderSelector.svelte";
  import SizeSelector from "$components/SizeSelector.svelte";
  import SeasonSelector from "$components/SeasonSelector.svelte";

  export let boty;

  // this is to put server side state into the store
  if (boty) botyStore.set(boty);

  // result of all option filters
  let filterResults = { brand: [], gender: [], size: [], season: [] };

  const extractColumnValues = (columnName, data) =>
    Object.keys(
      data
        .filter((x) => x)
        .reduce((acc, cur) => {
          const current = cur[columnName];
          if (acc[current]) return acc;
          acc[current] = true;
          return acc;
        }, {})
    );

  // applies all the filters from filterResults over each other
  const applyFilters = (filterResults) => (product) =>
    Object.entries(filterResults)
      .map(([key, value]) => {
        if (value.length === 0) return true;
        return new RegExp(value.join("|")).test(product[key]);

        // return value.length === 0 || value.includes(product[key]);
      })
      .reduce((acc, cur) => acc && cur, true);
</script>

<style>
  .card-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-items: center;
    justify-content: center;
  }

  .obsah {
    padding: 0.4rem;
    width: 300px;
    height: 400px;
  }

  .row {
    padding: 0.1rem 0;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 674px) {
    .obsah {
      padding: 1rem;
      width: 100%;
    }
  }
</style>

<h1>Boty</h1>

<div class="row">
  <BrandSelector
    bind:value={filterResults['brand']}
    options={extractColumnValues('brand', boty)} />

  <GenderSelector
    bind:value={filterResults['gender']}
    options={extractColumnValues('gender', boty)} />
</div>
<div class="row">
  <SizeSelector
    bind:value={filterResults['size']}
    options={extractColumnValues('size', boty)
      .reduce((acc, cur) => [...acc, ...cur
            .split(/[,/]/)
            .map((x) => x.trim())], [])
      .filter((value, index, self) => self.indexOf(value) === index)} />

  <SeasonSelector
    bind:value={filterResults['season']}
    options={extractColumnValues('season', boty)
      .reduce((acc, cur) => [...acc, ...cur
            .split(/[,]/)
            .map((x) => x.trim())], [])
      .filter((value, index, self) => self.indexOf(value) === index)} />
</div>

<div class="card-list">
  {#each boty.filter(applyFilters(filterResults)) as bota}
    <div key={bota.name} class="obsah">
      <Bota {...bota} />
    </div>
  {/each}
</div>
