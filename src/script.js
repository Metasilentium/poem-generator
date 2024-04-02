function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating Poem",
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
