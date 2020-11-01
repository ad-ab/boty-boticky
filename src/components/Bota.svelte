<script>
  export let photo, name, gender, size, season, price, brand, id;
</script>

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
    position: relative;
    height: 90%;
    width: 100%;
    grid-row: 1;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .container {
    background: #f8f8f8;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-row: 2;
  }

  .footer {
    background: #f8f8f8;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .row {
    grid-row: 3;
    display: flex;
    justify-content: center;
  }
</style>

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
          <div>Pohlaví: {gender}</div>
          <div>Značka: {brand}</div>
        </div>
        <div class="row">
          <div>Sezóna: {season}</div>
        </div>
        <div class="row">
          <div>Velikosti: {size}</div>
        </div>
      </div>
    </div>

    <div class="footer">{price} Kč</div>
  </div>
</a>
