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
  import {
    isClientSide,
    pushState,
    getQuery,
    fixUrl,
  } from '$components/common.js'
  import Bota from '$components/Bota.svelte'
  import Selectors from '$components/Selectors.svelte'
  import Padded from '$components/Padded.svelte'

  export let products

  let defaultFilterResults = { brand: [], gender: [], size: [], season: [] }
  let filterResults = defaultFilterResults
  let showCount = 10

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

  const filtersChanged = () => {
    isClientSide && pushState(filterResults)
    showCount = 10
  }

  const shouldCardBeVisible = (filterResults) => (product) => {
    // stock vs size filter
    const isStock = Object.entries(product.stock).reduce((acc, cur) => {
      let result = false
      const [size, stock] = cur
      if (filterResults['size'] && filterResults['size'].length > 0) {
        result =
          new RegExp(filterResults['size'].join('|')).test(size) && stock > 0
      } else {
        result = stock > 0
      }
      return acc || result
    }, false)
    if (!isStock) return false

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
  <meta
    name="description"
    content="Přehled všech bot a botiček, které jsou momentálně k dispozici k prodeji" />
</svelte:head>

<Padded>
  <Selectors on:change={filtersChanged} bind:filterResults bind:products />
</Padded>

<div class="card-list">
  {#each filteredProducts as product, index (product.id)}
    {#if index < showCount}
      <div key={product.id} class="content-boty">
        <Bota {...product} />
      </div>
    {:else}
      <a
      style="display:none"
        alt={`${product.name} link`}
        href={`/boty/${fixUrl(product.name)}`}>{product.name}</a>
    {/if}
  {/each}
</div>

{#if showCount < filteredProducts.length}
  <div class="button-line">
    <div class="button dark" on:click={() => (showCount = showCount + 10)}>
      Načti další...
    </div>
  </div>
{/if}

<style>
  .button-line {
    text-align: center;
    padding: 2rem;
  }

  .button {
    display: inline;
    color: black;
    border: 3px solid black;
    font-weight: bold;
    padding: 1rem 2rem;
    cursor: pointer;
  }

  .button:hover {
    background-color: darkgray;
  }

  .card-list {
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-items: center;
    justify-content: center;
  }

  .content-boty {
    padding: 0.5rem;
    width: 350px;
    height: 400px;
  }

  @media only screen and (max-width: 674px) {
    .content-boty {
      padding: 0.4rem 0;
      max-width: 400px;
      width: 100%;
      height: auto;
    }
  }
</style>
