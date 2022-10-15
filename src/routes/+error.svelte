<script lang="ts">
  import { getRandomJoke } from "$lib/dadJokes";

  const joke = getRandomJoke();
  
</script>

<svelte:head>
    <style media="screen">
        #p404_body {
          margin: auto;
          width: 75%;
          max-width: 750px;
          background: rgb(25, 25, 25);
          padding: 25px;
          border-radius: 25px;
          font-family: sans-serif;
          color: white;
        }
        #p404_body h1 {
          margin-top: 0;
        }
        #p404_body h3 {
          font-size: 24px;
        }
        #p404_body a {
          color: rgb(255, 200, 150);
          transition: 0.25s;
          font-weight: bold;
          text-decoration: none;
        }
        #p404_body a:hover {
          font-size: 1.25em;
          transition: 1s;
        }
        #dadJoke {
          background: rgb(255, 200, 150);
          border-radius: 25px;
          padding: 26px;
          box-shadow: 2px 5px rgb(250, 165, 30);
          border: rgb(250, 165, 30) 2px solid;
          color: black;
        }
        #djLine {
          margin-top: 0;
          font-size: 20px;
        }
        #djAnswer {
          font-size: 18px;
          margin-bottom: 0;
          text-decoration: underline;
        }
        #submitJoke {
          margin-bottom: 0;
          margin-top: 1.5em;
        }
    </style>
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