<script>
	import UserRegistration from "./pages/userRegistration/userRegistration.svelte";
	import Colors from "./pages/Colors/Colors.svelte"
	let username
	import {onMount} from "svelte"

	// npm i socket.io-client is an alternative to the <script src=socket.io...>

	onMount(async () => {
		const response = await fetch("/api/fetchUser")
		const {data} = await response.json()
		username = data
	})

</script>

<main>
	<h1>Hello</h1>
	{#if username}
	<Colors/>
	{:else}
	<UserRegistration/>
	{/if}
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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