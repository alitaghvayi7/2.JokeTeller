const jokeButton = document.querySelector('.joke-button');
const speech = window.speechSynthesis;
const speecher = new SpeechSynthesisUtterance();
let joke = "";
const jokeAPIurl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

async function getJokeFromApi() {
    try {
        const response = await fetch(jokeAPIurl);
        const result = await response.json();
        joke = result.joke;
    }
    catch (error) {
        throw new Error('An Error Ocuured');
    }
}

jokeButton.addEventListener('click',jokeTeller)

async function jokeTeller(){
    if(speech.speaking){
        return;
    }
    this.disabled = true;
    await getJokeFromApi();
    speecher.text = joke;
    speech.speak(speecher);
    this.disabled = false;
}