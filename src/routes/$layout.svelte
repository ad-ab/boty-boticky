<script context="module">
  export const prerender = true;
</script>

<script>
  import Nav from "$components/Nav.svelte";
  export let segment;

  console.log(`Loaded on ${segment || "home"} page`);
</script>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>

<main>
  <Nav />
  <slot />
</main>
