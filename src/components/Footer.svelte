<footer>
  <div class="inner">
    <nav>
      <a class="" href="/kontakt" rel="preload">Kontakt</a>
      <a class="" href="/about" rel="preload">Doprava</a>
    </nav>
    <nav>
      <a class="" href="/vraceni" rel="preload">Vrácení zboží</a>
      <a class="" href="/reklamace" rel="preload">Reklamace zboží</a>
    </nav>
    <nav>
      <a class="" href="/obchod" rel="preload">Obchodní podmínky</a>
      <a class="" href="/gdpr" rel="preload">GDPR</a>
    </nav>
  </div>
</footer>

<style>
  footer {
    /* remove z-index once we add more content to main page..and put back in the background of the section */
    z-index: 1; 
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
