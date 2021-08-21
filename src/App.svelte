<script>

let isDarkTheme = false 
let theme = ''
$: {
    if (isDarkTheme){
    theme = 'light'
  } else {
    theme = 'dark'
  }}

</script>

<style>
:global(body){
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

nav{
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--elements);
}

nav h2{
  font-size: 1.5rem;
}

nav > *{
  margin: 0rem 3rem;
}
</style>

<div class="{theme}">
  <nav class="navigation">
    <h2>Where in the world?</h2>
    <input type="checkbox" bind:checked={isDarkTheme} >
  </nav>
</div>

