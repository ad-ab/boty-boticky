<script>
  export let photo, name, gender, size, season, price, brand;
  export let width = "auto", height = "auto";
</script>

<style>
  .card {
    min-width: 200px;
    padding: 8px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
</style>

<div class="card" style={`width:${width};height:${height}`}>
  <img src="/boty/{photo}" alt={name} style="width:100%" />
  <div class="container">
    <h4><b>{name}</b></h4>
    {gender},
    {size},
    {season},
    {brand},
    {price}
  </div>
</div>
