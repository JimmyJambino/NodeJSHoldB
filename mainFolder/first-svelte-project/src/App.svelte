<script>
	export let name;
	// export let className; can also be used as a variable to change elements below in <main>
	import Tree	from "../pages/Tree/Tree.svelte"
	import Sun from "../components/Sun/Sun.svelte"
	import Profile from "../pages/Profile/Profile.svelte"
</script>

<main>
	<Sun/>
	<h1>Hello {name}!</h1> <!--this is found in main.js-->
	<!--<p class={className}>Hello</p> would take the variable className that we defined above-->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Tree/>
	<Profile/>
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