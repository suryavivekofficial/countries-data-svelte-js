<script>
	import { countries } from '../stores/store'
</script>

<style type="text/css">
	.country {
		background: lightblue;
		color: purple;
	}
</style>

<div class="container">
	{#each $countries as country}
  		<div class="country">
  			<img src="{country.flag}">
  			<h4>{country.name}</h4>
  			<h4>Population: <span>{country.population}</span></h4>
  			<h4>Region: <span>{country.region}</span></h4>
  			<h4>Capital: <span>{country.capital}</span></h4>
  		</div>
  	{/each}
</div>