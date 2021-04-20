import './Stylo.css';

import React from 'react';

 

  function Registro () {
     return(

      
      <body className="fondos">
      
    
      <div className="espacio">
      <div class="form-group">
    <label for="pwd">Nombre</label>
    <input type="text" class="form-control" value="" placeholder="Ingrese nombre" id=""/>
  </div>

  <div class="form-group">
    <label for="pwd">Apellido</label>
    <input type="text" class="form-control" value="" placeholder="Ingrese Apellido" id=""/>
  </div>
      
   
  <div className="form-group">
    <label for="email">Correo</label>
    <input type="email" class="form-control" value="" placeholder="Ingrese correo" id=""/>
  </div>
  <div class="form-group">
    <label for="pwd">Contraseña</label>
    <input type="password" class="form-control" value="" placeholder="Ingrese contraseña" id=""/>
  </div>

  </div>   
  
  <button  class="btn btn-dark">Registrar</button>

      
        
      </body>

        )
  }

  
  export default Registro;