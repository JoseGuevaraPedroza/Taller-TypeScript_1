import { Serie } from "./serie.js";
import { series } from "./data.js";

var cuerpoTabla=document.getElementById("cuerpo_tabla")!;

crearTabla();
calcularPromedioTemporadas();

function crearTabla():void
{
    for (let serie of series) {
       let tr= document.createElement("tr");
       tr.innerHTML=`<td>${serie.id}</td>
       <td>${serie.name}</td>
       <td>${serie.seasons}</td>
       <td>${serie.channel}</td>`;
       cuerpoTabla.appendChild(tr);
    }
}

function calcularPromedioTemporadas() :void
{
    let suma : number= 0;
    let total : number = 0;
    for (let serie of series) {
        suma+=serie.seasons;
        total++;
    }

    let promedio = document.getElementById("promedio")!;
    promedio.innerHTML=`El promedio de las temporadas es: ${suma/total}`;
}

