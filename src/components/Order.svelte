<script>
  export let cart
  export let shipping
  export let totalShipping
  export let options

  import { createForm } from 'svelte-forms-lib'
  import { string, object, bool } from 'yup'
  import cartStore from '$components/cart.js'

  let isSending = false

  const schema = object().shape({
    email: string()
      .required('Email je povinný')
      .email('Musíte zadat validní email'),
    name: string()
      .min(2, 'Jméno musí být alespoň 2 znaky dlouhé')
      .required('Jméno je povinné'),
    familyName: string()
      .min(2, 'Přijmení musí být alespoň 2 znaky dlouhé')
      .required('Přijmení je povinné'),
    adress: string().required('Adresa je povinná'),
    city: string().required('Město je povinná'),
    code: string()
      .test(
        'len',
        'PSČ musí obsahovat 5 číslic',
        (val) => val.replace(' ', '').length === 5
      )
      .required('PSČ je povinné'),
    phone: string().required('Telefonní číslo je povinné'),
    note: string(),
    rules: string()
      .matches(/true/, 'Musite souhlasit s podmínkami')
      .required('Musite souhlasit s podmínkami'),
    gdpr: string()
      .matches(/true/, 'Musíte souhlasit s GDPR')
      .required('Musíte souhlasit s GDPR'),
  })

  const { form, errors, handleChange, handleSubmit, handleReset } = createForm({
    initialValues: {
      name: '',
      familyName: '',
      email: '',
      adress: '',
      city: '',
      code: '',
      phone: '',
      note: '',
      gdpr: 'false',
      rules: 'false',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      isSending = true
      try {
        const result = await fetch(
          'https://boty-boticky-api.azurewebsites.net/api/BotyBotickyApi?code=PKGYoWMZ6uiEgqNCZQkwpPnlQs1hfIIF0WUqGPnrXDbSXSDkLSoinQ==',
          {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              ...values,
              cart: cart.map((x) => ({
                id: x.id,
                name: x.name,
                size: x.size,
                price: x.price,
                stock: x.stock,
              })),
              shipping: {
                selected: shipping,
                totalShipping,
              },
            }),
          }
        )
        if (!result.ok) {
          console.error(result)
          throw new Error('Unable to resolve request')
        }
        alert('Objednávka odeslána')
        handleReset()
        cartStore.reset()
      } catch (e) {
        alert('Nastal problém s odesíláním')
      } finally {
        isSending = false
      }
    },
  })
</script>

<form on:submit={handleSubmit}>
  <div>
    <label for="name">Jméno</label>
    <input
      id="name"
      alt="jméno"
      name="name"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.name} />
    <small>{$errors.name}</small>
  </div>

  <div>
    <label for="familyName">Přijmení</label>
    <input
      id="familyName"
      alt="přijmení"
      name="familyName"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.familyName} />
    <small>{$errors.familyName}</small>
  </div>

  <div>
    <label for="email">Email</label>
    <input
      id="email"
      alt="email"
      name="email"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.email} />
    <small>{$errors.email}</small>
  </div>

  <div>
    <label for="familyName">Adresa</label>
    <input
      id="adress"
      alt="adresa"
      name="adress"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.adress} />
    <small>{$errors.adress}</small>
  </div>

  <div>
    <label for="city">Město</label>
    <input
      id="city"
      alt="město"
      name="city"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.city} />
    <small>{$errors.city}</small>
  </div>

  <div>
    <label for="code">PSČ</label>
    <input
      id="code"
      alt="psč"
      name="code"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.code} />
    <small>{$errors.code}</small>
  </div>
  <div>
    <label for="phone">Telefonní číslo</label>
    <input
      id="phone"
      alt="phone"
      name="phone"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.phone} />
    <small>{$errors.phone}</small>
  </div>
  <div>
    <label for="note">Poznámka</label>
    <input
      id="note"
      alt="note"
      name="note"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.note} />
    <small>{$errors.note}</small>
  </div>

  {#if shipping && shipping.includes('Zásilkovna')}
    <div>
      <label> Vyber výdejnu </label>
      <select
        id="vydejna"
        name="vydejna"
        alt="výdejna"
        style="max-width:212px; padding:0.3rem;">
        {#each options as x}
          <option value={x.id} key={x.id}>{x.name}</option>
        {/each}
      </select>
    </div>
  {/if}

  <div>
    <input
      type="checkbox"
      id="rules"
      name="rules"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.rules} />
    <label for="rules"><a href= "https://www.boty-boticky.cz/obchod"> Souhlas s obchodními podmínkami</a></label>
    <small>{$errors.rules}</small>
  </div>
  <div>
    <input
      type="checkbox"
      id="gdpr"
      name="gdpr"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.gdpr} />
    <label for="gdpr"><a href= "https://www.boty-boticky.cz/gdpr">Souhlas se zpracováním osobních údajů</a></label>
    <small>{$errors.gdpr}</small>
  </div>

  <div class="right">
    <div />
    <button class="dark" type="submit" alt="submit">Odeslat</button>
  </div>
</form>

<style>

  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 0.3rem;
  }

  .right {
    grid-column: 2;
  }

  .right > button {
    width: auto;
  }

  form > div {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin: 0.5rem;
  }
  form > div label {
    text-align: right;
    margin-right: 16px;
  }
  form > div input {
    width: 200px;
  }

  form > div small {
    display: block;
    grid-column: 2;
    text-align: left;
    color: red;
    padding: 0.2rem;
  }
</style>
