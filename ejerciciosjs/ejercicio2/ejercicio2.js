const usuarios =[{cedula: '123456789', nombre: 'Juan', telefono: '1234567890', edad: 25, estado: 'aceptado'},
{cedula: '987654321', nombre: 'maria', telefono: '0987654321', edad: 17, estado: 'rechazado'}];
let rechazados = 0;
let aceptados = 0;


function agregarUsuario(){
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const edad = document.getElementById('edad').value;

    // Validamos el usuario
    const usuarioExistente = usuarios.find(usuario => usuario.cedula === cedula);
    if(usuarioExistente){
        alert('el usuario ya esta registrado');
        return;
    }

    let estado;

    // Validacion edad
    if(edad < 18){
        rechazados++;
        document.getElementById('cuentaRechazados').textContent = rechazados;
        estado = 'rechazado';
    }else{
        aceptados++;
        document.getElementById('cuentaAceptados').textContent =aceptados;
        estado = 'aceptado';
    }


    const usuario = {cedula, nombre, telefono, edad,estado};
    usuarios.push(usuario);


    const fila = document.createElement('tr');

    const tablaCedula = document.createElement('td');
    tablaCedula.textContent = cedula;
    fila.appendChild(tablaCedula)

    const tablaNombre= document.createElement('td');
    tablaNombre.textContent = nombre;
    fila.appendChild(tablaNombre)

    const tablaTelefono = document.createElement('td');
    tablaTelefono.textContent = telefono;
    fila.appendChild(tablaTelefono)

    const tablaEdad = document.createElement('td');
    tablaEdad.textContent = edad;
    fila.appendChild(tablaEdad)

    const tablaEstado= document.createElement('td');
    tablaEstado.textContent = estado;
    fila.appendChild(tablaEstado)

    document.getElementById('tabla').appendChild(fila);

            document.getElementById('cedula').value = '';
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('edad').value = '';


}