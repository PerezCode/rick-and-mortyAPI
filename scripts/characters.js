let characters = [];
for(let i = 0; i < 100; i++){
  characters[i] = i+1;
}
let miSection = document.getElementById('contenedor');
//----------Consumiendo API con promesas----------//
function printCharacters(id){
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(data){
    const bloqueEnHTML =
    `<div class="item">
      <img src="${data.image}" alt="Character img">
    </div>`;
    console.log(bloqueEnHTML)
    let html = document.implementation.createHTMLDocument();
    html.body.innerHTML = bloqueEnHTML;
    miSection.append(html.body.children[0]);
  })
  .catch(function(error){
    console.log(error)
  })
}
  let resultadosPromesas = characters.map(printCharacters);

  /* const bloqueEnHTML =
    `<div class="item">
      <img src="${data.image}" alt="Character img">
      <p>
        <label for="">Name: </label>
        <span>${data.name}</span><br>
        <label for="">Status: </label>
        <span>${data.status}</span><br>
        <label for="">Species: </label>
        <span>${data.species}</span><br>
        <label for="">Gender: </label>
        <span>${data.gender}</span><br>
      </p>
    </div>`; */