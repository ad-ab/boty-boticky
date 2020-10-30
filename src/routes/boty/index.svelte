<script context="module">
  import { boty as botyStore } from "$components/data.js";

  export const prerender = true;
  export async function preload(page) {
    const getData = () =>
      new Promise((resolve) => {
        botyStore.subscribe((v) => resolve(v));
      });

    let result = page.host && (await getData());
    if (!result || result.length === 0) result = await botyStore.load(this);

    const { boty } = result;

    return { boty };
  }
</script>

<script>
  import Bota from "$components/Bota.svelte";

  export let boty;

  if (boty) botyStore.set({ boty });

  // result of all option filters
  // let filterResults = { boty };

  // applies all the filters from filterResults over each other
  // const applyFilters = (filterResults) => (product) =>
  //   Object.entries(filterResults)
  //     .map(([key, value]) => !value || product[key] === value)
  //     .reduce((acc, cur) => acc && cur, true);
</script>

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .obsah {
    padding: 4px;
  }
</style>

<h1>Boty</h1>

<!-- <div>
  {#each Object.keys(options) as optionName}
    <select bind:value={filterResults[optionName]}>
      <option value="">žádné</option>
      {#each options[optionName] as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  {/each}
</div> -->

<hr />

<div class="card-list">
  <!-- {#each boty.filter(applyFilters(filterResults)) as bota} -->
  {#each boty || $botyStore as bota}
    <div class="obsah">
      <Bota width="220px" height="400px" {...bota} />
    </div>
  {/each}

  {$botyStore.length}
</div>
