/* Crear un programa que pida al usuario los elementos que hay en stock en 3 almacenes.
 El programa debe devolver un array con los elementos que se tienen que reponer. 
 Esto sucede cuando un elemento no está en al menos 2 almacenes a la vez.
 
 -----------------------------------------------------------------------
 
Input: 
auto bici moto 
bici moto triciclo
moto patineta patineta

Output:
[ 'auto', 'triciclo', 'patineta' ]
 */
 // ----------------------------------------------------------------------------

// Pido los datos de los almacenes al usuario
let data1 = prompt('Ingrese los articulos del primer almacen separados por un espacio: ');
let data2 = prompt('Ingrese los articulos del segundo almacen separados por un espacio: ');
let data3 = prompt('Ingrese los articulos del tercer almacen separados por un espacio: ');

// Convierto a minusculas todos los elementos y creo los arrays con los datos
let a1 = data1.toLowerCase().split(' ');
let a2 = data2.toLowerCase().split(' ');
let a3 = data3.toLowerCase().split(' ');

let arr = [];

// Creo función para compara el primer parametro (array) con los otros 2.
function compareArrays(a1, a2, a3) {
    let item ;
    let count = 0;
    
    for (let i = 0 ; i < a1.length ; i++) {
        item = a1[i];
        //console.log(item);
        for (let j = 0 ; j < a2.length ; j++) {
            if (item != a2[j]) {
                count++;
            }
        }
        //console.log(count);
        if (count == a2.length) {
            count = 0;
            for (let k = 0 ; k < a3.length ; k++) {
                if (item != a3[k]) {
                    count++;
                }
                if(count == a3.length && arr.indexOf(item) == -1) {
                    arr.push(item);
                }
            }
        }

        count = 0;
    }
    
    return arr;
}

function getItemToRefill(a1, a2, a3) {
    //llamo a la función antes creada alternando el primer paramtero (array) a comparar.
    compareArrays(a1, a2, a3);
    compareArrays(a2, a1, a3);
    compareArrays(a3, a2, a1);
    
    console.log("Los elementos que se necesitan reponer son: ");
    console.log(arr);
}

getItemToRefill(a1, a2, a3);
