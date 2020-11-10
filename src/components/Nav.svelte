<script>
  import cartStore from '$components/cart.js'
</script>

<nav>
  <a class="" href="/" rel="prefetch">Boty-Botičky</a>
  <a class="" href="/boty" rel="prefetch">Boty</a>
  <a class="" href="/kontakt" rel="prefetch">Kontakt</a>
  <a class="" href="/about" rel="prefetch">O nás</a>

  <a class="" href="/checkout">
    Košík
    {#if $cartStore.length > 0}
      ({$cartStore.length}
      položek/
      {$cartStore
        .map((x) => x.price)
        .reduce((a, c) => Number(a) + Number(c), 0)}Kč)
    {/if}
  </a>
</nav>

<style>
</style>
