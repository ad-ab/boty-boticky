<script context="module">
  // export const prerender = true;
  export async function preload() {
    const res = await this.fetch(`static/blog.json`);
    const blogs = await res.json();

    return { blogs };
  }
</script>

<script>
  export let blogs;
</script>

<h1>Blogs</h1>

<nav>
  {#each blogs as blog}
    <a href="/blog/{blog.id}">{blog.name}</a>
    &nbsp;
  {/each}
</nav>
