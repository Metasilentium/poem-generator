function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: "4",
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0907b33b9f9occ3f077738b8ba754tb7";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and you love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions. Do not include a title to the poem. Sign your poem with: 'SheCodes AI' inside a <strong> element at the end of the poem. Do not leave space at the bottom.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
