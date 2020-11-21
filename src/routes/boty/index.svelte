<script context="module">
  import productStore from '$components/data.js'

  export const prerender = true
  export async function preload() {
    let products = await productStore.load(this)
    return { products }
  }
</script>

<script>
  import { onDestroy } from 'svelte'
  import { isClientSide, pushState, getQuery } from '$components/common.js'
  import Bota from '$components/Bota.svelte'
  import Selectors from '$components/Selectors.svelte'

  export let products

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

  const filtersChanged = () => isClientSide && pushState(filterResults)

  const shouldCardBeVisible = (filterResults) => product => {
    // stock vs size filter
    const isStock = Object.entries(product.stock).reduce((acc, cur) => {
      let result = false;
      const [ size, stock ] = cur
      if (filterResults['size'] && filterResults['size'].length > 0) {
        result = new RegExp(filterResults['size'].join('|')).test(size) && stock > 0
      } else 
      {
        result = stock > 0;
      }
      return acc || result
    }, false) 
    if (!isStock) return false;
    
    // check filters
    const result = Object.entries(filterResults)
      .map(
        ([k, v]) => v.length === 0 || new RegExp(v.join('|')).test(product[k])
      )
      .reduce((acc, cur) => acc && cur, true)
    return result
  }
  
  $: filteredProducts = products.filter(shouldCardBeVisible(filterResults))
</script>

<svelte:head>
  <title>Boty | Boty Botičky - Prodej dětských bot</title>
  <meta name="description" content="Přehled všech bot a botiček, které jsou momentálně k dispozici k prodeji">
</svelte:head>

<Selectors on:change={filtersChanged} bind:filterResults bind:products />

<div class="card-list">
  {#each filteredProducts as product (product.id)}
      <div key={product.name} class="content">
        <Bota {...product} />
      </div>
  {/each}
</div>

<style>
  .card-list {
    margin-left:auto;
    margin-right:auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-items: center;
    justify-content: center;
    
  }

  .content {
    padding: 0.5rem;
    width: 300px;
    height: 380px;
  }

  @media only screen and (max-width: 674px) {
    .content {
      padding: 0.4rem 0;
      max-width:400px;
      width: 100%;
      height: auto;
    }
  }
</style>
