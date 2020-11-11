<script>
  import cartStore from '$components/cart.js'

  const format = (number) =>
    new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
    }).format(Number(number))
</script>

<svelte:head>
  <title>Košík | Boty Botičky - Prodej dětských bot</title>
  <meta name="description" content="Přehled položek v košíku. Zde si můžete projít boty a botičky v košíku, dříve než vyplníte a odešlete objednávku.">
</svelte:head>

<h1>Košík</h1>

<div class="checkout">
  {#if $cartStore.length > 0}
    {#each $cartStore as item, i (i)}
      <div class="row">
        <div>{item.name}</div>
        <div>{item.size}</div>
        <div>
          {format(item.price)}
          <button
            title="Odebrat"
            on:click={() => cartStore.set([
                ...$cartStore.filter((_,index)=> index!==i ),
              ])}>-</button>
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
    </div>
  {:else}
    <h2>Nemáte žádné položky v košíku</h2>
    Vyberte si něco
    <a href="/boty">zde</a>
  {/if}
</div>

<style>
  button {
    position: absolute;
    margin-left: 8px;
  }

  .checkout {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .row {
    padding: 8px;

    /* justify-content: space-between; */
    display: grid;
    /* align-content:space-between; */
    grid-template-columns: 4fr 1fr 1fr;
  }

  .top {
    border-top: 1px solid lightgray;
  }

</style>
