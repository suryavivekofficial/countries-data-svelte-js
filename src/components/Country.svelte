<script>
	import { countries } from '../stores/store'
</script>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 3rem;
		padding: 1rem;

		.country {
			color: purple;
			border-radius: 10px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			
			img {
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				height: auto;
				width: 100%;
			}
		}
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