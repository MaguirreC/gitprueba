function calcularTarifa(){

    const estrato = parseInt(document.getElementById('estrato').value);
    const consumo = parseFloat(document.getElementById('consumo').value);

    let tarifaMetroCubico;

    if(estrato === 1){
        tarifaMetroCubico = 1200;
    }else if(estrato === 2){
        tarifaMetroCubico = 2300;

    }else if(estrato === 3){
        tarifaMetroCubico = 3200;
    }
    
    let totalTarifa = tarifaMetroCubico * consumo;

    if( consumo > 20){
        const recargo = totalTarifa * 0.10;
        totalTarifa += recargo;
    }

    totalTarifa += 5800;
    const resultado = `Estrato: ${estrato}, Consumo: ${consumo} m³,cobro fijo : 5800, Tarifa= $${totalTarifa.toFixed(2)}`;
    
    document.getElementById('resultado').textContent = resultado;

}