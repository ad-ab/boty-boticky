<script context="module">
  import { boty as productStore } from '$components/data.js'

  export const prerender = true
  export async function preload(page) {
    let products = await productStore.load(this)
    return { products }
  }
</script>

<script>
  import { onDestroy } from 'svelte'
  import {
    isClientSide,
    pushState,
    getQuery,
    extractColumnValues,
  } from '$components/common.js'
  import Bota from '$components/Bota.svelte'
  import Selectors from "$components/Selectors.svelte"

  export let products
  // this is to put server side state into the store
  if (products) productStore.set(products)

  let defaultFilterResults = { brand: [], gender: [], size: [], season: [] }
  let filterResults = defaultFilterResults

  if (isClientSide) {
    // when the page loads, set selectors to their correct values
    filterResults = getQuery(filterResults)

    // make query string work with back button - update filterResults
    window.onpopstate = () => {
      const query = getQuery()
      filterResults = Object.keys(filterResults).reduce((acc, key) => {
        acc[key] = query[key] || defaultFilterResults[key] || []
        return acc
      }, {})
    }

    // cleanup popstate
    onDestroy(() => {
      window.onpopstate = undefined
    })
  }

  // applies all the filters from filterResults over each other
  const applyFilters = (filterResults) => (product) =>
    Object.entries(filterResults)
      .map(
        ([k, v]) => v.length === 0 || new RegExp(v.join('|')).test(product[k])
      )
      .reduce((acc, cur) => acc && cur, true)

  const filtersChanged = () => isClientSide && pushState(filterResults)
</script>

<h1>Boty</h1>

<Selectors on:change={filtersChanged} bind:filterResults={filterResults} bind:products={products} />

<div class="card-list">
  {#each products.filter(applyFilters(filterResults)) as bota (bota.id)}
    <div key={bota.name} class="obsah">
      <Bota {...bota} />
    </div>
  {/each}
</div>

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
    padding: 0.5rem;
    width: 300px;
    height: 350px;
  }

  @media only screen and (max-width: 674px) {
    .obsah {
      padding: 0.4rem 0;
      width: 100%;
      height:auto;
    }
  }
</style>
