<script>
  export let src, alt, link
</script>

<div />

<a href={link}>
  <div class="wrapper">
    <img {src} {alt} />
    <span class="text">{alt}</span>
    <span class="text blur">{alt}</span>
  </div>
</a>

<style>
  a {
    text-decoration: unset;
    color: unset;
    cursor:pointer;
  }

  img {
    opacity: 0.7;
    transition: all 0.2s;
    max-width:250px;
  }

  .text {
    text-transform: capitalize;
    position: absolute;
    bottom: 2.5rem;
    left:0;
    right: 0;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    -webkit-text-stroke: 1px black;
    color: white;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    transition: all 0.2s;
  }

  .blur {
    text-shadow: 0 0 2rem white;
    transition: all 0.2s;
  }

  .wrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0.3rem;
    padding: 0.2rem;
    border: 2px solid white;
    box-shadow: white 0 0 0.1rem;
    transition: all 0.2s;
  }

  .wrapper:hover { 
    box-shadow: white 0 0 0.6rem;
  }

  .wrapper:hover img { 
    opacity: 0.9;
  }

  .wrapper:hover .blur { 
    text-shadow: 0 0 1rem white;
  }
</style>
