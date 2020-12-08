<script>
  import { createEventDispatcher } from 'svelte'

  export let size,
    large,
    strike,
    selectedSize = undefined

  const dispatch = createEventDispatcher()

  const onClick = () => {
    dispatch('click', { size })
  }
</script>

<div
  class="size-box"
  class:strike
  class:large
  class:clickable={!strike}
  class:selected={selectedSize && !strike}
  on:click={onClick}>
  {size}
</div>

<style>
  .size-box {
    display: inline-block;
    margin: 2px;
    padding: 4px 6px;
    border: 1px solid darkgray;
    font-size: 0.8rem;
    /* border-radius:0.1rem; */
  }

  .large {
    padding: 8px 12px;
    font-size: 1rem;
  }

  .strike {
    /* opacity: 0.4; */
    text-decoration: line-through;
  }

  .clickable {
    user-select: none;
  }

  .selected,
  .clickable:hover {
    cursor: pointer;
    /* color: white;
    background:black; */

    /* color: white; */
    background: lightgray;
  }
</style>
