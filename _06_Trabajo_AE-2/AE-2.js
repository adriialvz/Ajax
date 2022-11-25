function ponerFoco(){
    nombre.focus();          //PONE EL FOCO AL CARGAR LA PAGINA   ---> NOMBRE NAME + FOCUS
}


function validarForm(){
  var nombre= document.getElementById("nombre").value;
  var dir= document.getElementById("dir").value;
  var tlfn= document.getElementById("tlfn").value;
  var email= document.getElementById("email").value;            //GUARDA EN LAS VARIABLES LOS DATOS INTRODUCIDOS EN EL CAMPO



  var correo= /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;    //EXPRESION REGULAR PARA CORREO
  var soloLetras = /^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ\s]+$/;                     //EXPRESION REGULAR PARA NOMBRE ---> SOLO ACEPTA LETRAS Y ESPACIO
  var num= /^[0-9]+$/;                                              //EXPRESION REGULAR PARA UN TELEFONO --> SOLO ACEPTA NUMEROS


  var maxNueve= document.getElementById("tlfn").value.length;    //GUARDA EL NUMERO DE CARACTERES QUE HAS ESCRITO EN EL CAMPO TLFN



  var uno= document.getElementById("uno").checked;
  var dos= document.getElementById("dos").checked;               //CHEKEA SI HAS MARCADO EL RADIO
  var tres= document.getElementById("tres").checked;

  var cuatro= document.getElementById("cuatro").checked;
  var cinco= document.getElementById("cinco").checked;          //CHEKEA SI HAS MARCADO EL CHECKBOX
  var seis= document.getElementById("seis").checked;
  var siete= document.getElementById("siete").checked;
  var ocho= document.getElementById("ocho").checked;




  if(nombre == ""){                                               //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
      alert("Campo \"NOMBRE\" esta vacio");
      document.formu.nombre.focus();

  } else if(!soloLetras.exec(nombre)){                              //SI EL PATRON "!NO COINCIDE" CON EL NOMBRE INTRODUCIDO CON QUE SOLO LLEVE LETRAS ENTRA
      alert("Campo \"NOMBRE\" solo acepta letras y espacios en blanco");
      document.formu.nombre.focus();

  } else if(dir == ""){                                            //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
      alert("Campo \"DIRECCION\" esta vacio");
      document.formu.dir.focus();

  } else if(tlfn == ""){
      alert("Campo \"TELEFONO\" esta vacio");                      //SI ESTA VACIO, SACA ALERT Y PONE EL FOCO
      document.formu.tlfn.focus();

  } else if(maxNueve != 9){
      alert("Campo \"TELEFONO\" lleva solo 9 numeros");           //EL CAMPO TELEFONO SOLO LLEVA 9 NUMEROS.
      document.formu.tlfn.focus();

  } else if(!num.exec(tlfn)){
        alert("Datos alfanumericos. Introduzca \"TELEFONO\" DE 9 DIGITOS");    //SI EL CAMPO NO ES NUMERICO ENTRA
        document.formu.tlfn.focus();

  } else if(!correo.exec(email)){
        alert("Campo \"EMAIL\" no es incorrecto");              //SI NO ES UN CORREO ENTRA
        document.formu.email.focus();

  } else if(email == ""){
        alert("Campo \"EMAIL\" esta vacio");                    //SI ESTA VACIO ENTRA
        document.formu.email.focus();

  } else if(!uno && !dos && !tres){                              //SI EL CAMPO NO ESTA MARCADO ENTRA
        alert("Campo \"RADIO\" con tamaño de pizza no esta marcado");

  } else if(!cuatro && !cinco && !seis && !siete && !ocho){
        alert("Campo \"CHECKBOX\" con ingredientes no esta marcado");                //SI EL CAMPO NO ESTA MARCADO ENTRA

  } else {
      document.formu.submit();                                      //ENVIA EL PEDIDO
      var cont0=0, cont1=0, cont2=0, cont3=0, cont4=0;
      if(cuatro){                                                  //SI EL BACON ESTA CHEKEADO ENTRA
        cont0++;
      }
      if(cinco){                                                  //SI EL JAMON ESTA CHEKEADO ENTRA
        cont1++;
      }
      if(seis){                                                  //SI LA CECINA ESTA CHEKEADO ENTRA
        cont2++;
      }
      if(siete){                                                 //SI EL CHORIZO ESTA CHEKEADO ENTRA
        cont3++;
      }
      if(ocho){                                                 //SI EL JAMON YORK ESTA CHEKEADO ENTRA
        cont4++;
      }


      var total= cont0+cont1+cont2+cont3+cont4;            //CUENTA EL TOTAL DE INGREDIENTES



      if(uno){
            alert("El precio de su pizza PEQUEÑA es de ----> " +(5+total)+"€");    //SACA EL PRECIO DE LA PIZZA + EL TOTAL DE INGREDIENTES Y LO SUMA
        } else if(dos){
            alert("El precio de su pizza MEDIANA es de ----> " +(10+total)+"€");
        } else if(tres){
            alert("El precio de su pizza GRANDE es de ----> " +(15+total)+"€");
        }


  }


}



const URL_DESTINO = "http://localhost:5500/_06_Trabajo_AE-2/"
const RECURSO = "TI.json"

   function enviarPeticionAsincrona() {

        var xmlHttp = new XMLHttpRequest()

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    procesarRespuesta(this.responseText)
                } else {
                    alert("ZASCA!")
                }
            }
        }

        xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
        xmlHttp.send(null)
    }

    function procesarRespuesta(jsonDoc) {
      var objetoJson = JSON.parse(jsonDoc)
      console.log(objetoJson)

      var table = "<tr><th>Title</th><th>Artist</th></tr>";
      var arrayCDs = objetoJson.DATOS.TAMAÑOS;
      
      for(let cd of arrayCDs){
          table += "<tr><td>" + cd.Opcion1 + "</td>" + "<td>" + cd.ARTIST + "</td></tr>";
      }
      resultadoBusqueda.innerHTML = table;
    }

