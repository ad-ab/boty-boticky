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
  <h1>
    Boty Botičky
  </h1>

  <div class="bottom-row"> 

  </div>
</section>

<section>
  <p>Vítejte na stránce</p>
  <p>Tady nějaký náhodný boty v akci nebo tak něco?</p>
  <p>Přímé odkazy na nějaké sekce</p>
</section>

<style>
  .bottom-row {
    position:absolute;
    left:5rem;
    right:5rem;
    /* Question, should it not be grid? */
    display:flex ;
    bottom: 3rem;
    justify-content: space-evenly;
    height:10rem;
    background-color:rgba(255,255,255,.2);
  }

  section {
    position:relative;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  .first {
    height: 100vh;

    background-image: url('/backgrounds/kidsshoes1.jpg');
    background-size: cover;
    background-position: center;

  }

  h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    /* margin: 4rem auto; */
    max-width: 14rem;

    -webkit-filter: drop-shadow(0.2rem 0.2rem 5px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(0.2rem 0.2rem 5px rgba(0, 0, 0, 0.7));

  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
