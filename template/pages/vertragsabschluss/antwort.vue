<template>
      <app-answer :answerObj="answerObj"></app-answer>
</template>

<script>
import Answer from '~/components/Answer.vue'

export default {
  props: ['answerObj'],
  components: {
    'app-answer': Answer
  }
}
</script>
