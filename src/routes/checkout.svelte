<script context="module">
  import shippingStore from '$components/shipping.js'

  export const prerender = true
  export async function preload() {
    let shipping = await shippingStore.load(this)
    return { shipping }
  }
</script>

<script>
  import cartStore from '$components/cart.js'
  import { format } from '$components/common.js'

  import Order from '$components/Order.svelte'

  export let shipping
  if (shipping) shippingStore.set(shipping)
  const options = shipping.zasilkovnaShippingOptions || []

  let showOrderInfo = false
  let selectedShipping = shipping.shippingOptions[0]

  const removeItemByIndex = (i) =>
    cartStore.set([...$cartStore.filter((_, index) => index !== i)])

  const formatPrice = num => num ? `${num} Kč` : 'Zdarma'

  $: checkoutTotal =
    shipping.shippingOptions[selectedShipping] +
    $cartStore.map((x) => x.price).reduce((a, c) => Number(a) + Number(c), 0)

  $: totalShipping =
    checkoutTotal >= shipping.freeShippingLimit
      ? 0
      : shipping.shippingOptions[selectedShipping]
  $: totalShippingText = totalShipping ? `${totalShipping} Kč` : 'Zdarma'
</script>

<svelte:head>
  <title>Košík | Boty Botičky - Prodej dětských bot</title>
  <meta
    name="description"
    content="Přehled položek v košíku. Zde si můžete projít boty a botičky v košíku, dříve než vyplníte a odešlete objednávku." />
</svelte:head>

<section>
  <div class="checkout">
    <div class:hidden={!$cartStore.length && showOrderInfo}>
      <h1>Košík</h1>
      {#each $cartStore as item, i (i)}
        <div class="row">
          <div>{item.name}</div>
          <div>{item.size}</div>
          <div>{format(item.price)}</div>
          <div>
            <button
              class="dark"
              title="Odebrat"
              on:click={() => removeItemByIndex(i)}>-</button>
          </div>
        </div>
      {/each}
      <div class="row top">
        <div>Doprava</div>
        <select
          bind:value={selectedShipping}
          style="width:200px; padding:0.3rem">
          {#each Object.keys(shipping.shippingOptions) as x}
            <option value={x} key={x}>{x} ({formatPrice(shipping.shippingOptions[x])})</option>
          {/each}
        </select>
        <div>{totalShippingText}</div>
      </div>
      <div class="row top">
        <div>Celková cena</div>
        <div />
        <div>{format(checkoutTotal)}</div>
        <div />
      </div>
      <div>
        <button
          on:click={() => (showOrderInfo = true)}
          class="dark"
          alt="pokračovat">Pokračovat</button>
        <div>Při objednávce nad 1500 Kč poštovné ZDARMA.</div>
      </div>
      
    </div>

    <div class:hidden={$cartStore.length}>
      <div class="box">
        <h1>Nemáte žádné položky v košíku</h1>
        Pokračujte v nákupu
        <a href="/boty">zde</a>
      </div>
    </div>
  </div>

  <div class:hidden={!$cartStore.length || !showOrderInfo}>
    <div class="title">
      <!-- <button
        class="dark shadow"
        alt="back"
        on:click={() => (showOrderInfo = false)}>&#8592;</button> -->

      <h1>Objednávka</h1>
    </div>
    <p>*Prosím nezadávejte skutečná data, tato stránka je pouze zkušební</p><br>Pro objednávku do Německa zadávejte prosím adresu výdejního místa Hermes<br>
    <Order
      cart={$cartStore}
      shipping={selectedShipping}
      {totalShipping}
      {options} />
  </div>
</section>

<style>
  h1 {
    filter: drop-shadow(0.1rem 0.1rem 4px rgba(0, 0, 0, 0.7));
    margin-left: 1rem;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    /* align-content: center; */
    /* justify-items: center; */
  }

  .hidden {
    display: none;
  }

  .box {
    text-align: center;
  }

  button {
    margin-left: 1rem;
  }

  .checkout {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    padding: 8px;

    justify-content: space-between;
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 1fr 1fr 40px;
  }

  .top {
    border-top: 1px solid lightgray;
  }
</style>
