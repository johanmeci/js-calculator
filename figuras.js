//Cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);

console.groupEnd();


//Triángulo
console.group('Triángulo');

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTriangulo}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm2`);

console.groupEnd();


//Círculo
console.group('Círculo');

const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log(`El área del círculo es: ${areaCirculo}cm2`);

console.groupEnd();