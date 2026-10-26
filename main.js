/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let km
  let precio
  let registrado
  let colectivo
  let tarifa

  tarifa = viejopete.value
  colectivo = bondi.value
  km = distancia.value
  registrado = registrada.value

if (colectivo === "CABA")
  if (km > 0, km < 3) {
    if (registrado === "si"){
      if (tarifa === "si"){
        precio = 414.22
      }

        else {
          precio =  920,48

        }
        }

        else {
        precio =  1.463,56
        }
  }  
  else if (km > 3, km < 6) {
    if (registrado === "si"){
          precio = 1.022,81
          }
          else {
            precio = 1626,27
          }

  }
  else if (km > 6, km < 12){
    if (registrado === "si"){
      precio =  1.101,59
    }
    else {
      precio =  1.751,53
    }    
  
  }
  else if (km > 12, km < 27){
    if (registrado === "si"){
      precio = 1.180,44
    }
    else{
      precio =  1.876,90
    }
  }
if (colectivo === Provincia)
  if (km > 0, km < 3) {
    if (registrado === "si"){
        precio = 920,48
        }
        else {
          precio =  1.463,56
        }
  }  
  else if (km > 3, km < 6) {
    if (registrado === "si"){
          precio = 1.022,81
          }
          else {
            precio = 1626,27
          }

  }
  else if (km > 6, km < 12){
    if (registrado === "si"){
      precio =  1.101,59
    }
    else {
      precio =  1.751,53
    }    
  
  }
  else if (km > 12, km < 27){
    if (registrado === "si"){
      precio = 1.180,44
    }
    else{
      precio =  6969
    }
  }
  tarifa.innerText = precio;
}); 
