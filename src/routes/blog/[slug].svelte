<script context="module">
  export const prerender = true;
  export async function preload(page) {
    const { slug } = page.params;

    const res = await this.fetch(`/static/blog.json`);
    const blogs = await res.json();

    const blog = blogs.find((x) => x.id === slug);

    return { blog };
  }
</script>

<script>
  export let blog;
</script>

<h2>{blog.name}</h2>

<p>{blog.description}</p>
