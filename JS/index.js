function calcular() {
    let strA = document.getElementById("valorA").value
    let strB = document.getElementById("valorB").value
    let strC = document.getElementById("valorC").value
    
    if(strA === ""){
              alert("Valor a en Blanco")
    } else if(strB === ""){
              alert("valor b en blanco ")
    } else if(strC === ""){
               alert("valor c en blanco")
    }else {
        alert ("todo bien")
    }
    

}

function limpiar() {
    alert("limpiar")
    
}