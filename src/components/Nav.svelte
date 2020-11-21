<script>
  import cartStore from '$components/cart.js'
</script>

<header>
  <div class="inner">
    <div class="logo">
      <a href="/" rel="preload">Boty Botičky</a>
      <a href="/" rel="preload">BB</a>
    </div>
    <nav>
      <a class="" href="/boty" rel="preload">Boty</a>
    </nav>

    <a class="cart" href="/checkout">
      Košík
      {#if $cartStore.length > 0}
        ({$cartStore.length})

        <!-- položek/
        {$cartStore
          .map((x) => x.price)
          .reduce((a, c) => Number(a) + Number(c), 0)}Kč) -->
      {/if}
    </a>
  </div>
</header>

<style>
  header {
    position:sticky;
    top:0;
    right:0;
    left:0;
    padding: 1rem 10rem;
    background-color: #1f0e13;
    color: lightgray;
    font-weight: 800;
    font-size: 1.2rem;
    z-index:1;
  }

  @media only screen and (max-width: 1200px) {
    header {
      padding: 1rem 2rem;
    }
  }

  .logo {
    justify-self: left;
  }

  nav {
    justify-self: center;
  }

  .cart {
    justify-self: end;
  }

  .logo a:first-child {
    display: block;
  }

  .logo a:last-child {
    display: none;
  }

  @media only screen and (max-width: 674px) {
    header {
      padding: 1rem 1rem;
    }

    .logo a:first-child {
      display: none;
    }

    .logo a:last-child {
      display: block;
    }
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: lightgray;
  }
</style>
