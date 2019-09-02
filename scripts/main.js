let personajesHome = [1, 2, 3];

/* function printCharacters(id){
  const url = `https://rickandmortyapi.com/api/character/${id}`
  // let newImg = document.createElement('img')
  // newImg.src = urlFoto
  // let currentImg = document.getElementById('spanHijo');
  // let referenciaPadre = currentImg.parentNode
  // referenciaPadre.insertBefore(newImg, currentImg)

  //----------Consumiendo API con promesas----------//
  fetch(url)
  .then(function(data){
    return data.json()
  })
  .then(function(data){
    const bloqueEnHTML =
    `<div>
      <img src="${data.image}" alt="Character img">
      <p>
        <label for="">Nombre</label>
        <span>${data.name}</span>
      </p>
    </div>`
    console.log(bloqueEnHTML)
  })
  .catch(function(error){
    console.log(error)
  })
}
  let resultadosPromesas = personajesHome.map(printCharacters); */
//---------------------------------------------------------------------
const elemento = document.querySelector('#contenedor')
//----------Consumiendo API con Async/Await----------//
async function onLoad(id){
  async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  try{
    const datos = await getData(`https://rickandmortyapi.com/api/character/${id}`)
    const bloqueEnHTML =
      `<div class="item">
        <img src="${datos.image}" alt="Character img">
        <p>
          <label for="">Nombre:</label>
          <span>${datos.name}</span>
        </p>
      </div>`
    const html = document.implementation.createHTMLDocument() //creamos un document virtual
    html.body.innerHTML = bloqueEnHTML //Aqui convertimos el texto en una etiqueta real
    elemento.append(html.body.children[0]) // Se agrega la etiqueta real a .elemento
  }
  catch{
    console.log('Algo salio mal');
  }
}
let resultadosAsyncAwait = personajesHome.map(onLoad)
console.log(resultadosAsyncAwait)
//---------------------------------------------------------------------
