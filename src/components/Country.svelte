<script>
	import { countries } from '../stores/store'
</script>

<div>
	<ol>
		{#each $countries as country}
  			<li>{country.name.common}</li>
  		{/each}
  	</ol>
</div>