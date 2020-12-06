<script>
  import { createEventDispatcher } from 'svelte'

  export let value = []
  export let options = []

  const dispatch = createEventDispatcher()

  const toggle = (name) => {
    if (value.find((item) => item === name)) {
      value = value.filter((item) => item !== name)
    } else {
      value = [...value, name]
    }
    dispatch('change')
  }

  const isInList = (name, value) => value.includes(name)
</script>

{#each options as option}
  <button
    class="button {isInList(option, value) ? 'button-selected' : ''}"
    on:click={() => toggle(option)}>{option}
  </button>
{/each}

<style>
  button {
   margin:2px;
  }
</style>
