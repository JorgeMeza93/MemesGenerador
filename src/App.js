import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  
  const [linea1, setLinea1] = useState("Hola Mundo");
  const [linea2, setLinea2] = useState("Te amo Jaqueline Diaz <3");
  const [imagen, setImagen] = useState("");
  let id;

  function selectImagen(e){
    const imagenSeleccionada = e.target;
      const imagenes = document.querySelectorAll(".memes__img");
      id = parseInt(imagenSeleccionada.getAttribute("data-id"));
      imagenes.forEach( (imagen) => {
            if(imagen.classList.contains("imagenSeleccionada")){
              imagen.classList.remove("imagenSeleccionada");
            }
      })
      imagenSeleccionada.classList.add("imagenSeleccionada");
      aparecerDiv();
  }
  function aparecerDiv(){
    const divMeme = document.querySelector(".meme");
    divMeme.style.display = "block";
    const parrafo1 = document.querySelector("#linea1");
    const parrafo2 = document.querySelector("#linea2");
  }

  return (
    <div className='App'>
      <h2 className="heading">Generador de Memes</h2>
      <div className='meme'>
        <div className='meme__field'>
          <div className='meme__input'>
            <label>Linea 1</label>
            <input type="text" className='meme__texto' placeholder='Hola' maxLength="80"/>
          </div>
          <div className='meme__input'>
            <label>Linea 2</label>
            <input type="text" className='meme__texto' placeholder='Hola' maxLength="80"/>
          </div>
          <div className='memes__input boton'>
            <button className='meme__boton'>Generar</button>
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
