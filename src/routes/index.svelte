<script context="module">
  import Footprint from '$components/icons/Footprint.svelte'
  import ImageLink from '$components/LinkWithImageAndText.svelte'

  export const prerender = true
</script>

<svelte:head>
  <title>Boty Botičky - Prodej dětských bot</title>
  <meta
    name="description"
    content="Hlavní stránka prodeje bot. Zde najdete spoustu krásných bot a botiček pro vaše děti a ratolesti" />
</svelte:head>

<div class="body" />
<div><img src="https://www.vyprodej-dovoz.cz/boty/uvod/reklama.png"></div>

<section class="first">
  <div class="inner">
    <div class="column">
      <h2>Dívčí obuv</h2>
      <nav>
        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=ba%C4%8Dkory&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/domaci_holka2.png"
          alt="bačkory" />
        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=podzim,jaro,holinky&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/pokus4.jpg"
          alt="holínky" />
        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=celoro%C4%8Dn%C3%AD&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/celorocni_pokus.jpg"
          alt="celoroční" />

        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=sn%C4%9Bhule,zimn%C3%AD&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/divci_snehule2.png"
          alt="zimní" />
        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=tenisky&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/divci_tenisky2.png"
          alt="tenisky" />

        <ImageLink
          link="https://www.boty-boticky.cz/boty?season=leto&gender=D%C3%ADv%C4%8D%C3%AD"
          src="/uvod/letni_holka2.png"
          alt="letní" />
      </nav>
    </div>
    <div class="column">
      <h2>Chlapecká obuv</h2>
      <nav>
        <ImageLink
          link="/boty?season=ba%C4%8Dkory&gender=Chlapeck%C3%A1"
          src="/uvod/backory_kluk.png"
          alt="bačkory" />
        <ImageLink
          link="/boty?season=jaro,podzim,holinky&gender=Chlapecká"
          src="/uvod/pokus3.jpg"
          alt="holínky" />
        <ImageLink
          link="/boty?season=celoro%C4%8Dn%C3%AD&gender=Chlapeck%C3%A1"
          src="/uvod/celorocni_kluk.png"
          alt="celoroční" />
        <ImageLink
          link="/boty?season=sněhule,zima,zimní&gender=Chlapecká"
          src="/uvod/snehule_kluk.png"
          alt="zimní" />
        <ImageLink
          link="/boty?season=tenisky&gender=Chlapeck%C3%A1"
          src="/uvod/tenisky_kluk.png"
          alt="tenisky" />
        <ImageLink
          link="/boty?season=leto&gender=Chlapeck%C3%A1"
          src="/uvod/letni_kluk.png"
          alt="letní" />
      </nav>
    </div>
  </div>
</section>

<style>
  .body {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('/backgrounds/kidsshoes1600.jpg');
    background-size: cover;
    background-position: center;
  }

  /* .bottom-row {
    position: absolute;
    left: 5rem;
    right: 5rem;
    display: flex;
    bottom: 3rem;
    justify-content: space-evenly;
    height: 10rem;
    background-color: rgba(255, 255, 255, 0.2);
  } */
  h2 {
    filter: drop-shadow(0.1rem 0.1rem 4px rgba(0, 0, 0, 0.7));
    margin-left: 1rem;
  }

  .first {
    /* height: 100vh; */

    /* background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('/backgrounds/kidsshoes1600.jpg');
    background-size: cover;
    background-position: center; */
  }
  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    text-transform: uppercase;
    font-family: 'Verdana', Verdana, serif;
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    filter: drop-shadow(0.2rem 0.2rem 5px rgba(0, 0, 0, 0.7));
  }

  .column {
    justify-self: center;
    display: flex;
    flex-direction: column;
  }

  nav {
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
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
