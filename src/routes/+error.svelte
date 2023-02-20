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
    <p id="submitJoke">Want to submit one? Send it <a href="mailto:jake@breakthroughfitco.com?subject=Dad%20Joke%20Recommendation&body=Hey%21%20Here%27s%20a%20Dad%20Joke%20recommendation%20for%20you%21%0A%0AJoke%3A%20%22%22" target="_blank">here!</a></p>
</div>