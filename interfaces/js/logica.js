function registrar(){
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const documento = document.getElementById("documento").value
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const dataRegistro = {
        documento: documento,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        direccion: direccion,
        fechaNacimiento: fechaNacimiento,
        tipoDocumento: tipoDocumento,
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(dataRegistro);

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("datos registrados")
    
}