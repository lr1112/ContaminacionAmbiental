var poblacion = 0;
var tasaCrecimientoPoblacional = 0;
var cantidadDisminucionPoblacion = 0;
var vecesDisminucionPoblacion = 0;
var nivelContaminacion = 0;
var cantidadIndustrias = 0;
var capitalIndustrial = 0;
var cantidadDisminucionCapitalIndustrial = 0;
var cantidadContaminacionIndustrial = 0;

//Esta funcion se encarga de aumentar en un rango de 1-5 la poblacion y aumentar en 1 el nivel de contaminacion
function addPeople(poblacion) {
    var cantidadAumentoPoblacion = Math.floor(Math.random() * 11250) + 1;
    poblacion = poblacion + cantidadAumentoPoblacion;
    return poblacion;
}

//Esta funcion se encarga de disminuir en un rango de 1-5 la poblacion y almacena la cantidad disminuida en
//la variable cantidadDisminucionPoblacion y almacena la cantidad de veces que se disminuyo la poblacion en la variable vecesDisminucionPoblacion 
function removePeople(poblacion) {
    poblaciontemp = Math.floor(Math.random() * 4792) + 1;
    poblacion = poblacion - poblaciontemp;
    cantidadDisminucionPoblacion = cantidadDisminucionPoblacion + poblaciontemp;
    vecesDisminucionPoblacion = vecesDisminucionPoblacion + 1;
    return [poblacion, cantidadDisminucionPoblacion, vecesDisminucionPoblacion];
}

//esta funcion se encarga de calcular la tasa de crecimiento poblacional
function calcularTasaCrecimientoPoblacional(cantidadDisminucionPoblacion, poblacion) {
    tasaCrecimientoPoblacional = (poblacion / cantidadDisminucionPoblacion) * 100;
    return tasaCrecimientoPoblacional;
}

//Esta funcion se encarga de aumentar en 1 el nivel de contaminacion y diminuir la poblaciom y disminuir el capital industrial
function addContaminacion(nivelContaminacion) {
    nivelContaminacion = nivelContaminacion + 1;
    return nivelContaminacion;
}

//Esta funcion se encarga de aumentar en una cantidad aleatoria la cantidad de capital industrial y aumentar el nivel de contaminacion 
//y aumentar el nivel de la poblacion y aumentar la cantidad de industrias
function addCapitalIndustrial(capitalIndustrial) {
    capitalIndustrial = capitalIndustrial + Math.floor(Math.random() * 25000) + 1;
    return capitalIndustrial;
}

//Esta funcion se encarga de aumentar la cantida actual de industrias en un rango de 1-5
function addIndustrias(cantidadIndustrias) {
    cantidadIndustrias = cantidadIndustrias + Math.floor(Math.random() * 5) + 1;
    return cantidadIndustrias;
}

//Esta funcion se encarga de disminuir en una cantidad aleatoria la cantidad de capital industrial y almacena la cantidad de disminucion en la variable
//cantidadDisminucionCapitalIndustrial y almacena la cantidad de veces que se disminuyo el capital industrial en la variable cantidadContaminacionIndustrial
//Y disminuye la cantidad de industrias
function removeCapital(capitalIndustrial) {
    capitalIndustrialtemp = Math.floor(Math.random() * 1000) + 1;
    capitalIndustrial = capitalIndustrial - capitalIndustrialtemp;
    cantidadDisminucionCapitalIndustrial = cantidadDisminucionCapitalIndustrial + capitalIndustrialtemp;
    cantidadContaminacionIndustrial = cantidadContaminacionIndustrial + 1;
    return [capitalIndustrial, cantidadDisminucionCapitalIndustrial, cantidadContaminacionIndustrial];
}

//Esta funcion se encarga de disminuir la cantidad de industrias en un rango de 1-5
function removeIndustrias(cantidadIndustrias) {
    cantidadIndustrias = cantidadIndustrias - Math.floor(Math.random() * 5) + 1;
    return cantidadIndustrias;
}

//Esta funcion se encarga de refrescar los cambios en la interfaz grafica
function refrescarPantalla(poblacion, nivelContaminacion, capitalIndustrial, cantidadIndustrias, tasaCrecimientoPoblacional) {
    document.getElementById("cantidadPoblacion").innerHTML = "Poblacion actual: " + poblacion;
    document.getElementById("tasaCrecimientoPoblacional").innerHTML = "Tasa de crecimiento poblacional: " + tasaCrecimientoPoblacional.toFixed(2) + "%";
    document.getElementById("cantidadIndustrias").innerHTML = "Cantidad de industrias: " + cantidadIndustrias;
    document.getElementById("capitalIndustrias").innerHTML = "Capital conjunto de las industrias: " + capitalIndustrial;
    document.getElementById("nivelContaminacion").innerHTML ="Nivel de contaminacion actual: " + nivelContaminacion;
}

//Esta funcion se encarga de mostrar los resultados de la simulacion
function mostrarResultadosFinales(vecesDisminucionPoblacion, cantidadDisminucionPoblacion, cantidadDisminucionCapitalIndustrial, cantidadContaminacionIndustrial) {
    document.getElementById("vecesDisminucionPoblacion").innerHTML = "Cantidad de veces que disminuyo la poblacion: " + vecesDisminucionPoblacion;
    document.getElementById("cantidadDisminucionPoblacion").innerHTML = "Cantidad de poblacion disminuida: " + cantidadDisminucionPoblacion;
    document.getElementById("cantidadDisminucionCapitalIndustrial").innerHTML = "Cantidad de capital disminuido: " + cantidadDisminucionCapitalIndustrial;
    document.getElementById("cantidadContaminacionIndustrial").innerHTML = "Cantidad de contaminacion aumentada por industrias: " + cantidadContaminacionIndustrial;
    document.getElementById("simulacionPrincipal").className = "hidden";
    document.getElementById("resultadosFinales").className = "";
}

//Esta funcion se encarga de realizar una simulacion por 15 segundos y luego imprime los resultados
function simulacion() {
    var poblacion = 0;
    var tasaCrecimientoPoblacional = 0;
    var cantidadDisminucionPoblacion = 0;
    var vecesDisminucionPoblacion = 0;
    var nivelContaminacion = 0;
    var cantidadIndustrias = 0;
    var capitalIndustrial = 0;
    var cantidadDisminucionCapitalIndustrial = 0;
    var cantidadContaminacionIndustrial = 0;

    setInterval(function() {
        poblacion = addPeople(poblacion);
        cantidadIndustrias = addIndustrias(cantidadIndustrias);
        capitalIndustrial = addCapitalIndustrial(capitalIndustrial);
        nivelContaminacion = addContaminacion(nivelContaminacion);
        [poblacion, cantidadDisminucionPoblacion, vecesDisminucionPoblacion] = removePeople(poblacion);
        tasaCrecimientoPoblacional = calcularTasaCrecimientoPoblacional(cantidadDisminucionPoblacion, poblacion);
        [capitalIndustrial, cantidadDisminucionCapitalIndustrial, cantidadContaminacionIndustrial] = removeCapital(capitalIndustrial, cantidadDisminucionCapitalIndustrial, cantidadContaminacionIndustrial, cantidadIndustrias);
        cantidadIndustrias = removeIndustrias(cantidadIndustrias);
        refrescarPantalla(poblacion, nivelContaminacion, capitalIndustrial, cantidadIndustrias, tasaCrecimientoPoblacional);
    }, 2000);
}

//Esta funcion limpia las variables del programa
function limpiarVariables() {
    var poblacion = 0;
    var tasaCrecimientoPoblacional = 0;
    var cantidadDisminucionPoblacion = 0;
    var vecesDisminucionPoblacion = 0;
    var nivelContaminacion = 0;
    var cantidadIndustrias = 0;
    var capitalIndustrial = 0;
    var cantidadDisminucionCapitalIndustrial = 0;
    var cantidadContaminacionIndustrial = 0;
}

//Esta funcion se encarga de limpiar la interfaz grafica
function limpiarPantalla() {
    document.getElementById("cantidadPoblacion").innerHTML = "Poblacion actual: 0";
    document.getElementById("tasaCrecimientoPoblacional").innerHTML = "Tasa de crecimiento poblacional: 0%";
    document.getElementById("cantidadIndustrias").innerHTML = "Cantidad de industrias: 0";
    document.getElementById("capitalIndustrias").innerHTML = "Capital conjunto de las industrias: 0";
    document.getElementById("nivelContaminacion").innerHTML ="Nivel de contaminacion actual: 0";
}

//Esta funcion se encarga de reinciializar la simulacion
function reiniciarSimulacion() {
    limpiarVariables();
    limpiarPantalla();
    clearInterval(simulacion);
    simulacion();
}    

//Esta funcion para la simulacion y muestra los resultados
function pararSimulacion() {
    clearInterval(simulacion);
    mostrarResultadosFinales(vecesDisminucionPoblacion, cantidadDisminucionPoblacion, cantidadDisminucionCapitalIndustrial, cantidadContaminacionIndustrial);
}