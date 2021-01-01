<script>
  import cartStore from '$components/cart.js'

  import Footprint from '$components/icons/Footprint.svelte'
</script>

<header>
  <div class="inner">
    <div class="logo">
      <a href="/" class="icon" rel="preload">
        <Footprint small />&nbsp;Boty&nbsp;Botičky
      </a>
      <a href="/" rel="preload"><Footprint small/>&nbsp;BB</a>
    </div>
    <nav><a class="" href="/boty" rel="preload">Boty</a></nav>

    <a class="cart" href="/checkout">
          <img src="/uvod/kosik3.jpg">
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
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    padding: 1rem 10rem;
    background-color: #1f0e13;
    color: lightgray;
    font-weight: 800;
    font-size: 1.2rem;
    z-index: 1;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.6);
  }

  .logo {
    justify-self: start;
    text-align: left;
  }

  nav {
    justify-self: center;
  }

  .cart {
    justify-self: right;
    text-align: right;
  }

  .logo a:first-child {
    display: block;
  }

  .logo a:last-child {
    display: none;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }

  a {
    color: white;
    stroke: white;
    fill: white;
    stroke-linecap: butt;
    text-decoration: none;
  }

  a:hover {
    color: lightgray;
    stroke: lightgray;
  }

  @media only screen and (max-width: 1200px) {
    header {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (max-width: 674px) {
    header {
      padding: 1rem 1rem;
    }

    .logo {
      justify-self: left;
    }

    .logo a:first-child {
      display: none;
    }

    .logo a:last-child {
      display: block;
    }
  }
</style>
