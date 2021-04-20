
import './Stylo.css';

import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

 

  function Login () {
     return(

      
      <body className="fondos">
      

      
   <div className="espacio">
  <div className="form-group">
    <label for="email">Correo</label>
    <input type="email" class="form-control" placeholder="Ingrese correo" id=""/>
  </div>
  <div class="form-group">
    <label for="pwd">Contraseña</label>
    <input type="password" class="form-control" placeholder="Ingrese contraseña" id=""/>
  </div>

  </div>   
  
  <button class="btn btn-dark">Entrar</button>

      
        
      </body>

        )
  }

  
  export default Login;