<script>
	const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
</script>

<style lang="scss">	
.filter {
	position: relative;

	select{
		background-color: white;
		box-shadow: 0px 0px 5px var(--input);
		padding: 1rem 3rem 1rem 1rem;
		width: 100%;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
	}

	span {
		position: absolute;
		display: block;
		background-color: white;
		border-radius: 5px;
		top: 0;
		right: 0;
		height: 100%;
		width: 2rem;
		pointer-events: none;

		&::before {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border-left: 0.5em solid transparent;
			border-right: 0.5em solid transparent;
			border-top: 0.5em solid black;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
</style>
	
<form class="filter">
	<select name="region">
		<option value="All" selected>All Countries</option>
		{#each regions as region}
			<option value="{region}">{region}</option>
		{/each}
	</select>
	<span></span>
</form>