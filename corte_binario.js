function calcular() {
  // Obtiene los valores ingresados por el usuario
  var anchoMaterial = parseInt(document.getElementById("ancho_material").value);
  var altoMaterial = parseInt(document.getElementById("alto_material").value);
  var cantidadObjetos = parseInt(document.getElementById("objetos").value);
  var anchoObjeto = parseInt(document.getElementById("ancho_objeto").value);
  var altoObjeto = parseInt(document.getElementById("alto_objeto").value);
  
  // Calcula el número de filas y columnas necesarias para acomodar los objetos
  var filas = Math.ceil(cantidadObjetos / (anchoMaterial / anchoObjeto));
  var columnas = Math.ceil(cantidadObjetos / (altoMaterial / altoObjeto));
  
  // Calcula el número de cortes necesarios
  var cortes = (filas - 1) + (columnas - 1);
  
  // Calcula el porcentaje de material utilizado
  var materialUtilizado = ((cantidadObjetos * anchoObjeto * altoObjeto) / (anchoMaterial * altoMaterial)) * 100;
  
  // Crea una tabla con los resultados y la muestra en la página
var tabla = document.getElementById("tabla_resultados");
tabla.innerHTML = "";
var filaEncabezado = tabla.insertRow();
var celdaEncabezado1 = filaEncabezado.insertCell();
var celdaEncabezado2 = filaEncabezado.insertCell();
celdaEncabezado1.innerHTML = "Resultado";
celdaEncabezado2.innerHTML = "Valor";
var fila1 = tabla.insertRow();
var celda11 = fila1.insertCell();
var celda12 = fila1.insertCell();
celda11.innerHTML = "Número de filas:";
celda12.innerHTML = filas;
var fila2 = tabla.insertRow();
var celda21 = fila2.insertCell();
var celda22 = fila2.insertCell();
celda21.innerHTML = "Número de columnas:";
celda22.innerHTML = columnas;
var fila3 = tabla.insertRow();
var celda31 = fila3.insertCell();
var celda32 = fila3.insertCell();
celda31.innerHTML = "Número de cortes:";
celda32.innerHTML = cortes;
var fila4 = tabla.insertRow();
var celda41 = fila4.insertCell();
var celda42 = fila4.insertCell();
celda41.innerHTML = "Porcentaje de material utilizado:";
celda42.innerHTML = materialUtilizado.toFixed(2) + "%";
}