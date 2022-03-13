<!--Svelte files are capitalized-->
<script>
    import Apple from './Apple.svelte'
    const apples = ["🍎", "😂"]
    function pickApple() {
        apples.pop();
        apples = apples; // forcing a change in apples so that svelte knows we made a change. We can apply map() to prevent "undefined", unecessary for for each technique.
    }
</script>

<h2>I'm a tree</h2>
{#each apples as apple}
<Apple apple={apple}/>
{/each}

<Apple apple={apples[0]}/> <!--So an Apple in this context (in all contexts really) is a component. apple is a prop that we assign in the component, but we define it elsewhere.-->
<Apple apple={apples[1]}/>
<button on:click={pickApple}>Pick an apple</button> <!--This is svelte syntax for onclick. Defined as a function reference, that's why we need lambda-->
<!--It evaluates the code as the page is loaded, hence if we write "direct" code in {} instead of a callback, then the code will be run as we load the page.-->


<!--Prop hunt i svelte-->