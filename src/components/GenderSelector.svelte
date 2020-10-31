<script>
  export let value = [];
  export let options = [];

  const toggle = (name) => {
    if (value.find((item) => item === name)) {
      // remove item
      value = value.filter((item) => item !== name);
    } else {
      // add item
      value = [...value, name];
    }
  };

  const isInList = (name, value) => value.includes(name);
</script>

<div>
  <!-- <select bind:value>
    <option value="">žádné</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select> -->

  {#each options as option}
    <button
      class="button {isInList(option, value) ? 'button-orange' : ''}"
      on:click={() => toggle(option)}>{option}
    </button>
  {/each}
</div>
