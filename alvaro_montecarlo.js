//En este ejercicio, nos proponemos desarrollar un programa que calcule el valor de PI utilizando la simulación de Montecarlo, 
//un método que se basa en la generación de números aleatorios. Para entender el concepto, imagina un cuadrado de lado 2, 
//centrado en el origen de un sistema de coordenadas. Dentro de este cuadrado, se inscribe un círculo de radio 1.
//La clave de este enfoque radica en observar cómo se distribuyen los puntos aleatorios dentro del cuadrado en relación con el
//círculo. A medida que generamos un número significativo de puntos, podemos contar cuántos de ellos caen dentro del círculo. 
//La relación entre la cantidad de puntos dentro del círculo y el total de puntos generados se aproxima a π4\frac{\pi}{4}4π​. 
//Esta relación nos permitirá estimar el valor de PI a partir de la proporción de puntos que se encuentran en el interior del
//círculo.

function estimarPI(puntos) {
    let puntos_Dentro_Circulo = 0;

    for (let i = 0; i < puntos; i++) {
        const x = Math.random() * 2 - 1; 
        const y = Math.random() * 2 - 1; 

        if (x * x + y * y <= 1) {
            puntos_Dentro_Circulo++;
        }
    }

    return (puntos_Dentro_Circulo / puntos) * 4;
}

const puntos = 30000;
console.log(estimarPI(puntos));

