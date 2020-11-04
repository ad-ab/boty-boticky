<script>
  export let photo, name, gender, size, season, price, brand, stock, id

  import Size from "$components/Size.svelte"
</script>

<a href="/boty/{name.replace(/ /g, '-').toLowerCase()}">
  <div class="card">
    <div class="img">
      <img
        src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/{photo}"
        alt={name} />
    </div>

    <div class="container">
      <h4><b>{name}</b></h4>
      <div>
        <div class="row">
          <div>Velikosti: 
            {#each size.split(",").map(x=>x.trim()) as s}
              <Size strike={!stock[s]} size={s} />
            {/each}
          </div>
        </div>
        <div class="row">
          <div>Pohlaví: {gender}</div>
          <div>Značka: {brand}</div>
        </div>
        <div class="row">
          <div>Sezóna: {season}</div>
        </div>
      </div>
    </div>

    <div class="footer">{price} Kč</div>
  </div>
</a>

<style>
  a {
    text-decoration: unset;
    color: unset;
  }



  .card {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50% 1fr 2.5rem;
    align-items: stretch;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    /* transform: scale(1.005); */
    cursor: pointer;
  }

  .img {
    grid-row: 1;
    position: relative;
    height: 90%;
    width: 100%;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .container {
    grid-row: 2;
    background: #f8f8f8;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer {
    grid-row: 3;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 674px) {
    .card {
      height: auto;
      grid-template-rows: auto auto 2.5rem;
    }

    h4 {
      margin-bottom: 1rem;
    }

  }
</style>
