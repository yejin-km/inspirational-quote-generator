function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "60ba6250ab35e27b48473tdeo262aef3";
  let context =
    "You are great at inspirational quotes and love to inspire. Generate a short inspirational quote in basic html <p>your quote</p>. follow the user instructions.";
  let prompt = `user instructions: generate an inspirational quote on ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");

  //displays when quote is loading
  new Typewriter("#quote", {
    strings: "⏳. . . . . .",
    autoStart: true,
    loop: true,
    delay: 70,
    cursor: "",
  });

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
