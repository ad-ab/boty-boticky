<script>
  import { createEventDispatcher } from 'svelte'

  export let size, strike

  const dispatch = createEventDispatcher()

  const onClick = () => { dispatch('selected', { size } )}
</script>

<div class="size-box" class:strike class:clickable={!strike} on:click={onClick}>{size}</div>

<style>
  .size-box {
    display: inline-block;
    margin: 2px;
    padding: 4px 6px;
    border: 1px solid darkgray;
    font-size: 0.8rem;
    /* border-radius:0.1rem; */
  }

  .strike {
    opacity: 0.2;
    text-decoration: line-through;
  }

  .clickable {
    user-select:none;
  }

  .clickable:hover {
    cursor:pointer;
    /* color: white;
    background:black; */

    /* color: white; */
    background:lightgray;
  }
</style>
