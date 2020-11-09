<script>
  import basketStore from '$components/basket.js'
</script>

<nav>
  <a class="" href="/" rel="prefetch">Boty-Botičky</a>
  <a class="" href="/boty" rel="prefetch">Boty</a>
  <a class="" href="/kontakt" rel="prefetch">Kontakt</a>
  <a class="" href="/about" rel="prefetch">O nás</a>

  Košík ({$basketStore.length}) celkem
  {$basketStore.map(x=>x.price).reduce((a,c)=>Number(a)+Number(c),0)}Kč
</nav>

<style>
  /* .btn {
    background-color: lightgray;
    font-size: 1rem;
    text-decoration: none;
    padding: 8px 16px;
  } 

  nav {
     background-color: darkgray;
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: space-between; 
  }

  a {
    text-decoration: unset;
    color: unset;
  }

  .btn {
    font-size: 1rem;
    padding: 8px 16px;
  } */
</style>
