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
      aparecerDiv()
  }

  function aparecerDiv(){
      const divMeme = document.querySelector(".meme");
      divMeme.style.display = "block";
      const parrafo1 = document.querySelector("#linea1");
      const parrafo2 = document.querySelector("#linea2");
      
      parrafo1.style.display = "block";
      parrafo2.style.display = "block";
      switch(id){
        case 1:
            parrafo1.classList.add("meme1");
            parrafo2.classList.add("meme2");
          break;
        case 2:
          parrafo1.style.backgroundColor = "green";
          parrafo2.style.backgroundColor = "purple";
          break;
        case 3:
          parrafo1.style.backgroundColor = "orange";
          parrafo2.style.backgroundColor = "navy";
          break;
        case 4:
          console.log("El id es " + id);
          break;
        default:
          console.log("No válido valor");
          break;
      }

  }
  function onChangeLinea1(e){
    setLinea1(e.target.value);
  }
  function onChangeLinea2(e){
    setLinea2(e.target.value);
  }
  function generarMeme(){

  }
  return (
    <div className="App">
        <h2 className="memes__heading">Generador de Memes</h2>
        <div className='meme'>
          <div className='memes__input'>
              <div className='memes__field'>
                  <input onChange={onChangeLinea1} type="text" className='memes__text' placeholder='Hola' maxLength="80"/>
              </div>
              <div className='memes__field'>
                  <input onChange={onChangeLinea2} type="text" className='memes__text' placeholder='Hola' maxLength="35"/>
              </div>
              <div className='memes__field'>
                  <button onClick={generarMeme} className='memes__boton'>Generar</button>
              </div>
          </div>
        </div>    
        <div className="memes container">
          <div className='memes__grid'>
            <div>
                <img onClick={selectImagen} className="memes__img" data-id='1' src="bugs-bunny-king.jpeg"></img>
            </div>
            <div>
              <img onClick={selectImagen} className="memes__img" data-id='2' src="fry-futurama.png"></img>
            </div>
            <div>
              <img onClick={selectImagen} className="memes__img" data-id='3' src="meme-autobus.jpeg"></img>
            </div>
            <div>
              <img onClick={selectImagen} className="memes__img" data-id='4' src="homer-elegant.jpeg"></img>
            </div>
        </div>
      </div> //esto es un comentario
       
    </div>
  );
}

export default App;
