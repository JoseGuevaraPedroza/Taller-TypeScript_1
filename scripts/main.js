import { series } from "./data.js";
var cuerpoTabla = document.getElementById("cuerpo_tabla");
crearTabla();
calcularPromedioTemporadas();
function crearTabla() {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(serie.id, "</td>\n       <td>").concat(serie.name, "</td>\n       <td>").concat(serie.seasons, "</td>\n       <td>").concat(serie.channel, "</td>");
        cuerpoTabla.appendChild(tr);
    }
}
function calcularPromedioTemporadas() {
    var suma = 0;
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        suma += serie.seasons;
        total++;
    }
    var promedio = document.getElementById("promedio");
    promedio.innerHTML = "El promedio de las temporadas es: ".concat(suma / total);
}
