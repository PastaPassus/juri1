<template>
	<main class="container">
		<section class="title">
      <h1>{{importData.title}}</h1>
    </section>

    <section class="text flex-center">

				<p>Füllen Sie folgendes Formular aus um einen passenden Brief zu erstellen:</p>

				<div class="formWrapper">
					<h3>Text</h3>

          <form>
            <div class="form-group" v-for="(field, index) in inputFields" :key="index">
              <label :for="field.name">{{field.name}}</label>
              <input  :type="field.type" 
                      class="form-control" 
                      :id="field.name" 
                      :placeholder="field.placeholder" 
                      :ref="field.reference" 
                      > 
                      <!-- Bootstrap CSS classes like form-control are in the default.vue file -->
                      <!-- v-model="outputData[field.reference]" -->
            </div>
<!--             <div class="form-group">
              <p>Bootstraps example</p>
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div> -->

            <div tag="button" class="btn" type="submit" @click.prevent="submitContent">Absenden</div>
          </form>

				</div>
		</section>  

	</main>
</template>

<script>

export default {
  data () {
    return {
      importData: {
        title: 'Kündigung erstellen'
      },
      inputFields: [
        { name: 'Vorname', type: 'text', placeholder: 'Vorname', reference: 'firstname' },
        { name: 'Name', type: 'text', placeholder: 'Name', reference: 'name' },
        { name: 'Email', type: 'email', placeholder: 'Email', reference: 'email' }
      ],
      outputData: {}
    }
  },
  methods: {
    submitContent () {
      alert(this.outputData)
      console.log(this.outputData)
    }
  }
}
</script>

<style>
/*Bootstrap CSS classes like form-control are in the default.vue file*/

  .formWrapper {
    flex: 1 1 100%;
  }



</style>
