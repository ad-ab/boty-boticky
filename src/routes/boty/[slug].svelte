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
  .header {
    display: flex;
    flex: 1 2;
  }

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-end;
  }
</style>

<div class="header">
  <div class="img">
    <img src="/boty/{bota.photo}" alt={bota.name} style="width:100%" />
  </div>

  <div class="stats">
    <h1>Bota {bota.name}</h1>
    <br />

    <div>Výrobce: {bota.brand}</div>
    <div>Pohlaví: {bota.gender}</div>
    <div>Velikost: {bota.size}</div>
    <div>Sezóna: {bota.season}</div>
  </div>
</div>

<div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
    vehicula tellus. Morbi id tincidunt dui, non fringilla purus. Quisque
    gravida quis nisl non molestie. Curabitur imperdiet leo enim, viverra semper
    erat efficitur vel. Nullam pretium odio sit amet nisl ultricies, sed varius
    nibh iaculis. Praesent vestibulum augue eget risus sodales, at aliquam nibh
    luctus. Proin luctus mauris et ipsum blandit mollis. Nulla bibendum metus
    sapien, nec varius ligula eleifend at. Phasellus vestibulum nulla quis
    tincidunt pharetra.
  </p>
</div>
