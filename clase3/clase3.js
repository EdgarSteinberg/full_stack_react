

let valores = [2, 6, 9, 0, 8];

const miFuncion = (n, array) => {
    let nuevoArray = [...array];  // Se hace una copia del array original

    if (nuevoArray.includes(n)) {
        // Si el número ya existe, lo eliminamos
        nuevoArray = nuevoArray.filter(numero => numero !== n);
    } else {
        // Si el número no existe, lo agregamos
        nuevoArray.push(n);
    }

    return nuevoArray;  // Devolvemos el array modificado
};

// Ejemplos de uso
console.log(miFuncion(11, valores));  // [2, 6, 9, 0, 8, 11] (se agrega el 11)
console.log(miFuncion(6, valores));   // [2, 9, 0, 8] (se elimina el 6)
