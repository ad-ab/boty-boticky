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

    const getColumnValues = (columnName) =>
      Object.keys(
        boty.reduce((acc, cur) => {
          const columnValue = cur[columnName];
          if (!acc[columnValue]) acc[columnValue] = true;
          return acc;
        }, [])
      );

    return {
      boty,
      genderOptions: getColumnValues("gender"),
      sizeOptions: getColumnValues("size"),
      seasonOptions: getColumnValues("season"),
      brandOptions: getColumnValues("brand"),
    };
  }
</script>

<script>
  export let boty;
  export let genderOptions;
  export let sizeOptions;
  export let seasonOptions;
  export let brandOptions;

  import Bota from "$components/Bota.svelte";

  let selectedGender;
  let selectedSize;
  let selectedSeason;
  let selectedBrand;
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

<div>
  <select bind:value={selectedGender} on:blur={(a) => console.log('zmena', a)}>
    <option value="">žádné</option>
    {#each genderOptions as gender}
      <option value={gender}>{gender}</option>
    {/each}
  </select>
   <select bind:value={selectedSize} on:blur={(a) => console.log('zmena', a)}>
    <option value="">žádné</option>
    {#each sizeOptions as size}
      <option value={size}>{size}</option>
    {/each}
  </select>
 <select bind:value={selectedSeason} on:blur={(a) => console.log('zmena', a)}>
    <option value="">žádné</option>
    {#each seasonOptions as season}
      <option value={season}>{season}</option>
    {/each}
  </select>
  <select bind:value={selectedBrand} on:blur={(a) => console.log('zmena', a)}>
    <option value="">žádné</option>
    {#each brandOptions as brand}
      <option value={brand}>{brand}</option>
    {/each}
  </select>
</div>

<div class="card-list">
  {#each boty
    .filter((x) => !selectedGender || x.gender === selectedGender)
    .filter((x) => !selectedSize || x.size === selectedSize)
    .filter((x) => !selectedSeason || x.season === selectedSeason)
    .filter((x) => !selectedBrand || x.brand === selectedBrand) as bota}
    <div class="obsah">
      <Bota width="200px" height="380px" {...bota} />
    </div>
    <!-- content here -->
  {/each}
</div>
