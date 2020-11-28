<script>
  export let type,
    fade = false,
    large = false

  // import Male from '$components/icons/Male.svelte'
  // import Female from '$components/icons/Female.svelte'

  // const mapping = {
  //   Chlapecké: Male,
  //   Dívčí: Female,
  // }

  const mapping = {
    Chlapecké: "male",
    Dívčí: "female",
  }
</script>

<div style="position:relative" class:large class:fade title={type}>
  <div class={mapping[type]} class:large/>
  <div class="background {mapping[type]}" class:large />
    
</div>

<style>
  div {
    height: 2rem;
    width: 2rem;
    background-repeat: no-repeat;
    position: absolute;
    background-size: contain;
  }

  div.large {
    height: 4rem;
    width: 4rem;
  }

  .background {
    opacity: 0.5;
    filter: blur(4px);
    -webkit-filter: blur(4px);
  }

  .fade {
    opacity: 0.1;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
</style>
