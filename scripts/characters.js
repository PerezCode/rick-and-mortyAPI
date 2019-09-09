/*--------------- Variables Globales ---------------*/
const miSection = document.getElementById('contenedor');
let characters = [];
/*--------------------------------------------------*/


/*-------------------- Funciones --------------------*/
function eliminarElemento(){
  let elementoParaEliminar = document.querySelector('.modal-on');
  let padre = elementoParaEliminar.parentNode;
  padre.removeChild(elementoParaEliminar);
}

function crearElemento(id){
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const bloqueEnHTML =
  `<div class="item" data-id=${id}>
    <img data-src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg">
  </div>`;
  let html = document.implementation.createHTMLDocument();
  html.body.innerHTML = bloqueEnHTML;
  miSection.append(html.body.children[0]);
}

function openInfo(event){
  const url = `https://rickandmortyapi.com/api/character/${event.path[1].dataset.id}`;
  fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(data){
    let newElement = document.createElement('div');
    newElement.classList.add('modal-on');
    miSection.append(newElement);
    const bloqueEnHTML =
    `<div class="modal-card">
      <i data-id="${data.id}" class="fas fa-window-close close"></i>
      <img src="${data.image}">
      <p>
        <span class="name">${data.name}</span><br>
        <label for="">Status: </label>
        <span>${data.status}</span><br>
        <label for="">Species: </label>
        <span>${data.species}</span><br>
        <label for="">Gender: </label>
        <span>${data.gender}</span><br>
        <label for="">Origin: </label>
        <span>${data.origin.name}</span><br>
        </p>
    </div>`;
    newElement.innerHTML = bloqueEnHTML;
    let closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', eliminarElemento);
  })
  .catch(function(error){
    console.log(error);
  })
}
/*---------------------------------------------------*/

/*----------------- Codigo Principal -----------------*/
(function main(){
  for(let i = 0; i < 493; i++){
    characters[i] = i+1;
  }

  characters.map(crearElemento);

  let items = document.querySelectorAll('.item');

  items.forEach(element => {
    element.addEventListener('click', openInfo);
    })

  var bLazy = new Blazy({
    // options
    selector: 'img'
  })

})()
/*-----------------------------------------------------*/