<script context="module">
  export const prerender = true;
  export async function preload(page) {
    const { slug } = page.params;

    const res = await this.fetch(`/boty/boty.csv`);
    const botyFile = await res.text();

    const boty = botyFile
      .split(/\r?\n/)
      .filter((x) => x.trim())
      .map((x) => x.split(","))
      .map(([photo, name, gender, size, season, price, brand]) => ({
        photo,
        name,
        gender,
        size,
        season,
        price,
        brand,
      }));
    boty.shift();

    return { boty };
  }
</script>

<script>
  export let boty;

  import Bota from "$components/Bota.svelte";
</script>

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .obsah {
    padding: 4px;
    flex: 1 0 auto;
  }
</style>

<h1>Boty</h1>

<div class="card-list">
  {#each boty as bota}
    <div class="obsah">
      <Bota {...bota} />
    </div>
    <!-- content here -->
  {/each}
</div>
