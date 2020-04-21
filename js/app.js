import * as UI from './interfaz.js';
import {API} from './api.js';
console.log(UI);

UI.formularioBsucar.addEventListener('submit',(e)=>{
    e.preventDefault();

    //obtener datos:
    const artista=document.querySelector('#artista').value;

    const cancion=document.querySelector('#cancion').value;

    if(artista==='' || cancion===''){

        UI.divMensajes.innerHTML='Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.innerHTML='';
            UI.divMensajes.classList.remove('error');
        }, 1500);
    }else{
        //form lleno + consulta:
        const api=new API(artista,cancion);
        api.consultarAPI()
        .then(data=>{
            if(data.respuesta.lyrics){
            console.log('Si existe');
                const letra=data.respuesta.lyrics;
                UI.divResultado.textContent=letra;
            }else{
                /*no existe*/ 
                UI.divMensajes.innerHTML='La cancion no existe, prueba con otro nombre';
                UI.divMensajes.classList.add('error');
                    
                setTimeout(() => {
                    UI.divMensajes.innerHTML='';
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBsucar.reset();
                }, 1500);
            }
        });
    }
})


