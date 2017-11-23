<template>
	<div>
	  <div class="searchBoxWrapper form-group" ref="searchWidthReference">

	    <input type="text" placeholder="Thema suchen..." class="searchBoxInput form-control" v-model="search" @keydown="showResults" @keyup="submitSearchToDataBase">
	    <button class="searchBoxButton btn">
	    	<i class="fa fa-search " aria-hidden="true"></i>
	    </button>
		</div>

    <div class="searchResults" v-if="searchShowResults">
      <nuxt-link  active-class='active'
            exact
            tag='div'
            class='btn btnSearch searchBar'
            :key='key'
            to='#'
            @click='submitSearchToDataBase'
            v-for='(item, key) in showSearchResults'
            >{{item}}</nuxt-link>
    </div>

	</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataSet: ['car park', 'table', 'fish', 'tree', 'Lorem ipsum dolor sit amet, elit. fish table', 'fishsticks', 'lemontree'],
      search: '',
      searchShowResults: false,
      dataSetConverted: false,
      dataSetForSearch: Array
    }
  },
  methods: {
    showResults () {
      this.searchShowResults = true
    },
    returnSearchResult (dataSet, searchQuery) {

      // IIFE converts searchQuery to lower case and splits searchQuery into an array of sinlge word strings
      // This is that users can search for multiple terms and irrepective of letter case
      let filteredQuery = ((searchQuery) => searchQuery.toLowerCase().split(' '))(searchQuery);

      // This function is passed in below kept seperately to reduce complexity
      let compareTopicToSearchQuery = (dataEntry, filteredQuery) => {
        // Checks whether any of the words in searchQuery match with a specific topic (data entry) == null ? false : true
        let foundMatch = filteredQuery.map(wordSearched => dataEntry.match(wordSearched) !== null);
        // This checks whether any matches with searchQuery were found and returns true/false for each topic (data entry)
        // Note that it only returns true if ALL searchQuery match
        return foundMatch.reduce((state, value) => value === false ? false : state, true)
      }

      // This function iterates through the data set and uses compareTopicToSearchQuery() for...
      // each entry (topic) to to check whether it fits one of the words in the searchQuery
      return dataSet.filter((dataEntry) => compareTopicToSearchQuery(dataEntry, filteredQuery))
    },
    submitSearchToDataBase () {
      let searched = this.search

      // This is to make sure that only words gets submitted
      if (searched.length > 3) {
        // delay is IIFE defined outside of the vue instance (see below)
        delay(function(){
          const dataForSubmission = {
              answerNumber: searched
            }
            axios.post('https://mietrechtsearch.firebaseio.com/searched.json', dataForSubmission)
              .then(res => console.log(res))
              .catch(res => console.log(error))
            }, 2000)
      }
    },
    useAxiosToSendData (data) {
      const dataForSubmission = {
        answerNumber: data
      }
      axios.post('https://mietrechtsearch.firebaseio.com/searched.json', dataForSubmission)
        .then(res => console.log(res))
        .catch(res => console.log(error))
    }
  },
	computed: {
    showSearchResults () {
      // This converts the data to lower case
      // if (!dataSetConverted) {
      //   this.dataSetForSearch = this.dataSet.map(dataEntry => dataEntry.toLowerCase())
      //   this.dataSetConverted = true
      //  }

      // This function checks whether the data in the search field has more than three letters and then executes the search function
      return this.returnSearchResult(this.dataSet, this.search)
      
    }
  },
  watch: {
    search: function () {
      if (this.search === '') {
        this.searchShowResults = false
      }
    }
  }
}

// This is to submit search inputs only after the user stopped typing
let timer = 0
let delay = (function(){
  // input var is inside closure when typed but submitted after delay unless cancelled (clearTimeout)...
  // due to the user typing
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

</script>

<style>
/*All Bootstraps like and sidewide styles are in default.vue*/
/*form-group
*/

.searchBoxWrapper {
    display: flex;
    width: 100%;
}

.searchBoxInput {
    border-radius: 0.5em 0 0 0.5em;
}

.searchBoxButton {
    border-radius: 0 0.5em 0.5em 0;
    border-left: 0;
}

.searchResults {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  z-index: 100000;
}

.btnSearch {
  width: 100%;
  /*max-width: 350px;*/
  top: -10px;
  left: 0;
  bottom: 0;
  right: 0;
  margin-bottom: 0.2rem;
}

</style>