<footer>
  <div class="inner">
    <nav>
      <a class="" href="/boty" rel="preload">Boty</a>
      <a class="" href="/kontakt" rel="preload">Kontakt</a>
      <a class="" href="/about" rel="preload">Doprava</a>
       <a class="" href="/about" rel="preload">Obchodní podmínky</a>

    </nav>
  </div>
</footer>

<style>
  footer {
    
    padding: 2rem 10rem;
    background-color: #1f0e13;
    color: lightgray;
    font-weight: 400;
    font-size: 1rem;
  }
  
  @media only screen and (max-width: 1200px) {
    footer {
      padding: 2rem 2rem;
    }
  }

  nav {
    justify-self: center;
    display:flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 674px) {
    footer {
      padding: 1rem 1rem;
    }
  }

  .inner {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color:lightgray
  }
</style>
