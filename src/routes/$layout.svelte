<script context="module">
  import productStore from '$components/data.js'

  export const prerender = true
  export async function preload() {
    let products = await productStore.load(this)
    return { products }
  }
</script>

<script>
  import Nav from '$components/Nav.svelte'
  export let segment
  export let products

  // this is to put server side state into the store
  if (products) productStore.set(products)

  console.log(`Loaded on ${segment || 'home'} page`)
</script>

<main>
  <Nav />
  <slot />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
