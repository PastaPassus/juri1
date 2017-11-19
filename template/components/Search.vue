<template>
	<div>
	  <div class="searchBoxWrapper form-group" ref="searchWidthReference">
      <p>{{searchWidth}}</p>
      <p>{{}}</p>
	    <input type="text" placeholder="Thema suchen..." class="searchBoxInput form-control" v-model="search" @keydown="showResults">
	    <button class="searchBoxButton btn">
	    	<i class="fa fa-search " aria-hidden="true"></i>
	    </button>
		</div>
    
<!--     <div class="searchResults" v-if="searchShowResults"> -->
    <div class="searchResults" v-if="true">
      <nuxt-link  active-class='active' 
            exact 
            tag='div' 
            class='btn btnSearch searchBar' 
            :key='index'
            to='#' 
            v-for='(item, key) in placeholderData'
            >{{item}}</nuxt-link>
    </div>

	</div>
</template>

<script>
export default {
  data () {
    return {
      dataSet: ['car park', 'table', 'fish', 'tree', 'Lorem ipsum dolor sit amet, elit. fish table'],
      search: '',
      placeholderData: ['button 1', 'button 2', 'button 3', 'button 4'],
      searchWidth: ''
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
      console.log(filteredQuery)

      // This function is passed in below kept seperately to reduce complexity
      let compareTopicToSearchQuery = (dataEntry, filteredQuery) => {
        // Checks whether any of the words in searchQuery match with a specific topic (data entry)
        let foundMatch = filteredQuery.map(wordSearched => dataEntry.toLowerCase().match(wordSearched) === null ? false : true);
        // This checks whether any matches with searchQuery were found and returns true/false for each topic (data entry)
        // Note that it only returns true if ALL searchQuery match
        return foundMatch.reduce((state, value) => value === false ? false : state, true)
      }

      // This function iterates through the data set and uses compareTopicToSearchQuery() for...
      // each entry (topic) to to check whether it fits one of the words in the searchQuery
      return dataSet.filter((dataEntry) => compareTopicToSearchQuery(dataEntry, filteredQuery))
    },
    checkSearchWidth () { this.searchWidth = this.$refs.searchWidthReference[0].style.width }
  },
	computed: {
    showSearchResults () {
      console.log('=====================================')
      return this.returnSearchResult(this.dataSet, this.search)
      console.log('WORKED')
    },
    
  },
  watch: {
    search: function () {
      if (this.search === '') {
        this.searchShowResults = false
      }
    }
  }
}
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
  background-color: white;
  width: 100%;
  z-index: 100000
}

.btnSearch {
  width: 100%;
}

</style>