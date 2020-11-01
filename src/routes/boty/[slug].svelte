<script context="module">
  import { boty as botyStore } from "$components/data.js";

  export const prerender = true;
  export async function preload(page) {
    const { slug } = page.params;
    let boty = await botyStore.load(this);

    const bota = boty.find(
      (x) => x.name.replace(/ /g, "-").toLowerCase() === slug
    );

    return { bota, boty };
  }
</script>

<script>
  export let bota = {};
  export let boty;

  // this is to put server side state into the store
  if (boty) botyStore.set(boty);
</script>

<style>
  .content {
    display: flex;
    justify-content: center;
  }

  .card {
    max-width: 1000px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 2rem;
  }

  .img {
    flex: 1;
    width: 100%;
    height: 90%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .stats {
    padding: 2rem;
    position: relative;
    background: #f8f8f8;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  h1 {
    margin-top: 0;
  }

  @media only screen and (max-width: 800px) {
    .card {
      flex-direction: column;
      margin: 1rem;
    }
  }
</style>

<div class="content">
  <div class="card">
    <div class="img">
      <img
        src="https://www.vyprodej-dovoz.cz/boty/boty-fotky/{bota.photo}"
        alt={bota.name}
        style="width:100%" />
    </div>

    <div class="stats">
      <h1>Bota {bota.name}</h1>

      <div style="text-align:right;margin-bottom:1rem;">
        <div>Výrobce: {bota.brand}</div>
        <div>Pohlaví: {bota.gender}</div>
        <div>Velikost: {bota.size}</div>
        <div>Sezóna: {bota.season}</div>
      </div>
      <div style="text-align:justify;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque
        gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra
        semper erat efficitur vel.
      </div>
    </div>
  </div>
</div>
