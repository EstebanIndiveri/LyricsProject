export class API{
    constructor(artista,cancion){
        this.artista=artista;
        this.cancion=cancion;
    }

    async consultarAPI(){
        const ulr=await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);

        const respuesta=await ulr.json();

        return{
            respuesta
        }
    }
}

// import {nombreCliente, ahorro,mostrarInformacion,Cliente/*mostrarNombre*/} from './cliente.js';
// import{nombreEmpresa, ahorro as ahorroEmpresa,categoria,mostrarInformacion as informacionEmpresa,Empresa} from './Empresa.js'

// /*console.log(nombreEmpresa);
// console.log(ahorro);
// console.log(ahorroEmpresa);
// console.log(categoria);
// const info=informacionEmpresa(nombreEmpresa,ahorroEmpresa,categoria);
// console.log(info);*/

// let empresa=new Empresa(nombreEmpresa,ahorroEmpresa,categoria);
// console.log(empresa.mostrarInformacion());
// // import * as clientes from './cliente.js';

// //console.log(nombreCliente);
// //console.log(ahorro);

// /*const info=mostrarInformacion(nombreCliente,ahorro);
// //console.log(info);
// */
// // const mostrarNombres=mostrarNombre(nombreCliente);
// // console.log(mostrarNombres);

// let cliente=new Cliente(nombreCliente,ahorro);
// console.log(cliente.mostrarInformacion());