<template>
      <section class="text answers">

        <div class="giveAnswersNumbers">

          <div class=" multiChoiceAnswerClass" v-if="showMultiChoiceAnswer">
            <h3>Antwort</h3>
            <div>
              <p>{{answerObj.subAnswers[selectedAnswers.resultedOutcome]}}</p>
            </div>
          </div>

          <h3>{{answerObj.mainQuestion}}</h3>
          <div v-html="answerObj.answers[0]" class="htmlInjected"></div>

          <div class="question">
            <div v-if="answerObj.yesNo" v-for="(question, index) in answerObj.subQuestions" class="questionsDiv clearflix">
              <p>{{question}}</p>

            	<div class="buttons">
            		<button class="btn YesNo" type="button" @click="selectBtn(Number(index), true)" :class="{ active: checkForActiveClass(Number(index), true) }">JA</button>
  							<button class="btn YesNo" type="button" @click="selectBtn(Number(index), false)" :class="{ active: !checkForActiveClass(Number(index), false)}">NEIN</button>
  						</div>
            </div>
          </div>

        </div>
      </section>
</template>

<script>
export default {
  props: ['answerObj'],
  data () {
    return {
      selectedAnswers: {
        topicId: this.answerObj.topicId,
        selectedAnswersBtn: [],
        resultedOutcome: Number
      },
      showMultiChoiceAnswer: false,
      testStatement: false
    }
  },
  methods: {
    // This first fills the answer array with placeholders to avoid the issue of having
    // several btn active when only one was clicked.
    // Stores answer in answer array to evaluate and add active class
    selectBtn (index, answer) {
      let answersArray = this.selectedAnswers.selectedAnswersBtn
      // add placeholders when run first
      if (this.selectedAnswers.selectedAnswersBtn.length === 0) {
        this.fillArrayWithPlaceholders(answersArray, this.answerObj.subQuestions.length)
      }
      // add answer to answer array
      answersArray.splice(index, 1, answer)

      // when all questions answered this find the correct outcome
      // !this.checkWhetherAllQuestionsWereAnswered(answersArray)
      if (!this.checkWhetherAllQuestionsWereAnswered(answersArray)) {
        let answer = this.findAnswer(answersArray, this.answerObj.subQuestions.length)
        this.selectedAnswers.resultedOutcome = answer
        this.showMultiChoiceAnswer = true
      }
    },

    // This function is mainly to make sure that no btn are active when loading the page
    // and the selectedAnswersBtn array is still empty, i.e. all values undefined
    checkForActiveClass (index, btnType) {
      let ActiveClassStatus = this.selectedAnswers.selectedAnswersBtn[index]
      if (ActiveClassStatus === undefined) {
        if (btnType === true) {
          return false
        } else { return true }
      } else { return this.selectedAnswers.selectedAnswersBtn[index] }
    },
    checkWhetherAllQuestionsWereAnswered (array) {
      return array.some(answer => answer === undefined)
    },
    fillArrayWithPlaceholders (array, numberOfQuestions) {
      for (var i = 0; i < numberOfQuestions; i++) {
        array.push(undefined)
      }
    },
    findAnswer (array, numberOfQuestions) {
      const numberOfAnswers = Math.pow(2, numberOfQuestions)
      let answer = numberOfAnswers
      for (var i = 0; i < numberOfQuestions; i++) {
        if (!array[i]) {
          answer -= (numberOfAnswers) / Math.pow(2, i + 1)
        }
      }
      return (answer - 1) // this is the postion in the array
      // return 'Position in the answer array is ' + (answer - 1) + ' (answer: ' + answer + ')'
    }
  }
}
</script>

<style scoped>

.questionsDiv {
  height: 10%; 
  width: 100%;
  margin-bottom: 6%;
} 

.question p {
  width: 100%; 
  text-align: left;
  padding-top: 1.5%;
}

.buttons {
  text-align: center;
  height: 100%;
  width: 100%;
}

.YesNo {
  width: 20%;
  min-width: 100px;
  margin: 1%;
}

.submitDisabled { /* This is to make the submit button look disabled */
  cursor: auto;
  opacity: 0.25;
  background: #fff;
  box-shadow: 0 0 0;
}



/*-------------------- 767px break --------------------*/

@media only screen and (min-width: 767px),
     only screen and (min-width: 767px) and (orientation: landscape) {  
  
  .questionsDiv {
    height: 10%;
    margin-bottom: 2%;
    vertical-align: top;
  } 

  .questionsDiv p {
    width: 60%;
    display: inline-block;
  }

  .buttons {
    display: inline-block;
    width: 39%;
  } 

  .YesNo {
    width: 45%;
      overflow: hidden;
  }
}

/*---------------------- 1007px break ------------------------*/

@media only screen and (min-width: 1032px),
     only screen and (min-width: 1032px) and (orientation: landscape) {

  .buttons {
    display: inline-block;
    width: 28%;
  }
  
  .questionsDiv p {
    width: 70%;
    display: inline-block;
  } 
}
</style>