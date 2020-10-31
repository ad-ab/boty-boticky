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
      data.reduce((acc, cur) => {
        const current = cur[columnName];
        if (acc[current]) return acc;
        acc[current] = true;
        return acc;
      }, {})
    );

  // applies all the filters from filterResults over each other
  const applyFilters = (filterResults) => (product) =>
    Object.entries(filterResults)
      .map(([key, value]) => value.length === 0 || value.includes(product[key]))
      .reduce((acc, cur) => acc && cur, true);
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

<BrandSelector
  bind:value={filterResults['brand']}
  options={extractColumnValues('brand', boty)} />

<GenderSelector
  bind:value={filterResults['gender']}
  options={extractColumnValues('gender', boty)} />

<SizeSelector
  bind:value={filterResults['size']}
  options={extractColumnValues('size', boty)} />

<SeasonSelector
  bind:value={filterResults['season']}
  options={extractColumnValues('season', boty)} />

<hr />

<div class="card-list">
  {#each boty.filter(applyFilters(filterResults)) as bota}
    <div key={bota.name} class="obsah">
      <Bota width="240px" height="430px" {...bota} />
    </div>
  {/each}
</div>
