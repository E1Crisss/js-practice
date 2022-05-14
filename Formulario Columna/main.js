/* Desarrollar un sistema que permita al usuario realizar un seguimiento de sus ingresos y egresos monetarios.
Para esto, el usuario debe poder seleccionar si el dato que está cargando es un INGRESO o un EGRESO. Seguidamente, debe
poder ingresar una descripción del movimiento que está ingresando (ej. honorarios, sueldo, comprar milanesas, etc). Por
último, debe poder cargar el importe del movimiento.

Al final, debe tocar un botón que guardará la información.

Al tocar el botón, se mostrarán en pantalla los movimientos en forma de tabla. Los movimiento del tipo INGRESO deben
tener un fondo de color verde (#4cd463) y los de EGRESO, color rojo (#e8574d).

En el pie de la tabla, se debe mostrar un resumen de la tabla, sumando todos los ingresos y restandole los egresos. Si
el monto final es > 0, debe tener el color rojo y si es mayor, el verde. */

const   typeField = document.querySelector('#type'),
        descriptionField = document.querySelector('#description'),
        amountField = document.querySelector('#amount'),
        dateField = document.querySelector('#date'),
        btnSm = document.querySelector('button'),
        tbody = document.querySelector('tbody'),
        movimiento = [];

const generarMovimiento = () =>{
    const objeto = {
        type: typeField.value,
        description: typeField.value,
        amount: Number(amountField.value),
        date: dateField.value.split('-').reverse().join('/'), //dar vuelta el date
    };
    return objeto;
}

const ImprimirMovimiento = (array,target) => {
    array.forEach((movimiento) => {
        const row = document.createElement('tr');
        const keys = Object.keys(movimiento);
        keys.forEach((key) => {
            const td = document.createElement('td');
            const text = document.createTextNode(movimiento[key]);
            td.appendChild(text);
            row.appendChild(td);
        });
    });
    target.appendChild(row);
};

const limpiarMovimiento = () => {
    [descriptionField,amountField,dateField].forEach((input) =>{
        input.value = '';
    })
};

const limpiarTabla = () => {
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
};
        
btnSm.addEventListener('click',(e)=> {
    const nuevoMoviento = generarMovimiento();
    limpiarTabla();
    movimiento.push(nuevoMoviento);
    ImprimirMovimiento(movimiento, tbody);
    limpiarMovimiento();
    
})