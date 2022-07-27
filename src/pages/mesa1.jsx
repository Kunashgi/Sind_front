import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import Logo from '../imagenes/Logo.jpg';
import "./mesa.css";


function Mesa1 (){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmitClick = (event) =>{
        console.log ("Enviando" , {email, password});
    }
    return (
    <div className = "mainlogin">
        <div className="logo-container">
            <img src={Logo} className="logo-login"/>
        </div>
        <div className = "login">
            <h3>Inicio sesión</h3>
            <form>
                <FormInput label="Email" placeholder="Ingrese su Email" type="email" 
                onChange={(event) => setEmail(event.target.value)}/>
                <FormInput label="Contraseña" placeholder="Ingrese su contraseña" type="password" 
                onChange={(event) => setPassword(event.target.value)}/>
                <div className= "posicion">         
                   <input type="submit" value="Iniciar sesión" className= "boton" onClick={handleSubmitClick} />
                   <input type="submit" value="Registrarse" className= "boton" />
                </div> 
                <div className="olvido">¿Olvidaste tu contraseña?</div>
            </form>
        </div>
    </div>

  
  
  
      
    );

}

export default Mesa1;