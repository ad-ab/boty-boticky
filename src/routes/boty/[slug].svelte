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
  import { isClientSide, getQuery } from '$components/common.js'
  import cartStore from '$components/cart.js'

  import Size from '$components/Size.svelte'
  import Season from '$components/Season.svelte'
  import Gender from '$components/Gender.svelte'

  export let product
  export let products

  // this is to put server side state into the store
  if (products) botyStore.set(products)

  let selectedSize
  if (isClientSide) {
    selectedSize = getQuery()['size']
  }
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
      <div class="title">
        <h1>{product.name}</h1>
        <div class="brand">{product.brand}</div>
      </div>

      <div class="pictures">
        <div class="genders">
          {#if product.gender.includes('Dívčí') || product.gender.includes('Uni')}
            <Gender type="Dívčí" large />
          {/if}
          {#if product.gender.includes('Chlapecké') || product.gender.includes('Uni')}
            <Gender type="Chlapecké" large />
          {/if}

        </div>

        <div class="season">
          {#each product.season.split(',').map((x) => x.trim()) as season}
            <Season type={season} large />
          {/each}
        </div>
      </div>
      <div class="sizes">
        {#each product.size.split(',').map((x) => x.trim()) as s}
          <Size
            strike={!product.stock[s]}
            size={s}
            selectedSize={selectedSize && s == selectedSize[0]}
            on:click={() => {
              selectedSize = [s]
            }} />
        {/each}
      </div>
      <div class="btn">
        {#if selectedSize && product.stock[selectedSize]}
          <button on:click={()=> cartStore.add({...product, size:selectedSize})}>Přidat do košíku</button>
        {:else}
          <div
            style="padding:8px 16px;border: 1px solid white;font-size:13.3333px">
            Vyberte si velikost
          </div>
        {/if}
      </div>

      <div style="text-align:justify;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        vehicula tellus. Morbi id tincidunt dui, non fringilla purus.
      </div>
    </div>
  </div>
</div>

<style>
  button { 
    padding:8px 16px
  }

  h1 {
    margin-bottom: 0;
    text-shadow: 1px 1px 4px darkgray;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }

  .pictures {
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .brand {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    font-variant: small-caps;
    text-shadow: 2px 2px 4px darkgray;
  }

  .content {
    display: flex;
    justify-content: center;
  }

  .season {
    display: flex;
    height: 2rem;
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
    align-items: center;
    justify-items: center;
  }

  .genders {
    display:flex;
  }

  h1 {
    margin-top: 0;
  }

  @media only screen and (max-width: 800px) {
    .card {
      flex-direction: column;
      margin: 0rem;
    }

    .sizes {
      padding-bottom: 1rem;
    }
    .pictures {
      padding: 1rem;
    }
  }
</style>
