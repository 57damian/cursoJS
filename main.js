let pedido = 1;
let precio = 150;
let total = 0;

let empanada1 = '';
let empanada2 = '';
let empanada3 = '';
let cantidad = 0;
let resultado = 0;

let suma1 = 0;
let suma2 = 0;
let suma3 = 0;

while (pedido != 0) {
    let gustoDeEmpanada = prompt('escriba 1 para empanadas de carne, escriba 2 para empanadas de pollo, escriba 3 para empanadas de jamon y queso');




    switch (gustoDeEmpanada) {
        case '1':
            empanada1 = 'carne'
            cantidad = parseInt(prompt(`ingrese la cantidad de empanadas de ${empanada1}`));

            suma1 = suma1 + cantidad;
            
            break;
        case '2':
            empanada2 = 'pollo'
            cantidad = parseInt(prompt(`ingrese la cantidad de empanadas de ${empanada2}`));
            suma2 = suma2 + cantidad;

            break;
        case '3':
            empanada3 = 'jamon y queso'
            cantidad = parseInt(prompt(`ingrese la cantidad de empanadas de ${empanada3}`));
            suma3 = suma3 + cantidad;

            break;

        default:
            alert('el gusto de la empanada no existe');
            break;
    }   

    

    pedido = parseInt(prompt('precione 0 para terminar con la seleccion o cualquier 1 para seguir agregar mas empanadas'));
}

if (suma1 > 0) {
    alert(`eligio ${suma1} empanadas de carne`)
}
if (suma2 > 0) {
    alert(`eligio ${suma2} empanadas de pollo`)
}
if (suma3 > 0) {
    alert(`eligio ${suma3} empanadas de jamon y queso`)
}

const contarEmpandas = (suma1,suma2,suma3) =>{
    return  ((suma1 + suma2 + suma3) * precio)
}
resultado = parseFloat(contarEmpandas(suma1,suma2,suma3))

alert(`ud debe pagar ${resultado}`);