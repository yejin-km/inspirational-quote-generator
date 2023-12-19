function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "quote goes here",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
