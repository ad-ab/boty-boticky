<script context="module">
  import { boty as botyStore } from '$components/data.js'

  export const prerender = true
  export async function preload(page) {
    let products = await botyStore.load(this)
    return { products }
  }
</script>

<script>
  export let products

  // this is to put server side state into the store
  if (products) botyStore.set(products)
</script>

<svelte:head>
  <title>Boty Botičky - Prodej dětských bot</title>
  <meta name="description" content="Hlavní stránka prodeje bot. Zde najdete spoustu krásných bot a botiček pro vaše děti a ratolesti">
</svelte:head>

<h1>Boty Botičky</h1>
<p>Vítejte na stránce</p>
<p>Tady nějaký náhodný boty v akci nebo tak něco?</p>
<p>Přímé odkazy na nějaké sekce</p>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
