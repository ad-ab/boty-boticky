<script>
  export let cart

  import { createForm } from 'svelte-forms-lib'
  import { string, object } from 'yup'
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
  })

  const { form, errors, handleChange, handleSubmit, handleReset } = createForm({
    initialValues: {
      name: '',
      familyName: '',
      email: '',
      adress: '',
      city: '',
      code: '',
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
            body: JSON.stringify({ ...values, cart }),
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

<h2>Objednávka</h2>

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

  <button type="submit" alt="submit">Odeslat</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form > div {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    /* justify-items: baseline; */
    /* align-items: baseline; */
    align-items: center;
    margin: 0.5rem;
  }
  form > div label {
    /* background-color: blue; */
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
