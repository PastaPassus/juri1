<template>
	<main class="container">

    <nuxt-child :answerObj="answerObj" class="answerComponent order_2" />

    <section class="title">
      <h1>{{importData.title}}</h1>
    </section>  

		<section class="text flex-center">
			<p>Wählen Sie ein Thema aus zu dem Sie mehr erfahren möchten:</p>
			
			<div class="questionsGroup1" v-for="(subtopic, index1) in importData.subtopics">
				<h3>{{subtopic.subtopicTitle}}</h3>
				
					<nuxt-link
            tag="button"
            class="questionLi btn btnPos"
            type="button"
						v-for="(question, index2) in subtopic.questions"
            :key="index2"
						@click.native='selectAnswer(Number(index1), Number(index2))'
            :to="'/' + importData.topic + '/antwort'"
          >{{question.mainQuestion}}
          </nuxt-link>

			</div>	
		</section>

    <section class="whiteSpace" :class="{order_1: changeOrder}"></section>
      
		<section class="text answers">
			<transition-group class="giveAnswersNumbers" v-for="(subtopic, index) in importData.subtopics" :key="subtopic" name="slide" tag="div">
				<div v-for="(question, index0) in subtopic.questions" :key="question" >
					<h3>{{question.mainQuestion}}</h3>
					<div  v-for="answer in question.answers">
						<div v-html="answer" class="htmlInjected "></div>	
						<app-feedback></app-feedback>
					</div>
				</div>
			</transition-group>
		</section>

		<section class="text answers">
			<p>test section</p>
			<transition-group name="slide">
				<div key="text1">
					<p>Some text</p>
					<app-feedback></app-feedback>
				</div>
				<div key="text2">
					<p>Some more text</p>
					<app-feedback></app-feedback>
				</div>
				<div key="text3">
					<p>Some more text</p>
					<app-feedback></app-feedback>
				</div>
				<div key="text4">
					<p>Some more text</p>
					<app-feedback></app-feedback>
				</div>
				<div key="text5">
					<p>Some more text</p>
					<app-feedback></app-feedback>
				</div>
			</transition-group>
		</section>

		<section class="ads">
			<h4>Werbung</h4>
			<img src="../assets/img/ads.png">
		</section>

<!-- 		<section class="returnBox LPreturn">
			<button class="btn returnBtn" type="button">Zurück</button>
		</section> -->

	</main>
</template>

<script>
import Feedback from '../components/Feedback.vue'

export default {
  props: ['importData'],
  components: {
  	'app-feedback': Feedback
  },
  data () {
    return {
      answerObj: Object,
      changeOrder: false
    }
  },
  methods: {
    // This makes the questions buttons disappear and creates the props that is passed to answer.vue
    selectAnswer (index1, index2) {
      this.createAnswerString(index1, index2)
      this.changeOrder = true
    },
    // This creates a string that includes the path to the question object with the answers
    createAnswerString (index1, index2) {
      this.answerObj = this.importData.subtopics[index1].questions[index2]
    },
    usesTheseClassesForAnswerSection (changeOrder, sectionType) {
      if (changeOrder) {

      }
    }
  },
  watch: {
    currentPath () {
      if (!this.$route.name.includes('antwort')) {
        this.changeOrder = false
      }
    }
  }
}
</script>

<style>

section { 
	flex: 1 1 100%;
}


h3 { /* This is for all headlines in the main boxes (text & questions) */
	font-size: 1.3em;
	padding-top: 4%;
	padding-bottom: 2%;
	color: rgba(35, 65, 110,1);
}

.text p {
	text-align: justify;
}


.ads h4 {
	font-size: 0.85em;
	margin-bottom: 1%;
	color: rgba(165,165,165,1);
	padding-top: 2%;
}

.ads img {
	padding-bottom: 3%;
}

.returnBtn {
	width: 5%;
	min-width: 150px;
	padding: 1em 1.6em;
	position: initial;
  	z-index: 10;
  	top: 93%;
  	left: 3%;
}

main .returnBox {
	text-align: left;
	flex: 1 1 100%;
	order: 10;
	min-height: 50px;
}


/*---------------------------- Topic questions -------------------------------*/


.questionsGroup1 {
	flex: 1 1 100%;
  max-width: 525px;
} 

.whiteSpace {
  width: 100%;
  height: 300px;
}

.questionLi {
   /* Font */
/*	font-family: "Esteban", serif;
  text-transform: none;
  font-size: 0.9em;
  font-weight: 500;
  letter-spacing: 0.05em;
	text-decoration: none;	*/

  /* Dimensions */
  width: 100%;
  max-width: 525px;

	/* Design */ 
	/*background: rgba(165,165,165,0.15) none repeat scroll 0 0; */
	/*border: 1px solid rgba(165,165,165);*/
	/*box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);*/

/*	background: rgba(255,255,255,0.8) none repeat scroll 0 0; 

	border-bottom: 1px solid rgba(165,165,165, 0.8);
	border-top: 1px solid rgba(165,165,165, 0.8);
	border-right: 0px solid rgba(165,165,165, 0.8);
  color: rgb(0,0,0);
	cursor: pointer;
	transition: background-color 0.1s ease-out 0s; 
	opacity: 0.7;
	margin-top: -1px;*/

	/* Layout */
	text-align: center;
  display: block;
  padding: 0.6em 1.2em;
    
}

.questionLi:hover:enabled {
	box-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.3);
	opacity: 1;
	color: rgb(50,50,50);
	transition: all 0.1s;
} 

.questionLi:focus {
	outline: none;

	background: rgba(35, 65, 110,0.7);
	color: white;
}

main .space {
	height: 300px;
}

main .answers {
	flex: 1 1 100%;
}




/*-------------------- 767px break --------------------*/

@media only screen and (min-width: 767px),
	   only screen and (min-width: 767px) and (orientation: landscape) {


	/*---------------  Main ---------------*/


	main .flex-center { 
/*		flex: 2 1 350px;*/
		order: 0;
	}

  .whiteSpace {
  height: 450px;
  }

	main .ads {
		flex: 1 1 158px;
		text-align: left;
		order: 5;
	}

	.ads h4 {
		font-size: 1em;
	}

	h3 {
		padding-top: 2%;
		padding-bottom: 1%;
	}


	/*------- return button ---------*/
	.returnBtn {
		font-size: 0.5em;
		padding: 1em 1.6em;
	}

	.returnBox {
			margin-top: 0;
			text-align: left;
	}
}

/*---------------------- 1007px break ------------------------*/

@media only screen and (min-width: 1032px),
	   only screen and (min-width: 1032px) and (orientation: landscape) {


	/*------ header ----*/

	header {
		/*flex-direction: row;
		justify-content: space-between;
		transition: all 1s;*/
	}

	/*---------------  Main ---------------*/

	main section { 
		/*margin: auto;*/
		/*width: 790px;*/
		text-align: left;
	}

  .whiteSpace {
    height: 580px;
  }

	.ads {
		text-align: right;
	}

}
</style>


<style>
/*-------------------- Global CSS --------------------*/

/*This is to format the answers where html was injected (doesn't work with scoped CSS)*/
.htmlInjected li {
	font-size: 1em;
	line-height: 1.5;
	padding-left: 10px;
}

.htmlInjected ul {
	list-style-type: disc;
	list-style-position: outside;
	margin-left: 40px;
}	

.htmlInjected ul, .htmlInjected p {
	margin-bottom: 10px;
}

/*-------------------- 767px break --------------------*/

@media only screen and (min-width: 767px),
	   only screen and (min-width: 767px) and (orientation: landscape) {

	.htmlInjected li {
		font-size: 0.9em;
	}

	.htmlInjected ul, .htmlInjected p {
		margin-bottom: 10px;
	}
}

</style>
