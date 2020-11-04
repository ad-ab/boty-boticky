<script>
    export let size, strike
</script>

<div class="size-box" class:strike={strike}>{size}</div>

<style>
  .size-box{
    display:inline-block;
    margin: 2px;
    padding: 4px;
    border: 1px solid lightgray;
    font-size:0.8rem;
    border-radius:0.5rem;
  }

  .strike {
    opacity:0.2;
    text-decoration: line-through;
  }
</style>