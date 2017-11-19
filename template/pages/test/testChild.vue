<template>
	<section>
		<h2>This is the test child</h2>
		<div v-for="(item, index) in 3">
			<button class="btn YesNo" :class="{ active2: toggle1[0] }" @click="changeBtn">Yes</button>
			<button class="btn YesNo" :class="{ active2: toggle1[0] }" @click="changeBtn">No</button>
		</div>

	</section>
</template>

<script>
  export default {
    data () {
      return {
        toggle1: [true]
      }
    },
    methods: {
      changeBtn () {
        this.toggle1.splice(0, 1, false)
        alert(this.toggle1)
      }
    }
  }
</script>

<style scoped>
  .active2 {
    background-color: blue;
  }
</style>