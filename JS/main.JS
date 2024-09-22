// Ingresar las n° de fila de produccion y el numero de empleados trabajando en ella
function ingresarFilaProduccion(){
let filas = [];
let continuar = true;

while (continuar === true) {
    const numfila = prompt("Ingresar el N° de la fila.");
    const produccion = prompt("Ingresar la cantidad Producida.");

    if(isNaN(produccion)){
        alert("Ingresar una cantidad numerica valida.");
    } else{
        filas.push({numfila: numfila, produccion: produccion});
    }

    const respuesta = prompt("¿Quiere agregar otra Fila? Si/No").toLowerCase();
    if(respuesta === "si") {
        continuar = true;
    } else{
        continuar = false;
    }
}
return filas;
}

// Calcular el promedio de productividad
function calcularPromedio(filas){
    const suma = filas.reduce((acc, fila) => acc + fila.produccion, 0);
    const promedio = suma / filas.length;
    return promedio;
}

//Encontrar la fila mas productiva
function mejorFila(filas) {
    let mejorProduccion = filas[0].produccion;

        filas.forEach(fila => {
        if (fila.produccion > mejorProduccion) {
            mejorProduccion = fila.produccion;
        }
    });

    let mejores = filas.filter((fila) => fila.produccion === mejorProduccion);

    return mejores;
}

// Encontrar la fila menos producctiva
function peorFila(filas) {

    let peorFila = filas[0].produccion;

    filas.forEach(fila => {
        if (fila.produccion < peorFila) {
            peorFila = fila.produccion;
        }
    });

    let peores = filas.filter((fila) => fila.produccion === peorFila);

    return peores;
}

// Mostrar Produccion Alta y Produccion Baja
function mostrarProductivosYNoProducctivos(filas) {
    let productivos = [];
    let noproductivos = [];

    filas.forEach((fila) => {
        if (fila.produccion >= 100) {
            productivos.push(fila);
        } else {
            noproductivos.push(fila);
        }
    });

    console.log("<-- Filas mas productivas -->");
    productivos.forEach((fila) => {
        console.log("Fila N°" + fila.numfila + "cantidad producida" + fila.produccion);
    })

    console.log("<-- Filas menos productivas -->");
    noproductivos.forEach((fila) => {
        console.log("Fila N°" + fila.numfila + "cantidad producida" + fila.produccion);
    })
}

// Función principal
function sistemaDeProductividad() {
    const filaprodu = ingresarFilaProduccion();

    if (filaprodu.length === 0) {
        console.log("No hay Filas");
        return;
    }

    const promedio = calcularPromedio(filaprodu);
    const mejores = mejorFila(filaprodu);
    const peores = peorFila(filaprodu);

    console.log("<-- Promedio de Produccion -->");
    console.log(promedio.toFixed(2));

    console.log("<-- Mejores Filas -->");
    mejores.forEach((fila) => console.log("Fila N°" + fila.numfila + "cantidad producida" + fila.produccion));

    console.log("<-- Peores Filas -->");
    peores.forEach((fila) => console.log("Fila N°" + fila.numfila + "cantidad producida" + fila.produccion))
    console.table(peores);
    
    mostrarProductivosYNoProducctivos(filaprodu);

}

sistemaDeProductividad();