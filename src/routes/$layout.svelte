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
  import Footer from '$components/Footer.svelte'

  export let segment
  export let products

  // this is to put server side state into the store
  if (products) productStore.set(products)

  console.log(`Loaded on ${segment || 'home'} page`)
</script>

<div class="grid">
  <Nav />
  <main class="second">
    <slot />
  </main>
  <Footer />
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(body),
  :global(html) {
    margin: 0;
    padding: 0;
    background-color: lightgray;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  .grid {
    display: grid;
    grid-template-rows: min-content auto min-content;
    min-height: 100vh;
  }

  @media only screen and (max-width: 674px) {
    :root {
      font-size: 20px;
    }
  }
</style>
