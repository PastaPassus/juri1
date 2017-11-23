<template>
  <div class="feedbackToAnswers">
    <transition name="fadeFeedback" move="out-in">

      <div class="feedbackYesNo" v-if="showFeedbackQuestions" key="feedbackYesNo">
        <p>War diese Antwort nützlich?</p>
        <div class="btn btn-sm feedbackBtnColor" @click="feedbackYes">Ja</div>
        <div class="btn btn-sm feedbackBtnColor" @click="feedbackNo">Nein</div>
      </div>

      <div v-if="showFeedbackQuestionsYes" key="showFeedbackQuestionsYes">
        <p class="feedbackResponse">Das freut uns, vielen Dank!</p>
      </div>

      <div v-if="showFeedbackQuestionsNo" key="showFeedbackQuestionsNo">
        <div>
          <p class="feedbackResponse">Schade, warum?</p>
          <textarea rows="4" cols="50" placeholder="Teilen Sie uns mit, was wir verbessern können." class="feedbackResponse feedbackTextarea" v-model="feedbackText"></textarea>
          <br>
          <div class="btn feedbackBtnSubmit" @click="feedbackSubmitted">Absenden</div>
        </div>
      </div>

      <div v-if="showFeedbackTextbox" key="showFeedbackTextbox">
          <p class="feedbackResponse">Vielen Dank, wir werden versuchen uns zu verbessern.</p>
      </div>

    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	data () {
		return {
      answerNumber: 100001,
			showFeedbackQuestions: true,
			showFeedbackQuestionsYes: false,
			showFeedbackQuestionsNo: false,
      showFeedbackTextbox: true,
      feedback: Boolean,
      feedbackText: ''
		}
	},
	methods: {
		feedbackYes () {
			this.showFeedbackQuestions = false
      this.showFeedbackQuestionsYes = true
      this.submitToDatabase()
		},
		feedbackNo () {
			this.showFeedbackQuestions = false
      this.showFeedbackQuestionsNo = true
		},
    feedbackSubmitted () {
      this.showFeedbackQuestionsNo = false
      this.showFeedbackTextbox = true
      this.submitToDatabase()
    },
    submitToDatabase () {
      const dataForSubmission = {
        answerNumber: this.answerNumber,
        feedback: this.feedback,
        feedbackText: this.feedbackText
      }
      axios.post('https://mietrechtsearch.firebaseio.com/feedback.json', dataForSubmission)
        .then(res => console.log(res))
        .catch(res => console.log(error))
    }
	}
}
</script>

<style>
	.feedbackToAnswers p {
		font-size: 0.9rem;
	}

  .feedbackToAnswers {
    color: rgba(50, 50, 50, 0.8);
  }

  .feedbackResponse {
    margin-top: 0.5rem;
  } 

  .feedbackTextarea {
    font-family: Esteban, serif;
    font-size: 0.9rem;
  }

  .feedbackBtnColor {
    color: rgba(50, 50, 50, 1);
  }

  .feedbackBtnSubmit {
    margin: 0.6rem auto;
    margin-right: 0.3rem;
    width: 8%;
    max-width: 150px;
    min-width: 100px;
    padding: 0.2rem 0.4rem;
    font-size: 0.9rem;
    color: rgba(50, 50, 50, 1)
  }

</style>