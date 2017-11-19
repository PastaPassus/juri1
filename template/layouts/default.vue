<template>
  <div>
    <app-navbar></app-navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    'app-navbar': Navbar
  }
}
</script>

<style>


/* --------------------------------------------------------------------------------------------------- 

                          MAIN CONTENT

 --------------------------------------------------------------------------------------------------- */


body, html {
  height: 100%;
}

body {
  /* Font */
  font-family: 'Esteban', serif;    
  font-size: 16px; /*  Change the font size here for the whole page*/
  color: rgba(50, 50, 50, 1);
  line-height: 1.2;
}

body:after {
  /* Background image */
  /*background-image: url("../Images/house.jpg");*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  content : "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity : 0.075;
  z-index: -1;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 100%;
  justify-content: space-between;
  margin-top: 4em;
}

.order_1 {
  order: -1;
}

.order_2 {
  order: -2;
}

.transitionAll_1s {
  transition: all 1s
}


/*----  titles ----*/

main .title {
  flex-basis:  100%;
  justify-content: center;
  max-width: 525px;
}

.title h1 {
  font-family: "Crimson Text", serif;
  font-size: 2em;
  margin-bottom: 0.4em;
}

/*----  flex-center ----*/

main .flex-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 525px;
}

.flex-center p {
  flex: 1 1 100%;
  margin-bottom: 0.3em;
}

.flex-center h3 {
  padding-top: 3%;
  padding-bottom: 2%;
}

/*----  buttons ----*/

.btn { 
  /* Font */
  font-family: "Esteban",sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  text-decoration: none;
  
  /* Design */ 
  background: rgba(255,255,255,0.5) none repeat scroll 0 0;
  border: 1px solid rgba(165,165,165, 0.8);
  color: rgb(0,0,0);
  cursor: pointer;
  transition: background-color 0.1s ease-out 0s; 
  opacity: 0.7;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  line-height: 1.25;
  border-radius: .25rem;

  /* Layout */
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 0.6em 1.2em;
  vertical-align: middle;
}

.btnPos { /* Positioning of buttons; seperate for clarity*/
  margin: 1% auto;
  width: 90%;
  max-width: 250px;
}

.btn-sm {
  margin: 0.6rem auto;
  margin-right: 0.3rem;
  width: 8%;
  max-width: 100px;
  min-width: 60px;
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
}

.btn:hover:enabled {
  opacity: 1;
  color: rgb(50,50,50);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
/*  font-size: 1em;*/
  transition: all 0.1s;
} 

.btn:focus {
  outline: none;

  /* This part is different from the subpage.css file */
  background: rgba(35, 65, 110,0.7);
  color: white;
  transition: all 1s;
}

.btn.active {
  background: rgba(35, 65, 110,0.7);
  color: white;
}


/*---------------------------------  FORMS / INPUTS -----------------------------*/

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: inline-block;
  margin-bottom: .5rem;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

.form-control {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.form-group input {
  overflow: visible;
  margin: 0;
  font-family: inherit;
}

.text-muted {
  color: #868e96 !important;
}

.form-text {
    display: block;
    margin-top: .25rem;
}

small {
  font-size: 80%;
  font-weight: 400;
}


.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #a5a5a5;
  border-color: rgb(35,65, 110);
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(35,65, 110, 0.25);
}

.form-control::-webkit-input-placeholder {
  color: #868e96;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #868e96;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #868e96;
  opacity: 1;
}

.form-control::placeholder {
  color: #868e96;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}


/* --------------------------------------------------------------------------------------------------- 

                      MEDIA QUERIES

 --------------------------------------------------------------------------------------------------- */
 /* ////// Maybe put this in a new css file, which only loads for larger screens


/*-------------------- 767px break --------------------*/

@media only screen and (min-width: 767px),
     only screen and (min-width: 767px) and (orientation: landscape) {

  body {
    font-size: 17px;
  }

  .container {
    max-width: 720px;
    margin-top: 4.5em;
  }

  .title h1 {
    font-size: 2.4em;
  }
}
  
/*---------------------- 1032px break ------------------------*/

@media only screen and (min-width: 1032px),
     only screen and (min-width: 1032px) and (orientation: landscape) {

  .container {
    max-width: 1000px;
    margin-top: 5em;
  }

  body {
    font-size: 18px;
  }

}
</style>
