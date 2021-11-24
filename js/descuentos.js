//Variables
const btnGetTotal = document.getElementById('btnTotal');
const spanResult = document.querySelector('#result-descuento');


//Funciones
function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
    
}

//Listener Click
btnGetTotal.addEventListener('click', () => {

    const precioOriginal = document.getElementById('inputPrecio').value;
    const porcentajeDescuento = Number.parseInt(document.getElementById('inputDescuento').value);

    const totalPrecioDescuento = calcularPrecioConDescuento(precioOriginal, porcentajeDescuento);

    spanResult.parentElement.classList.add('active');
    spanResult.firstElementChild.textContent = `Total: $${totalPrecioDescuento}`;

});