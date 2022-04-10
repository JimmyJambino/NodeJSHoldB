<script>
	import {onMount} from "svelte"
	import {baseURL} from "./store/generalStore.js"

	let players;
	onMount(async ()=> { // calls this function when the component mounts/loads
		const response = await fetch("/players") // remember $, can apply $baseURL + /players if we don't want do deal with cors. Remember to import cors in backend for this to work.
		const {data} = await response.json()
		players = data
	})
</script>

<main id="main">
	<h1>Page Content</h1>
	<h2>{JSON.stringify(players)}</h2>
</main>
<footer>
	{new Date().getFullYear()}
	Contact
	About
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: 90vh;
	}

	footer {
		background-color: grey;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>