const nombre1 = document.getElementById("nombre1");
const saludo = document.getElementById("saludo");
const legal = document.getElementById("legal");

nombre1.addEventListener("click", function () { 
    const nombre = document.getElementById("nombre").value;
  console.log(`Su nombre es ${nombre}`);
});

saludo.addEventListener("click", function () {
  console.log("Holaaaa");
});

legal.addEventListener("click", function () { 
    const edad = document.getElementById("edad").value;
 if(isNaN(edad)){
    console.log("Ingrese un numero"); 
}else{

    if (edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("Es menor de edad");
      }
}
});
