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

<Nav />
<main>
  <slot />
</main>
<Footer />

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
    position: relative;
    text-align: center;
    margin: 0 auto;
    max-width: 1400px;
    min-height: 100;
    height: 100%;
  }

  @media only screen and (max-width: 674px) {
    main {
      max-width: 100%;
    }

    :root {
      font-size: 20px;
    }

    :global(body) {
      height: auto;
    }
  }
</style>
