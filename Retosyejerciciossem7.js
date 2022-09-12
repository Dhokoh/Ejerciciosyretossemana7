/*
1. Eliminar un elemento de un array, dado un índice.
eliminarIndice([1,2,3,4,5], 2)
Esperado:   [1,2,4,5]

2.Determinar si un elemento existe dentro de un array.
busquedaArray([1, ‘hola’, ‘adiós’, 4, 100], ‘hola’)
Esperado: Se encontró el elemento

3.Crear un arreglo con objetos y determinar si existe un valor determinado en las propiedades de los objetos.

let infoLibros = [{ titulo: “El Quijote”, autor: “Miguel C.”},{ titulo: “Señor de las moscas”, autor: “William G.”}]

busquedaObjeto(infoLibros, “Miguel C.”) 
Esperado: Se encontró el elemento

busquedaObjeto(infoLibros, “H. G. Wells”) 
Esperado: No se encontró el elemento

4. Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
add_elemento(array, new_element, max_size)

Considerar lo siguiente: 
* Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, el nuevo elemento se agrega al final del arreglo
add_elemento([1, 2, 3, 4], 10, 5) -> [1, 2, 3, 4, 10]
* Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar al último elemento del arreglo
add_elemento([1, 2, 3, 4, 5], 10, 5) -> [1, 2, 3, 4, 10]
* Si el elemento ya existe en el arreglo, se reemplaza al final.
add_elemento([1, 2, 3, 4], 3, 5) -> [1, 2, 4, 3]
*/

//1. Eliminar un elemento de un array dado un indice

function elim_elemento(array, index){
    if (index > array.length){
        return `Indice fuera del array, el indice debes estar entre 0 y ${array.length}`
    }
    else{
        for (let i = 0; i < array.length; i ++){
            if (i === index){
                array.splice(i, 1)
            }
        }
        return array
    }
}

// let array_ej1 = [1, 2, 3, "hola", true, null]
// console.log(elim_elemento(array_ej1, 9))
// console.log(elim_elemento(array_ej1, 3))

function elim_elemento_nosplice(array, index){
    let new_array = []
    if (index > array.length){
        return `Indice fuera del array, el indice debes estar entre 0 y ${array.length}`
    }
    else{
        for (let i = 0; i < array.length; i ++){
            if (index == i){
                continue;
            }
            else{
                new_array.push(array[i])
            }
        }
        return new_array
    }
}

// let array_ej1a = [1, 2, 3, "hola", true, null]
// console.log(elim_elemento_nosplice(array_ej1a, 9))
// console.log(elim_elemento_nosplice(array_ej1a, 3))

//2. Determinar si un elemento existe dentro de un array.

array2search = [1, "hola", "adiós", 4, 100];
function encontrar_elemento(array, elemento){
    for (let i = 0; i < array.length; i ++){
        if (array[i] === elemento){
            return `Elemento ${elemento} encontrado en indice ${i}`
        }
    }
    return "Elemento no encontrado"
}
// console.log(array2search)
// console.log(encontrar_elemento(array2search,"hola"))
// console.log(encontrar_elemento(array2search, 1))
// console.log(encontrar_elemento(array2search,"adiós"))

//3.Crear un arreglo con objetos y determinar si existe un valor determinado en las propiedades de los objetos.

function encontrar_valor(array, value){
    for (let i = 0; i < array.length; i ++){
        current_obj = array[i]
        for (let key in current_obj)
        {
            if (current_obj[key] == value){
                return `se encontro el valor ${value} en el array`
            }
        }
    }
    return  `El valor ${value} no fue encontrado`
}

// let infoLibros = [{ titulo: "El Quijote", autor: "Miguel C."},{ titulo: "Señor de las moscas", autor: "William G."}]
// console.log(encontrar_valor(infoLibros, "Miguel C."))
// console.log(encontrar_valor(infoLibros, "H. G. Wells"))

/*4. Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
add_elemento(array, new_element, max_size)

Considerar lo siguiente: 
* Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, el nuevo elemento se agrega al final del arreglo
add_elemento([1, 2, 3, 4], 10, 5) -> [1, 2, 3, 4, 10]
* Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar al último elemento del arreglo
add_elemento([1, 2, 3, 4, 5], 10, 5) -> [1, 2, 3, 4, 10]
* Si el elemento ya existe en el arreglo, se reemplaza al final.
add_elemento([1, 2, 3, 4], 3, 5) -> [1, 2, 4, 3]*/

let test_array = [1, 2, 3]

function elem_exists(array, elem){
    for (let i = 0; i < array.length; i ++){
        if (array[i] === elem){
            return true
        }
    }
    return false;
}

function add_elemento(array, new_element, max_size){
    //Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, el nuevo elemento se agrega al final del arreglo
    if (!elem_exists(array, new_element) && array.length != max_size){
        array.push(new_element)
        return array
    }
    //Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar al último elemento del arreglo
    else if (!elem_exists(array, new_element) && array.length === max_size){
        array.pop()
        array.push(new_element)
        return array
    }
    //Si el elemento ya existe en el arreglo, se reemplaza al final.
    else if (elem_exists(array, new_element)){
        array.pop()
        array.push(new_element)
        return array
    }
}

// console.log(elem_exists(test_array, 2))
// console.log(elem_exists(test_array, 19))
//caso 1.
//console.log(add_elemento(test_array, 4, 5))
//caso 2.
//console.log(add_elemento(test_array, 4, 3))
//caso 3.
//console.log(add_elemento(test_array, 2, 5))
