const endpoint = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const weightEl = document.getElementById("weight");
const heightEl = document.getElementById("height");
const hpEl = document.getElementById("hp");
const attackEl = document.getElementById("attack");
const defenseEl = document.getElementById("defense");
const specialAttackEl = document.getElementById("special-attack");
const specialDefenseEl = document.getElementById("special-defense");
const speedEl = document.getElementById("speed");
const spriteEl = document.getElementById("sprite");
const typesEl = document.getElementById("types");

async function getPokemon() {
  const pokemon = document.getElementById("search-input").value;

  const response = await fetch(endpoint + pokemon.toLowerCase());
  if (response.status === 404) {
    alert("Pokémon not found");
    // clear all data
    nameEl.textContent = "";
    idEl.textContent = "";
    weightEl.textContent = "";
    heightEl.textContent = "";
    hpEl.textContent = "";
    attackEl.textContent = "";
    defenseEl.textContent = "";
    specialAttackEl.textContent = "";
    specialDefenseEl.textContent = "";
    speedEl.textContent = "";
    spriteEl.src = "";
    typesEl.innerHTML = "";
    return;
  }

  const data = await response.json();

  nameEl.textContent = data.name.toUpperCase();
  idEl.textContent = `#${data.id}`;
  weightEl.textContent = data.weight;
  heightEl.textContent = data.height;
  hpEl.textContent = data.stats[0].base_stat;
  attackEl.textContent = data.stats[1].base_stat;
  defenseEl.textContent = data.stats[2].base_stat;
  specialAttackEl.textContent = data.stats[3].base_stat;
  specialDefenseEl.textContent = data.stats[4].base_stat;
  speedEl.textContent = data.stats[5].base_stat;

  spriteEl.src = data.sprites.front_default;

  typesEl.innerHTML = "";
  for (const type of data.types) {
    const typeEl = document.createElement("span");
    typeEl.textContent = type.type.name;
    typeEl.classList.add("type");
    typeEl.classList.add(type.type.name);
    typesEl.appendChild(typeEl);
  }

  console.log(data);
}

document.getElementById("search-button").addEventListener("click", getPokemon);
