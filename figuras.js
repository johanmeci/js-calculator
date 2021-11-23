//Cuadrado
console.group('Cuadrado');

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Triángulo
console.group('Triángulo');

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 + lado2 + base;
}

// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Círculo
console.group('Círculo');

function diametroCirculo(radio) { 
    return radio * 2;
}

const pi = Math.PI;
function perimetroCirculo(radio) { 
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) { 
    return (radio * radio) * pi;
}

console.groupEnd();