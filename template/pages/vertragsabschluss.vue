<template>
	<div>
		<app-questions :importData="importData"></app-questions>
	</div>

</template>

<script>
import Questions from '~/components/Questions.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    'app-questions': Questions
  },
  computed: {
    importData () {
      return this.$store.state.vertragsabschluss
    }
  }
}
</script>
