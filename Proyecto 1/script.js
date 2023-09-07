document.addEventListener("DOMContentLoaded", () => {
    let nom= document.getElementById("txtNombre").value
    let apell= document.getElementById("txtApellido").value
    let fechaN = document.getElementById("txtFecha").value
    
    let boton = document.getElementById("btn")
    
    
    boton.addEventListener("click", handleClick)
    
    
    function handleClick (){
        fetch('https://jsonplaceholder.typicode.com/users', {

            method: "POST",
            body: JSON.stringify({
                nombre: nom,
                apellido: apell,
                FechaNacimiento: fechaN
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }
    }
    )