<script>
// Importing components from components folder
import Filter from './components/Filter.svelte'
import SearchBar from './components/SearchBar.svelte'
import Country from './components/Country.svelte'

//Theme toggling variable.
let isDarkTheme = false
</script>

<!-- Styles -->

<style lang="scss">
:global(body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

#body {
  width: 100vw;
  background-color: var(--bg);

  nav {
	width: 100%;
	height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--elements);
	box-shadow: 0px 1px 5px var(--input);

	h2 {
	  font-size: 1.5rem;
	  margin: 0rem 3rem;
	  color: var(--text);
	}

	label {
	  margin: 0rem 3rem;
	}
  }
  .wrapper {
	margin: 2rem 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
  }
}
</style>

<!-- MarkUp  -->
<div id="body" class="{isDarkTheme ? 'dark' : 'light'}">
 
  <nav class="navigation">
	<h2>Where in the world?</h2>
	<label>
	  <input type="checkbox" bind:checked={isDarkTheme}>
	  Dark Mode
	</label>
  </nav>
  
  <div class="wrapper">
		<SearchBar/>
		<Filter />
  </div>
  <Country />
  
</div>
