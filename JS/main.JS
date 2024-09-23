// Función para ingresar las filas de producción usando prompts
function ingresarFilasProduccion() {
    let filas = [];
    let continuar = true;

    while (continuar) {
        const numFila = prompt("Ingresar el N° de la fila:");
        const produccion = prompt("Ingresar la cantidad producida:");

        // Validar que la producción sea un número válido
        if (isNaN(produccion) || produccion < 0) {
            console.log("Por favor, ingrese una cantidad numérica válida y mayor o igual a 0.");
        } else {
            filas.push({ numFila: numFila, produccion: parseFloat(produccion) });
        }

        // Preguntar si se quiere agregar otra fila
        const respuesta = prompt("¿Quiere agregar otra fila? (Si/No)").toLowerCase();
        continuar = respuesta === 'si';
    }

    return filas;
}

// Función para encontrar la(s) fila(s) más productiva(s)
function encontrarMejorFila(filas) {
    const maxProduccion = Math.max(...filas.map(fila => fila.produccion));
    return filas.filter(fila => fila.produccion === maxProduccion);
}

// Función para encontrar la(s) fila(s) menos productiva(s)
function encontrarPeorFila(filas) {
    const minProduccion = Math.min(...filas.map(fila => fila.produccion));
    return filas.filter(fila => fila.produccion === minProduccion);
}

// Función para mostrar filas productivas y no productivas
function mostrarFilasPorProductividad(filas) {
    const productivos = filas.filter(fila => fila.produccion >= 50);
    const noProductivos = filas.filter(fila => fila.produccion < 50);

    console.log("<-- Filas más productivas -->");
    productivos.forEach(fila => {
        console.log(`Fila N° ${fila.numFila} - Cantidad producida: ${fila.produccion}`);
    });

    console.log("<-- Filas menos productivas -->");
    noProductivos.forEach(fila => {
        console.log(`Fila N° ${fila.numFila} - Cantidad producida: ${fila.produccion}`);
    });
}

// Función para calcular el promedio de producción
function calcularPromedioProduccion(filas) {
    const totalProduccion = filas.reduce((sum, fila) => sum + fila.produccion, 0);
    const promedio = totalProduccion / filas.length;
    return promedio;
}

// Función principal del sistema de productividad
function sistemaDeProductividad() {
    const filasProduccion = ingresarFilasProduccion();

    if (filasProduccion.length === 0) {
        console.log("No se ingresaron filas de producción.");
        return;
    }

    const mejoresFilas = encontrarMejorFila(filasProduccion);
    const peoresFilas = encontrarPeorFila(filasProduccion);

    console.log("<-- Mejores Filas -->");
    mejoresFilas.forEach(fila => {
        console.log(`Fila N° ${fila.numFila} - Producción: ${fila.produccion}`);
    });

    console.log("<-- Peores Filas -->");
    peoresFilas.forEach(fila => {
        console.log(`Fila N° ${fila.numFila} - Producción: ${fila.produccion}`);
    });

    mostrarFilasPorProductividad(filasProduccion);

    // Calcular y mostrar el promedio de producción
    const promedioProduccion = calcularPromedioProduccion(filasProduccion);
    console.log(`Promedio de producción total: ${promedioProduccion.toFixed(2)}`);
}

// Ejecutar sistema
sistemaDeProductividad();
