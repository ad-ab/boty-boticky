<script>
  export let type,
    fade = false,
    large = false
</script>

<div style="position:relative" class:large>
  <div
    class="background"
    class:large
    class:fall={type === 'podzim'}
    class:summer={type === 'léto'}
    class:spring={type === 'jaro'}
    class:winter={type === 'zima'}
    class:fade />
  <div
    title={type}
    class:large
    class:fall={type === 'podzim'}
    class:summer={type === 'léto'}
    class:spring={type === 'jaro'}
    class:winter={type === 'zima'}
    class:fade />
</div>

<style>
  div {
    height: 2rem;
    width: 2rem;
    min-height: 1rem;
    min-width: 1rem;
    background-repeat: no-repeat;
    position: absolute;

    background-size: contain;
  }

  div.large {
    height: 4rem;
    width: 4rem;
  }

  .background {
    opacity: 1;
    filter: blur(4px);
    -webkit-filter: blur(4px);
  }

  .fade {
    opacity: 0.1;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  .fall {
    background-image: url('/seasons/fall_small.png');
  }

  .spring {
    background-image: url('/seasons/spring_small.png');
  }

  .summer {
    background-image: url('/seasons/summer_small.png');
  }

  .winter {
    background-image: url('/seasons/winter_small.png');
  }

  .fall.large {
    background-image: url('/seasons/fall.png');
  }

  .spring.large {
    background-image: url('/seasons/spring.png');
  }

  .summer.large {
    background-image: url('/seasons/summer.png');
  }

  .winter.large {
    background-image: url('/seasons/winter.png');
  }
</style>
