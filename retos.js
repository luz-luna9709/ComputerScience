function Palindrome(){
    let cadena=prompt("Ingresa una palabra:");
      let re = /[^A-Za-z0-9]/g;
      cadena = cadena.toLowerCase().replace(re, '');
      console.log(cadena)
      let word1 = cadena.split("").reverse().join('');
    if(word1 == cadena){
        console.log("Es un palindromo");
    }else{
        console.log("No es un palindromo");
    }
  }
  Palindrome()


  function Palindrome(){
    let cadena=prompt("Ingresa una palabra:");
    console.log(cadena)
    let re = /[^A-Za-z0-9]/g;
    cadena = cadena.toLowerCase().replace(re, '');
    let word1 = cadena.split("").reverse().join('');
    return word1 == cadena ? 'Es un palindromo' : 'No es un palindromo';
}
Palindrome()


function Palindrome(){
    let re = /[^A-Za-z0-9]/g;
    let cadena=prompt("Ingresa una palabra:").toLowerCase().replace(re, '');
    let word1 = cadena.split("").reverse().join('');
    return word1 == cadena ? 'Es un palindromo' : 'No es un palindromo';
}
Palindrome()
 /* ------------------------------------------- */

  function longestCountry(...paises){
    let i= [];
    let ilength=0;
    paises.forEach((index) => {
        if(index.length == ilength){
            i.push(index);
        }else if(index.length > ilength) {
            i.length = 0;
            i.push(index);
            ilength=index.length;
        }
        
    });
    return  `paises con mas caracteres: ${i}`
}

longestCountry('nicaragua','mexico','panama','chile','cuba','argentina','indonesia')

/* ------------------------------------------- */
function farenheitToCelsius(farenheit){
    let celsius= (farenheit- 32) * (5/9);
    console.log(${farenheit} grados farenheit son ${celsius} grado celsius);
}
farenheitToCelsius(100)


/* 
----------------------------------------------------------- */

function parametros(...param){
    return `el total de parametros mandados son: ${param.length}`
}

parametros('parametro1','parametro2','parametro3','parametro4','parametro5')
