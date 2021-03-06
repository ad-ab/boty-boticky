<script context="module">
  import productStore from '$components/data.js'
  import { fixUrl, productDataType, format } from '$components/common.js'
  export const prerender = true
  export async function preload(page) {
    const { slug } = page.params

    let products = await productStore.load(this)

    const product = products.find((x) => fixUrl(x.name) === slug)
    if (product) await productStore.fetchDescription(this, products, product)
    return { product }
  }
</script>

<script>
  import { isClientSide, getQuery } from '$components/common.js'
  import cartStore from '$components/cart.js'

  import Size from '$components/Size.svelte'
  import Season from '$components/Season.svelte'
  import Gender from '$components/Gender.svelte'

  export let product

  let selectedSize
  if (isClientSide) {
    selectedSize = getQuery()['size']
  }
</script>

<svelte:head>
  <title>{product.name} | Boty Botičky - Prodej dětských bot</title>
  <meta name="description" content="Detaily o produktu {product.name}" />
  {@html `<script type="application/ld+json" ✂prettier:content✂="JHtKU09OLnN0cmluZ2lmeShwcm9kdWN0RGF0YVR5cGUocHJvZHVjdCkpfQ==">{}</script>`}
</svelte:head>

<div class="content">
  <div class="card">
    <div class="img">
      <img
        src="http://faktury.boty-boticky.cz/domains/vyprodej-dovoz/boty/boty-fotky/{product.photo}"
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
          {#if product.gender.includes('Chlapecká') || product.gender.includes('Uni')}
            <Gender type="Chlapecká" large />
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
            large
            strike={!product.stock[s]}
            size={s}
            selectedSize={selectedSize && s == selectedSize[0]}
            on:click={() => {
              selectedSize = [s]
            }} />
        {/each}
      </div>
      <div>
        <h2>{format(product.price)}</h2>
      </div>
      <div class="btn">
        {#if selectedSize && product.stock[selectedSize]}
          <button
            alt="Add to cart"
            class="dark"
            on:click={() => cartStore.add({
                ...product,
                size: selectedSize,
              })}>Přidat do košíku</button>
        {:else}
          <button class="dark disabled" disabled> Vyberte si velikost </button>
        {/if}
      </div>
    </div>
  </div>

  {#if product.description}
    <div class="card description">
      {@html product.description}
    </div>
  {/if}
</div>

<style>
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;

    max-width: 1000px;
  }

  .card {
    background-color: white;
    max-width: 1000px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 2rem;
  }

  .description {
    margin-top: -1.8rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  button {
    padding: 0.5rem 1rem;
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

  .season {
    display: flex;
    height: 2rem;
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
    display: flex;
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
