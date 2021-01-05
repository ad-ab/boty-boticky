<script>
  export let photo, name, gender, size, season, price, brand, stock, id

  import Size from '$components/Size.svelte'
  import Season from '$components/Season.svelte'
  import Gender from '$components/Gender.svelte'

  import { format, fixUrl } from '$components/common.js'

  let seasonList = ['tenisky', 'letní', 'holinky', 'zimní']
  let genderList = ['Chlapecká', 'Dívčí']

  $: shouldFadeGender = (string) =>
    !gender.includes(string) && !gender.includes('Uni')
  $: shouldFadeSeason = (o) => !season.includes('celoroční') &&
    !season.includes(o)
  $: link = `/boty/${fixUrl(name)}`
</script>

<a href={link}>
  <div class="card">
    <div class="img">
      <img
        height="190"
        width="190"
        loading="auto"
        src="http://boty-boticky.cz/domains/vyprodej-dovoz/boty/boty-fotky/{photo}"
        alt={name} />
      <div class="brand">{brand}</div>
    </div>
    <div class="props">
      <div class="season">
        {#each seasonList as s (s)}
          <Season type={s} fade={shouldFadeSeason(s)} />
        {/each}
      </div>
      <div class="gender">
        {#each genderList as g (g)}
          <Gender type={g} fade={shouldFadeGender(g)} />
        {/each}
      </div>
    </div>

    <div class="container">
      <h2><b>{name}</b></h2>
      <div class="row">
        {#each size.split(',').map((x) => x.trim()) as s}
          <a href={`${link}?size=${s}`}>
            <Size strike={!stock[s]} size={s} />
          </a>
        {/each}
      </div>
    </div>

    <div class="footer">{format(price)}</div>
  </div>
</a>

<style>
  a {
    text-decoration: unset;
    color: unset;
  }

  .card {
    text-align: center;
    background-color:white;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50% 2.8rem 1fr 2.5rem;
    align-items: stretch;
    /* Add shadows to create the "card" effect */
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.3);
    /* transform: scale(1.005); */
    cursor: pointer;
  }

  .img {
    grid-row: 1;
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  img {
    max-width: 100%;
    height:auto;
    width:auto;
    max-height: 100%;
  }

  .brand {
    top: 0.5rem;
    right: 1rem;
    position: absolute;
    font-weight: 600;
    font-variant: small-caps;
    text-shadow: 2px 2px 4px darkgray;
  }

  .props {
    grid-row: 2;
    height: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
  }

  .gender {
    display: flex;
    flex-direction: row;
  }

  .season {
    height: 1.2rem;
    display: flex;
    flex-direction: row;
  }

  .container {
    grid-row: 3;
    background: #f8f8f8;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer {
    grid-row: 4;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    margin-bottom: 0;
    text-shadow: 1px 1px 4px darkgray;
  }

  @media only screen and (max-width: 674px) {
    .card {
      height: auto;
      grid-template-rows: auto auto auto 3rem;
    }

    h2 {
      margin-bottom: 1rem;
    }

    .props {
      padding: 1rem;
      justify-content: space-evenly;
    }

    .footer {
      padding: 1rem;
    }
  }
</style>
