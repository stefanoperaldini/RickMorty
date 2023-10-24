"use strict";

const ulElementPersonajes = document.querySelector("ul#personajes");

const main = async () => {
  try {
    const results = await fetch("https://rickandmortyapi.com/api/character");
    const data = await results.json(); // parse del JSON

    for (const c of data.results) {
      const liPersonaje = document.createElement("li");
      liPersonaje.textContent = c.name;
      ulElementPersonajes.append(liPersonaje);
    }

    /* console.log(
      data.results.map((c) => {
        return c.name;
      })
    ); */
  } catch (error) {
    console.error(error.message);
  }
};

main();
