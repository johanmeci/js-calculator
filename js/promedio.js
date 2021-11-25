//Variables
const tipoCalculo = document.getElementById('selectTipo');
//{1: Promedio, 2: Moda, 3: Mediana}
const tituloCalculo = document.getElementById('section-title');


//Funciones
function calcularPMM() {
    
    let resultCalculo = 0;
    let listaNumerica = document.getElementById('inputLista').value;
    listaNumerica = listaNumerica.split(',');
    listaNumerica = listaNumerica.map(Number);

    if (tipoCalculo.value === '1') {

        resultCalculo = calcularPromedio(listaNumerica);
        console.log('Promedio: ' + resultCalculo);

    } else if(tipoCalculo.value === '2') {

        const objCount = {}

        listaNumerica.map( elemento => {
            if (objCount[elemento]) {
                objCount[elemento] += 1;
            } else {
                objCount[elemento] = 1;
            }
        });

        const arrayCount = Object.entries(objCount).sort( (a, b) => a[1] - b[1]
        );

        resultCalculo = arrayCount[arrayCount.length - 1];
        console.log(`Moda: ${resultCalculo[0]} - Cantidad: ${resultCalculo[1]}`);

    } else if(tipoCalculo.value === '3') {

        listaNumerica.sort( (a, b) => a - b );
        
        const mitadLista = Math.floor(listaNumerica.length / 2);
        const elemento1 = listaNumerica[mitadLista - 1];
        const elemento2 = listaNumerica[mitadLista];

        if (listaNumerica.length % 2 === 0) {
            resultCalculo = calcularPromedio([elemento1, elemento2]);
        } else {
            resultCalculo = listaNumerica[mitadLista];
        }
        
        console.log('Mediana: ' + resultCalculo);

    }
    
}

//Complementarias
tipoCalculo.onchange = () => {

    if (tipoCalculo.value === '1') {

        tituloCalculo.textContent = 'Promedio';

    } else if(tipoCalculo.value === '2') {

        tituloCalculo.textContent = 'Moda';

    } else if(tipoCalculo.value === '3') {

        tituloCalculo.textContent = 'Mediana';

    }

}

const calcularPromedio = (listaNumerica) => {

    let resultSuma = listaNumerica.reduce( (total = 0, numero) => total + numero, 0 );
    resultSuma = Math.round(resultSuma / listaNumerica.length);

    return resultSuma;

}