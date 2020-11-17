<script>
  import cartStore from '$components/cart.js'
</script>

<nav>
  <a class="" href="/" rel="preload">Boty-Botičky</a>
  <a class="" href="/boty" rel="preload">Boty</a>
  <a class="" href="/kontakt" rel="preload">Kontakt</a>
  <a class="" href="/about" rel="preload">O nás</a>

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
