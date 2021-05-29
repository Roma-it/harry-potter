window.addEventListener("load", async function () {
  const character = document.getElementById("character");
  const data = await fetch("http://hp-api.herokuapp.com/api/characters");
  const characters = await data.json();
  const input = document.getElementById("input");
  const form = document.getElementById("form");
  const card = document.querySelector(".card");

  console.log(characters);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const search = input.value.toLowerCase();
    let charact = characters.find((char) =>
      char.name.toLowerCase().includes(search)
    );
    if (charact) {
      card.style.display = "flex";
      character.innerHTML = `<h2>${charact.name}</h2>
                                <img src=${charact.image}>
                                <div class='sub'>
                             <p class='shadow'>House: ${charact.house}</p>
                             <p>Species: ${charact.species}</p>
                             <p>Patronus: ${charact.patronus}</p>
                             <div>
                             `;
    } else {
      card.style.display = "flex";
      character.innerHTML = `<p class="center"> We could not find <b>${search}</b> in our files</p>`;
    }
  });
});
