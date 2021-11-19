import { writable } from 'svelte/store'
export let countries = writable([])

const fetchCountries = async () => {
	const url = `https://restcountries.com/v3.1/all`
	const response = await fetch(url) 
	const data = await response.json()
	const loadedData = data.map(country => {
		return {
			"name": country.name.common,
			"population": country.population,
			"region": country.region,
			"capital": country.capital,
			"flag": country.flags.svg,
			"domain": country.tld,
			"abbr": country.cioc
		}
	})
	countries.set(loadedData);
}
fetchCountries();