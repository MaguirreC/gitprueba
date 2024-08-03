const productos = []

const tabla = document.getElementById('tablaProductos')

function agregarProducto(){
    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value);

    const total = precio - (precio * descuento / 100)

    const fila = document.createElement('tr')

    const nombProducto = document.createElement('td')
    nombProducto.textContent= producto
    fila.appendChild(nombProducto)

    const precioProducto = document.createElement('td')
    precioProducto.textContent= precio
    fila.appendChild(precioProducto)

    const descuentoProducto = document.createElement('td')
    descuentoProducto.textContent = descuento
    fila.appendChild(descuentoProducto)

    const totalProducto = document.createElement('td');
            totalProducto.textContent = total.toFixed(2);
            fila.appendChild(totalProducto);


    tabla.appendChild(fila)
    
    productos.push({producto,precio,descuento,total});


    document.getElementById('producto').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('descuento').value = '';


}