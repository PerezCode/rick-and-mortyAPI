let personajesHome = [493, 493, 493];
for(let i = 0; i<personajesHome.length; i++){
  let random = Math.floor(Math.random() * ((493+1) -1) + 1);
  personajesHome[i] =  random
  console.log(random);
}
//---------------------------------------------------------------------//

const elemento = document.querySelector('#contenedor')
//----------Consumiendo API con Async/Await----------//
async function onLoad(id){
  async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  try{
    const datos = await getData(`https://rickandmortyapi.com/api/character/${id}`);
    console.log(datos);
    const bloqueEnHTML =
      `<div class="item">
        <img src="${datos.image}" alt="Character img">
        <p>
          <label for="">Name: </label>
          <span>${datos.name}</span><br>
          <label for="">Status: </label>
          <span>${datos.status}</span><br>
          <label for="">Species: </label>
          <span>${datos.species}</span><br>
          <label for="">Gender: </label>
          <span>${datos.gender}</span><br>
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
