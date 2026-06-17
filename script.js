// ========================================
// 1. Creación de nuestro primer objeto
// ========================================

const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg"
};

console.log("1. Objeto Persona:");
console.log(persona);


// ========================================
// 2. Agregando comportamiento (Método)
// ========================================

const personaConMetodo = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg",

    caminar() {
        console.log("Estoy caminando");
    }
};

console.log("2. Método Caminar:");
personaConMetodo.caminar();


// ========================================
// 3. Transformación de Objeto a JSON
// ========================================

const personaJSON = JSON.stringify(persona);

console.log("3. Objeto convertido a JSON:");
console.log(personaJSON);


// ========================================
// 4. Arreglo de Objetos
// ========================================

const listaEmpleados = [
    {
        nombre: "Juan Pérez",
        apellido: "López"
    },
    {
        nombre: "Ana",
        apellido: "González"
    },
    {
        nombre: "Pedro",
        apellido: "Sánchez"
    }
];

console.log("4. Lista de Empleados:");
console.log(listaEmpleados);


// ========================================
// 5.1 Uso de indexOf()
// ========================================

const frutas = [
    "Manzana",
    "Banana",
    "Naranja"
];

const posicionManzana = frutas.indexOf("Manzana");

console.log("5.1 Posición de Manzana:");
console.log(posicionManzana);


// ========================================
// 5.2 Uso de find()
// ========================================

const edades = [
    25,
    30,
    18,
    15
];

const primerMenor = edades.find(edad => edad < 20);

console.log("5.2 Primer número menor a 20:");
console.log(primerMenor);