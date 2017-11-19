<template>
		<main class="container">
		<nuxt-child class="testClass" />
		<h1 class="testClass">This is the main test page</h1>

		<br>
		<div class="testClass"><nuxt-link to="/test/testChild">Child Page</nuxt-link></div>
		
		<h1 class="testClass">This is the main test page</h1>

		<br>
		<br>
		<ul>
			<transition-group name="slide" class="transitionAll_1s">
				<div key="whatever">
					<transition-group name="slide">
					<li v-for="(number, index) in someArray" class="testList" :key="number">{{number}}
						<button @click="removeItem(index)">click</button>
					<app-feedback></app-feedback>
					</li>
					</transition-group>
				</div>
			</transition-group>
		</ul>

	</main>
</template>

<style>
	.testClass {
		width: 100%;
	}

	.testList {
		width: 300px;
		border: 1px solid black;
	}
</style>

<script>
import Feedback from '../components/Feedback.vue'

	export default {
		data () {
			return {
				someArray: [1, 2, 3, 4, 5]
			}
		},
		components: {
  	'app-feedback': Feedback
  },
  methods: {
  	removeItem (index) {
  		this.someArray.splice(index, 1)
  	}
  }
	}
</script>