import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");
  const parrafo1 = document.createElement("p");
  const parrafo2 = document.createElement("p");

  let id;

  function selectImagen(e){
    const imagenSeleccionada = e.target;
      id = parseInt(imagenSeleccionada.getAttribute("data-id"));
      const imagenes = document.querySelectorAll(".memes__img");
      imagenes.forEach( (imagen) => {
        if(imagen.classList.contains("imagenSeleccionada")){
          imagen.classList.remove("imagenSeleccionada");
        }
      })
      imagenSeleccionada.classList.add("imagenSeleccionada");
      aparecerDiv(id);
  }

  function aparecerDiv(idImagen){
    const divMeme = document.querySelector(".meme");
    divMeme.style.display = "block"; 
    let array = document.querySelectorAll(".memes__img");
    let divImagen;
    array.forEach( elemento =>{
      if(elemento.getAttribute("data-id")==idImagen){
        divImagen = elemento.parentElement
      }
    });
    switch(idImagen){
      case 1:
        parrafo1.classList.add("meme1");
        parrafo2.classList.add("meme2");
        break;
      case 2:
        parrafo1.classList.add("meme1");
        parrafo2.classList.add("meme2");
        break;
      case 3:
        parrafo1.classList.add("meme1");
        parrafo2.classList.add("meme2");
        break;
      case 4:
        parrafo1.classList.add("meme6");
        parrafo2.classList.add("meme7");
        break;
      default:
        console.log("No válido valor");
        break;
      }
      divImagen.appendChild(parrafo1);
      divImagen.appendChild(parrafo2);
      
}

  function onChangeLinea1(e){ 
    setLinea1(e.target.value);
    const parrafo = document.querySelector(".meme1");
    parrafo.textContent = linea1;
    setLinea1(e.target.value);
  }
  function onChangeLinea2(e){
    setLinea2(e.target.value);
    const parrafoDos = document.querySelector(".meme2");
    parrafoDos.textContent = linea2;
  }

  function onClickExportar(){
    
  }

  return (
    <div className='App'>
      <h2 className="heading">Generador de Memes</h2>
      <div className='meme'>
        <div className='meme__field'>
          <div className='meme__input'>
            <label>Linea 1</label>
            <input onChange={onChangeLinea1} type="text" className='meme__texto' placeholder='Hola' maxLength="80"/>
          </div>
          <div className='meme__input'>
            <label>Linea 2</label>
            <input onChange={onChangeLinea2} type="text" className='meme__texto' placeholder='Hola' maxLength="80"/>
          </div>
          <div className='memes__input boton'>
            <button onClick={onClickExportar} className='meme__boton'>Generar</button>
          </div>
        </div>    
      </div> 

      <div className='memes container'>
        <div className='memes__grid'>
          <div className='memes__box'>
            <img onClick={selectImagen} className="memes__img" data-id='1' src="bugs-bunny-king.jpeg"></img>  
          </div>
          <div className='memes__box'>
          
            <img onClick={selectImagen} className="memes__img" data-id='2' src="fry-futurama.png"></img>
          </div>
          <div className='memes__box'>
            
            <img onClick={selectImagen} className="memes__img" data-id='3' src="meme-autobus.jpeg"></img>
          </div>
          <div className='memes__box'>
            <img onClick={selectImagen} className="memes__img" data-id='4' src="homer-elegant.jpeg"></img>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
