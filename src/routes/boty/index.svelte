<script context="module">
  import { boty as botyStore } from "$components/data.js";

  export const prerender = true;
  export async function preload(page) {
    let boty = await botyStore.load(this);
    return { boty };
  }
</script>

<script>
  import { onDestroy } from "svelte";
  import {
    isClientSide,
    pushState,
    getQuery,
    extractColumnValues,
  } from "$components/common.js";
  import Bota from "$components/Bota.svelte";
  import BrandSelector from "$components/BrandSelector.svelte";
  import GenderSelector from "$components/GenderSelector.svelte";
  import SizeSelector from "$components/SizeSelector.svelte";
  import SeasonSelector from "$components/SeasonSelector.svelte";

  export let boty;
  // this is to put server side state into the store
  if (boty) botyStore.set(boty);

  let defaultFilterResults = { brand: [], gender: [], size: [], season: [] };
  let filterResults = defaultFilterResults;

  if (isClientSide) {
    // when the page loads, set selectors to their correct values
    filterResults = getQuery(filterResults);

    // make query string work with back button - update filterResults
    window.onpopstate = () => {
      const query = getQuery();
      filterResults = Object.keys(filterResults).reduce((acc, key) => {
        acc[key] = query[key] || defaultFilterResults[key] || [];
        return acc;
      }, {});
    };

    // cleanup popstate
    onDestroy(() => {
      window.onpopstate = undefined;
    });
  }

  // applies all the filters from filterResults over each other
  const applyFilters = (filterResults) => (product) =>
    Object.entries(filterResults)
      .map(
        ([k, v]) => v.length === 0 || new RegExp(v.join("|")).test(product[k])
      )
      .reduce((acc, cur) => acc && cur, true);

  const filtersChanged = () => isClientSide && pushState(filterResults);
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
    height: 350px;
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
    on:change={filtersChanged}
    options={extractColumnValues(boty)('brand')} />

  <GenderSelector
    bind:value={filterResults['gender']}
    on:change={filtersChanged}
    options={extractColumnValues(boty)('gender')} />
</div>
<div class="row">
  <SizeSelector
    bind:value={filterResults['size']}
    on:change={filtersChanged}
    options={extractColumnValues(boty)('size')
      .reduce((acc, cur) => [...acc, ...cur
            .split(/[,/]/)
            .map((x) => x.trim())], [])
      .filter((value, index, self) => self.indexOf(value) === index)} />

  <SeasonSelector
    bind:value={filterResults['season']}
    on:change={filtersChanged}
    options={extractColumnValues(boty)('season')
      .reduce((acc, cur) => [...acc, ...cur
            .split(/[,]/)
            .map((x) => x.trim())], [])
      .filter((value, index, self) => self.indexOf(value) === index)} />
</div>

<div class="card-list">
  {#each boty.filter(applyFilters(filterResults)) as bota (bota.id)}
    <div key={bota.name} class="obsah">
      <Bota {...bota} />
    </div>
  {/each}
</div>
