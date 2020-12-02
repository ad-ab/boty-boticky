<script>
  import cartStore from '$components/cart.js'
  import { format } from '$components/common.js'

  import Order from '$components/Order.svelte'

  let showOrderInfo = false

  const removeItemByIndex = (i) =>
    cartStore.set([...$cartStore.filter((_, index) => index !== i)])
</script>

<svelte:head>
  <title>Košík | Boty Botičky - Prodej dětských bot</title>
  <meta
    name="description"
    content="Přehled položek v košíku. Zde si můžete projít boty a botičky v košíku, dříve než vyplníte a odešlete objednávku." />
</svelte:head>

<section>
  <div class="checkout">
    {#if $cartStore.length > 0}
      {#if !showOrderInfo}
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
          <div>Celková cena</div>
          <div />
          <div>
            {format($cartStore
                .map((x) => x.price)
                .reduce((a, c) => Number(a) + Number(c), 0))}
          </div>
          <div />
        </div>
        <div>
          <button
            on:click={() => (showOrderInfo = true)}
            class="dark"
            alt="objednat">Objednat</button>
        </div>
      {:else}
        <div class="title">
          <button
            class="dark shadow"
            alt="back"
            on:click={() => (showOrderInfo = false)}>&#8592;</button>

          <h1>Objednávka</h1>
        </div>
        <Order cart={$cartStore} />
      {/if}
    {:else}
      <div class="box">
        <h1>Nemáte žádné položky v košíku</h1>
        Pokračujte v nákupu
        <a href="/boty">zde</a>
      </div>
    {/if}
  </div>
</section>

<style>
  h1, .shadow {
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
