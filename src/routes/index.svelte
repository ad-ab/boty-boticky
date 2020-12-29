<script context="module">
  import Footprint from '$components/icons/Footprint.svelte'

  export const prerender = true
</script>

<svelte:head>
  <title>Boty Botičky - Prodej dětských bot</title>
  <meta
    name="description"
    content="Hlavní stránka prodeje bot. Zde najdete spoustu krásných bot a botiček pro vaše děti a ratolesti" />
</svelte:head>

<section class="first">
  <h3>Boty botičky - prodej zdravé dětské obuvi</h3>
  
<section>
    <div class="inner">
      <nav>
 
    <h2>Dívčí obuv</h2> 
      <a href="https://www.boty-boticky.cz/boty?season=podzim,jaro&gender=D%C3%ADv%C4%8D%C3%AD"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/dom_holka.jpg" alt="holinky"> 
      <a href="https://www.boty-boticky.cz/boty?season=ba%C4%8Dkory&gender=D%C3%ADv%C4%8D%C3%AD"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka.jpg" alt="holinky"><br><br>
        <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/celorocni_holka.jpg" alt="holinky">
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/divci_snehule.jpg" alt="holinky"><br><br>
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/divci_tenisky.jpg" alt="holinky">
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/letni_holka.jpg" alt="holinky">

  </nav>    
  <nav>  
  <h2>Chlapecká obuv</h2>
          <a href="https://www.boty-boticky.cz/boty?season=podzim,jaro&gender=D%C3%ADv%C4%8D%C3%AD"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky"> 
      <a href="https://www.boty-boticky.cz/boty?season=ba%C4%8Dkory&gender=D%C3%ADv%C4%8D%C3%AD"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky"><br><br>
        <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky">
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky"><br><br>
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky">
      <a href="https://www.boty-boticky.cz/boty?season=jaro,podzim"><img src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/holinky_holka2.jpg" alt="holinky">
    </nav>  

       </div>
</section>
  
  <div class="bottom-row" />
</section>



<style>
  .bottom-row {
    position: absolute;
    left: 5rem;
    right: 5rem;
    display: flex;
    bottom: 3rem;
    justify-content: space-evenly;
    height: 10rem;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .first {
    height: 100vh;

    background-image: url('/backgrounds/kidsshoes1600.jpg');
    background-size: cover;
    background-position: center;
  }
  .inner {
    display:grid;
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    text-transform: uppercase;
    font-family: "Verdana", Verdana, serif;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    filter: drop-shadow(0.2rem 0.2rem 5px rgba(0, 0, 0, 0.7));
  }
  
 nav {
    justify-self: center;
    display:flex;
    flex-direction: column;
  }
  
  p {
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (max-width: 674px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }

    .bottom-row {
      left: 1rem;
      right: 1rem;
      bottom: 2rem;
    }
  }
</style>
