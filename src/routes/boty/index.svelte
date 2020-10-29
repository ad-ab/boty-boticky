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

  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected;
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

<select bind:value={selected} on:blur={(a) => console.log('zmena', a)}>
  {#each questions as question}
    <option value={question}>{question.text}</option>
  {/each}
</select>
{selected}

<div class="card-list">
  {#each boty as bota}
    <div class="obsah">
      <Bota {...bota} />
    </div>
    <!-- content here -->
  {/each}
</div>
