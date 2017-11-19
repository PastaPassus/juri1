
<template>
  <div>
    
    <nuxt/>
    <main class='container'>

      <section class='intro'>
        <h1>{{intro.title}}</h1>
      </section>

      <section class='searchSection'>
        <div class="searchIntroText">
          <h2>{{intro.subtitle}}</h2>
        </div>
        <app-search class="searchBar"></app-search>
      </section>

      <section class="topics">
        <div class='topicsCenterText topicsSubtopicGroup' v-for='section in menu'>
          <!--'Anwalt finden' button einbauen
          -->
          <div v-for='(topic, index) in section' class="topics2ndSubtopicGroup">
            <label>{{topic.title}} </label>
              <nuxt-link  active-class='active' 
                          exact 
                          tag='button' 
                          class='btn btnPos topicBtn' 
                          :key='index' 
                          :to='item.route' 
                          v-for='(item, key) in topic.buttons'
                          >{{item.name}}</nuxt-link>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>


<script>
import axios from '~/plugins/axios'
import Search from '~/components/Search.vue'

export default {
  components: {
    "app-search": Search
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'jurifo - Schweizer Mietrecht'
    }
  },
  data () {
    return {
      intro: {
        title: 'Individuelle Auskunft zum Schweizer Mietrecht',
        subtitle: 'Schnelle, einfach und kostenlose Rechtsauskunft. Zu welchem Thema haben Sie eine Frage?'
      },
      menu: {
        section1: {
          end: {
            title: 'Ende der Miete',
            buttons: [
              {name: 'Kündigung', route: '/'},
              {name: 'Abgabeprotokoll', route: '/'}
            ]
          },
          during: {
            title: 'Während der Miete',
            buttons: [
              {name: 'Beginn der Miete', route: '/'},
              {name: 'Schäden', route: '/'},
              {name: 'Lärm', route: '/'}
            ]
          }
        },
        section2: {
          before: {
            title: 'Vor Mietbeginn',
            buttons: [
              {name: 'Wohnungssuche', route: '/wohnungssuche'},
              {name: 'Vertragsabschluss und -Gültigkeit', route: '/vertragsabschluss'}
            ]
          }
        },
        forms: {
          formTopic: {
            title: 'Briefe erstellen',
            buttons: [
              {name: 'Kündigung', route: '/formulare/brief'},
              {name: 'Abgabeprotokoll', route: '/'}
            ]
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 1.9rem;
    font-family: "Arvo", sans-serif;
  }

  h2 {
    font-size: 1.1em;
  }

  section { 
    flex: 1 1 250px;
    margin-bottom: 2%;
  }

  main .intro {
    flex-basis:  100%;
  }

  main p {
    font-size: 0.9em;
  }

  .intro h1 {
    padding-bottom: 2.5%;
  }

  .searchSection {
    /*all sections are flex, see above*/
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    flex-basis: 100%;
    overflow: none;
  }

  .searchIntroText {
    padding-bottom: 1rem;
  }

  .searchIntroText {
    display: inline;
  }  

  .topicsCenterText {
    text-align: center;
  }

  .topics {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  }

  .topicsSubtopicGroup {
    width: 280px;
  }

  .forms {
    padding: 0;
    text-align: center;
  }

  label {
    display: inline-block;
    margin-top: 4%;
    margin-bottom: 2%;
    font-size: 1.1em;
    border-bottom: 1px solid rgba(165,165,165,0.4);
    color: rgb(35, 65, 110);
    width: 100%;
  }

  .topicBtn {
    display: block;
  }


  /* --------------------------------------------------------------------------------------------------- 

                      MEDIA QUERIES

 --------------------------------------------------------------------------------------------------- */
 /* ////// Maybe put this in a new css file, which only loads for larger screens

/*-------------------- 608px break --------------------*/

@media only screen and (min-width: 600px),
     only screen and (min-width: 600px) and (orientation: landscape) {
  
  .topics {
    justify-content: space-between; 
  }
  
}

/*-------------------- 823px break --------------------*/

@media only screen and (min-width: 823px),
     only screen and (min-width: 823px) and (orientation: landscape) {

  h1 {
    font-size: 2.3rem;
  } 

  .searchIntroText {
    padding-bottom: 1.5rem;
  }

  .searchIntroText {
    width: 60%;
    /*max-width: 385px;*/
  }

  .searchSection {
    /*all sections are flex, see above*/
    flex-direction: row;
  }

  .searchBar {
    width: 37%;
    min-width: 270px;
  }

}      
</style>

