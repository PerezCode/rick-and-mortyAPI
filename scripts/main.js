let personajesHome = [0, 0, 0];
for(let i = 0; i<personajesHome.length; i++){
  let random = Math.floor(Math.random() * ((493+1) -1) + 1);
  personajesHome[i] =  random
}

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
    const bloqueEnHTML =
      `<div class="item">
        <img src="${datos.image}" alt="Character img">
        <p>
          <span>${datos.name}</span><br>
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
personajesHome.map(onLoad)
//----------------------------------------------------//
