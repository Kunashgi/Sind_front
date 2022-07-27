import React from 'react';
import Register from '../pages/Register'

function Confirmacion (props){
    return (
        function confirmar(evento) {
            const contraseña = document.getElementById("contraseña");
            const confirmacion = document.getElementById("confirmacion");
            if (contraseña.value != confirmacion.value) {
                alert("Las contraseñas no coinciden");
                event.preventDefault();
            }
            console.log(contraseña.value, confirmacion.value);
        }
        const formulario = document.getElementById("Datos");
        formulario.addEventListener("submit", confirmar);
    );

}

export default Confirmacion; 


