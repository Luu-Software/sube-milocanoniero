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

  if (bondi === "CABA")
    if (km > 0, km < 3) { 
      if (registrado === "si"){
        if (tarifa === "si"){
          precio = 414.22
        }
  
          else {
            precio = 920.48
  
          }
          }
  
          else {
          precio = 1463.56
          }
    }  
    else if (km > 3, km < 6) { 
      if (registrado === "si"){
        if (tarifa === "si"){
          precio = 460.26
        }
  
          else {
            precio = 1022.81
  
          }
            }
            else {
              precio = 1626.27
            }
  
    }
    else if (km > 6, km < 12){ 
      if (registrado === "si"){
        if (tarifa === "si"){
          precio = 495.45
        }
        else {
  
          precio = 1101.59
  
            }    }
      else {
        precio = 1751.53
      }    
    
    }
    else if (km > 12, km < 27){ 
      if (registrado === "si"){
        if (tarifa === "si"){
          precio = 531.20
        }
        else {
  
          precio = 1180.44
  
            }
        precio = 1180.44 
      }
      else{
        precio = 1876.90
      }
    }
    if (bondi === "provincia") 
      if (km > 0, km < 3) {
        if (registrado === "si"){
          if (tarifa === "si"){
            precio = 546.79 
          }
    
            else {
              precio = 1215.09
    
            }
            }
    
            else {
            precio = 2430.18
            }
      }  
      else if (km > 3, km < 6) {
        if (registrado === "si"){
          if (tarifa === "si"){
            precio = 615.14
          }
    
            else {
              precio = 1366.97
    
            }
              }
              else {
                precio = 2733.94
              }
    
      }
      else if (km > 6, km < 12){
        if (registrado === "si"){
          if (tarifa === "si"){
            precio = 683.48
          }
          else {
    
            precio = 1518.85
    
              }    }
        else {
          precio = 3037.70
        }    
      
      }
      else if (km > 12, km < 27){
        if (registrado === "si"){
          if (tarifa === "si"){
            precio = 820.18
          }
          else {
    
            precio = 1822.63
    
              }
        }
        else{
          precio = 3645.26
        }
        
      }
      else if (km > 27){
        if (registrado === "si"){
          if (tarifa === "si"){
            precio = 964.26
          }
          else {
    
            precio = 2142.81
    
              }
        }
        else{
          precio = 4285.62
        }
      }
  tarifa.innerText = precio;
}); 
