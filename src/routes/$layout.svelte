<script context="module">
  export const prerender = true;
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

.
<main>
  <nav>
    <a href="/">Hlavní</a>
    <a href="/kontakt">Kontakt</a>
    <a href="/boty">Boty</a>
  </nav>

  <slot />
</main>
