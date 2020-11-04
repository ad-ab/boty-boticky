<script context="module">
  import { boty as botyStore } from '$components/data.js'

  export const prerender = true
  export async function preload(page) {
    const { slug } = page.params
    let products = await botyStore.load(this)

    const product = products.find(
      (x) => x.name.replace(/ /g, '-').toLowerCase() === slug
    )

    return { product, products }
  }
</script>

<script>
  import Size from "$components/Size.svelte"

  export let product
  export let products

  // this is to put server side state into the store
  if (products) botyStore.set(products)
</script>

<div class="content">
  <div class="card">
    <div class="img">
      <img
        src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/{product.photo}"
        alt={product.name}
        style="width:100%" />
    </div>

    <div class="stats">
      <h1>Bota {product.name}</h1>

      <div style="text-align:right;margin-bottom:1rem;">
        <div>Výrobce: {product.brand}</div>
        <div>Pohlaví: {product.gender}</div>
        <div>Velikost: 
          <div>Velikosti: 
            {#each product.size.split(",").map(x=>x.trim()) as s}
              <Size strike={!product.stock[s]} size={s} />
            {/each}
          </div>
        </div>
        <div>Sezóna: {product.season}</div>
      </div>
      <div style="text-align:justify;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque
        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra
        semper erat efficitur vel.
      </div>
    </div>
  </div>
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
  }

  .card {
    max-width: 1000px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 2rem;
  }

  .img {
    flex: 1;
    width: 100%;
    height: 90%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .stats {
    padding: 2rem;
    position: relative;
    background: #f8f8f8;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  h1 {
    margin-top: 0;
  }

  @media only screen and (max-width: 800px) {
    .card {
      flex-direction: column;
      margin: 0rem;
    }
  }
</style>
