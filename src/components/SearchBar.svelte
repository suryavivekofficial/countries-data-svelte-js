<style lang="scss">
	.input{
			width: 40%;
    		box-shadow: 0px 0px 5px var(--input);
			height: 3rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-radius: 5px;

			span {
				margin: 0 0.5rem;
				
				i{
					width: 10%;
				}
			}
			input{
				border: none;
				width: 80%;
				outline: none;
				font-size: 1rem;
			}
		}
</style>

<div class="input">
	<span><i class="bi bi-search"></i></span>
	<input type="text" placeholder="Search for a country...">
</div>