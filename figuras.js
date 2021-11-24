//Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Círculo
const pi = Math.PI;

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * pi;
const areaCirculo = (radio) => (radio * radio) * pi;

//Funciones onclick
const spanResultCuadrado = document.querySelector('#result-cuadrado');
const spanResultTriangulo = document.querySelector('#result-triangulo');
const spanResultCirculo = document.querySelector('#result-circulo');

function calcularFigura(e) {

    let type = e.dataset.calc;
    let fig = e.dataset.fig;
    let result;

    if (fig === 'cuadrado') {

        const inputCuadrado = document.getElementById('inputCuadrado');

        switch (type) {
            case 'perimetro':
                result = perimetroCuadrado(inputCuadrado.value);
                break;
            case 'area':
                result = areaCuadrado(inputCuadrado.value);
                break;
            default:
                console.log('default');
                result = 0;
                break;
        }

        spanResultCuadrado.firstElementChild.textContent = `${type}:`;
        spanResultCuadrado.lastElementChild.textContent = `${result}cm`;

        spanResultCuadrado.parentElement.classList.add('active');
        
    } else if(fig === 'triangulo') {

        const inputTriangulo1 = Number.parseInt(document.getElementById('inputTriangulo1').value);
        const inputTriangulo2 = Number.parseInt(document.getElementById('inputTriangulo2').value);
        const inputTrianguloBase = Number.parseInt(document.getElementById('inputTrianguloBase').value);
        const inputTrianguloAltura = Number.parseInt(document.getElementById('inputTrianguloAltura').value);

        switch (type) {
            case 'perimetro':
                result = perimetroTriangulo(inputTriangulo1, inputTriangulo2, inputTrianguloBase);
                break;
            case 'area':
                result = areaTriangulo(inputTrianguloBase, inputTrianguloAltura);
                break;
            default:
                console.log('default');
                result = 0;
                break;
        }

        spanResultTriangulo.firstElementChild.textContent = `${type}:`;
        spanResultTriangulo.lastElementChild.textContent = `${result}cm`;

        spanResultTriangulo.parentElement.classList.add('active');

    } else if(fig === 'circulo') {

        const inputRadio = Number.parseInt(document.getElementById('inputCirculo').value);

        switch (type) {
            case 'perimetro':
                result = perimetroCirculo(inputRadio);
                break;
            case 'area':
                result = areaCirculo(inputRadio);
                break;
            default:
                console.log('default');
                result = 0;
                break;
        }

        spanResultCirculo.firstElementChild.textContent = `${type}:`;
        spanResultCirculo.lastElementChild.textContent = `${result.toFixed(2)}cm`;

        spanResultCirculo.parentElement.classList.add('active');

    } else {
        console.log('otra figura');
    }
    
}