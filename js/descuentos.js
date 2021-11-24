//Variables
const btnGetTotal = document.getElementById('btnTotal');
const spanResult = document.querySelector('#result-descuento');

const cupones = [
    {
        name: 'CUPON1',
        porcentaje: 10
    },
    {
        name: 'CUPON2',
        porcentaje: 15
    },
    {
        name: 'CUPON3',
        porcentaje: 20
    }
];


//Funciones
function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
    
}

//Listener Click
btnGetTotal.addEventListener('click', () => {

    const precioOriginal = document.getElementById('inputPrecio').value;
    const cuponDescuento = document.getElementById('inputDescuento').value;

    const porcentajeCupon = cupones.find(cupon => cupon.name === cuponDescuento);

    if (porcentajeCupon !== undefined) {

        const totalPrecioDescuento = calcularPrecioConDescuento(precioOriginal, porcentajeCupon.porcentaje);

        spanResult.parentElement.classList.add('active');
        spanResult.firstElementChild.textContent = `Total: $${totalPrecioDescuento}`;

    } else {
        
        spanResult.parentElement.classList.add('active');
        spanResult.firstElementChild.innerHTML = `No es un cupón válido<br>Total: $${precioOriginal}`;

    }

});