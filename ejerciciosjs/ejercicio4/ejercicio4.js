function calcularCredito(){
    const valor = parseFloat(document.getElementById('valor').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const lineaCredito = document.getElementById('lineaCredito').value;


    let interesMensual;

    if(lineaCredito === 'libre'){
        interesMensual = 2.5;
    }else if(lineaCredito === 'libranza'){
        interesMensual = 2.9
    }

    if(cuotas < 6){
        interesMensual -= 0.2;

    }else if (cuotas > 12 && cuotas < 24){
        interesMensual -= 0.4;
    }else if(cuotas >= 24){
        interesMensual -= 0.7;
    }

    interesMensual /= 100;
            const cuota = (valor * interesMensual * Math.pow(1 + interesMensual, cuotas)) / (Math.pow(1 + interesMensual, cuotas) - 1);
            const resultado = `El valor de cada cuota es: $${cuota.toFixed(2)}`;

            document.getElementById('resultado').textContent = resultado;
}