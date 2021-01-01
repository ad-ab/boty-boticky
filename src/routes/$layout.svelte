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

  :global(button) {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
  }

  :global(.button-selected) {
    background-color: rgb(150, 150, 150);
  }

  :global(button.dark) {
    border: 2px solid black;
    background-color: transparent;
    color: black;
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
    cursor: pointer;
  }

  :global(button:hover) {
    background-color: darkgray;
  }

  :global(button:disabled) {
    border: 2px solid darkgray;
    color: darkgray;
    cursor: not-allowed;
  }

  :global(section) {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  :global(h1) {
    font-size: 2rem;
  }

  :global(.description img) {
    max-width: 100%;
  }

  :global(.content) {
    max-width: 600px;
    min-width: 400px;
    width:auto;
    margin-left: auto;
    margin-right: auto;
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
