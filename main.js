/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
let km;
let registrado;
let precio; 

km = distancia.value;
registrado = registrada.value;
 
if (km > 0 && km < 3) {
  if (registrado === "si"){
      precio = 715.24
      
     
    }
    else{
      precio = 1137.23
    }}
  
else if (km > 3 && km < 6) {
      if (registrado === "si"){
        precio = 794.74
        
       
      }
      else{
        precio = 1263.64
      }}
else if (km > 12 && km < 27) {
        if (registrado === "si"){
          precio = 855.97
          
         
        }
        else{
          precio = 1360.99
        }
if (km > 6 && km < 12) {
    if (registrado === "si"){
      precio = 917.24
      
     
    }
    else{
      precio = 1458.41
    }
  }
}

  tarifa.innerText = precio;

}); 
