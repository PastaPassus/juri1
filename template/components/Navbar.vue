<template>
		<header>
      <div class="navPlaceholder"></div>

			<div class="banner">
				<div class="logo">
					<img src="../static/logoIcon.png"> 
					<div class="companyName"><nuxt-link id="logoText" to="/">jurifo</nuxt-link></div>
				</div>
			</div>

			<nav role="navigation">
			  	<div id="menuToggle">
  			    <!--
            CODE: https://codepen.io/erikterwan/pen/grOZxx

  			    A fake / hidden checkbox is used as click reciever,
  			    so you can use the :checked selector on it.
  			    -->
  			    <input type="checkbox" />
  			    
  			    <!--
  			    Some spans to act as a hamburger.
  			    
  			    They are acting like a real hamburger,
  			    not that McDonalds stuff.
  			    -->
  			    <span></span>
  			    <span></span>
  			    <span></span>
  			    
  			    <!--
  			    Too bad the menu has to be inside of the button
  			    but hey, it's pure CSS magic.
  			    -->
  			    <ul id="menu">
  			      <a href="#"><li>Home</li></a>
  			      <a href="#"><li>About</li></a>
  			      <a href="#"><li>Info</li></a>
  			      <a href="#"><li>Contact</li></a>
  			      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
  			    </ul>
			  	</div>
			</nav>
				
		</header>

</template>

<style>

header {
  /*positioning*/
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 3.5%;
    z-index: 100;
    padding: 1% 3.5%;

  /*flexbox*/
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  /*style*/
    background-color: rgba(255,255,255,0.6);
    border-bottom: 1px solid rgba(165,165,165,0.2);     
}

.navPlaceholder {
  flex-grow: 1;
}

.banner {
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
  justify-content: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-family: "Arvo",sans-serif;
  color: rgb(35,65, 110);
}

.logo img {
  height: 1.2em;
  flex-grow: 1;
}

.logo .companyName {
  display: inline;
  padding-bottom: 0.3em;
}

#logoText {
  text-decoration: none;
}

/*-------------------------------  Hamburger -------------------------------*/

nav {
  flex-grow: 1;
  display: inline-flex;
  justify-content: flex-end;
}

nav a
{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

nav a:hover
{
  color: tomato;
}

#menu {
  display: none;
}
#menuToggle
{
  display: block;
  position: relative;
  z-index: 11;
  display: inline;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 12; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 28px;
  height: 3px;
  margin-bottom: 4px;
  position: relative;
  
  background: rgb(165, 165, 165);
  border-radius: 3px;
  
  z-index: 11;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:hover {

}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: rgb(35,65, 110);
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's fade it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: scale(1.0, 1.0);
  opacity: 1;
}	

/* --------------------------------------------------------------------------------------------------- 

                      MEDIA QUERIES

 --------------------------------------------------------------------------------------------------- */
 /* ////// Maybe put this in a new css file, which only loads for larger screens


/*-------------------- 767px break --------------------*/

@media only screen and (min-width: 767px),
     only screen and (min-width: 767px) and (orientation: landscape) {

     header {
    margin-bottom: 1%;
  }
}
</style>