<script lang="ts">
    import { getRandomJoke } from "$lib/dadJokes";

    const joke = getRandomJoke();
</script>

<svelte:head>
    <link rel="stylesheet" href="css/error.css"/>
</svelte:head>

<div id="p404_body">
    <h1>Sorry, we couldn't find that page :(</h1>
    <h3>But here's a fun dad joke!</h3>
    <div id="dadJoke">
        <p id="djLine">{joke[0]}</p>
        <p id="djAnswer">{joke[1]}</p>
    </div>
</div>