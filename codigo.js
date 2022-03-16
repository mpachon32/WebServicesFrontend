const aplicacion =document.querySelector('.contanier')

const url ="http://localhost:9090/ws-paises/Calculos" 
//fetch  Recibe la URL de la petición como String
fetch (url)
.then(res =>console.log(res))
