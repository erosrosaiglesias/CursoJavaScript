

/* Variables */
let monto = parseFloat(prompt("Ingrese el monto: Maximo $500.000"));   

while ((monto <= 0 ) || (monto >= 500000)) {      /* si el plazo es mayor o igual, menor o igual a quinientos mil es valido, si no se volvera a pedir  */

      monto = parseFloat(prompt("Vuelva a ingresar el monto: Maximo $500.000"));
} 


let plazo  = parseFloat(prompt("Ingrese la cantidad de cuotas, minimo 10, maximo 60"));

while ((plazo < 10) || (plazo > 60) ) {

    plazo  = parseFloat(prompt("La cantidad de cuotas debe ser minimo 10, maximo 60")); 
}

let cliente  = (prompt("Usted es cliente de nuestro Banco? Si lo es tendra una tasa preferencial."));

let tasa = 0;

if (cliente == "Si") {

    if ((plazo >=10) && ( plazo <=30)) {

         tasa = 15;
    }
    else {

        tasa = 30;
    }

    let cuota = parseFloat((monto / plazo) + tasa);
    let total = parseFloat(cuota * plazo);
    
    alert ("Le podemos dar un credito por " + monto + " en " + plazo + " cuotas de, " + cuota + " adeudando " + total);  
    
}
else {

    alert ("Debe ser cliente del banco para acceder a un credito")
}






 








 





