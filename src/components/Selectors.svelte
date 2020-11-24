<script>
  import { createEventDispatcher } from 'svelte'
  import BrandSelector from '$components/BrandSelector.svelte'
  import GenderSelector from '$components/GenderSelector.svelte'
  import SizeSelector from '$components/SizeSelector.svelte'
  import SeasonSelector from '$components/SeasonSelector.svelte'
  import { extractColumnValues } from '$components/common.js'

  export let filterResults, products

  const dispatch = createEventDispatcher()

  const filtersChanged = () => dispatch('change')

  const splitAndDistinct = (array) =>
    array
      .reduce(
        (acc, cur) => [...acc, ...cur.split(/[,/]/).map((x) => x.trim())],
        []
      )
      .filter((value, index, self) => self.indexOf(value) === index)

  //  Expand this idea to create a nicer form of creating/adding a selector component
  //  const selectors = [
  //    { name: 'brand', component: BrandSelector },
  //    { name: 'gender', component: GenderSelector },
  //    { name: 'season', component: SeasonSelector, splitContent: true },
  //    { name: 'size', component: SizeSelector, splitContent: true },
  //  ]
</script>

<div class="row">
  <div>
    <BrandSelector
      bind:value={filterResults['brand']}
      on:change={filtersChanged}
      options={extractColumnValues(products)('brand')} />
  </div>
  <div>
    <GenderSelector
      bind:value={filterResults['gender']}
      on:change={filtersChanged}
      options={extractColumnValues(products)('gender')} />
  </div>
  <div>
    <SizeSelector
      bind:value={filterResults['size']}
      on:change={filtersChanged}
      options={splitAndDistinct(extractColumnValues(products)('size'))} />
  </div>
  <div>
    <SeasonSelector
      bind:value={filterResults['season']}
      on:change={filtersChanged}
      options={splitAndDistinct(extractColumnValues(products)('season'))} />
  </div>
</div>

<style>
  .row {
    margin-left: auto;
    margin-right: auto;
    max-width: 1252px;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 674px) {
    .row {
      flex-direction: column;
    }

    .row > div {
      text-align: center;;
      margin-bottom:0.5rem;
    }

    .row > div:last-child {
      margin-bottom: 0;
    }
  }
</style>
