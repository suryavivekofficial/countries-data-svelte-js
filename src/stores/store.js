import { writable } from 'svelte/store'
export let countries = writable([])

const fetchCountries = async () => {
	const url = `https://restcountries.com/v3.1/all`
	const response = await fetch(url) 
	const data = await response.json()
	countries.set(data);
}

fetchCountries();