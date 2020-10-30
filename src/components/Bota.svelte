<script>
  export let photo, name, gender, size, season, price, brand;
  export let width = "auto",
    height = "auto";
</script>

<style>
  a {
    text-decoration: unset;
    color:unset;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 200px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    flex: auto 0 40px;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
    cursor: pointer;
  }

  .img {
    padding: 8px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .container {
    padding: 8px;
    flex-grow: 1;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    height: 40px;
  }
</style>

<a href="/boty/{name.replaceAll(" ","-").toLowerCase()}">
  <div class="card" style={`width:${width};height:${height}`}>
    <div class="img">
      <img src="/boty/{photo}" alt={name} style="width:100%" />
    </div>
    <div class="container">
      <h4><b>{name}</b></h4>
      {gender},
      {size},
      {season},
      {brand}
    </div>
    <div class="footer">{price} Kč</div>
  </div>
</a>
