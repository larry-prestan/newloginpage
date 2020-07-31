function formulariologin(){
    //creamos el formulario de LOGIN
    let formulariologin = `
    <form id="formlogin">
        <label for="usuario">Usuario</label>
        <div class="form-group">
            <input type="text" name="usuario" id="usuario" autocomplete="off">
        </div>
        <label for="password">Contraseña</label>
        <div class="form-group">
            <input type="password" name="password" id="password" autocomplete="off">
        </div>
        <button id="btnlogin" class="btn btn-block">LOGIN</button>
    </form>`;
    //lo agregamos al contenedor 
    $('#formcontainer').append(formulariologin);

    //BTN LOGIN
    //Aqui debe agregar la funcionalidad del boton 
    $('#btnlogin').click(function (e) { 

        alert("usuario logeado");
        $('#formlogin')[0].reset();
        e.preventDefault();
        
    });

}

function formularioregistro(){

    //creamos el formulario de REGISTRO
    let formularioregistro = `
    <h6 style="margin-bottom: 3%;">Ingrese los datos del usuario</h6>
    <form id="formregistro">
        <label id="labelnombre" for="nombre">Nombre</label>
        <div class="form-group">
            <input type="text" name="nombre" id="nombre" autocomplete="off">
        </div>
        <label for="usuario">Usuario</label>
        <div class="form-group">
            <input type="text" name="usuario" id="usuario" autocomplete="off">
        </div>
        <label for="password">Contraseña</label>
        <div class="form-group">
            <input type="text" name="password" id="password" autocomplete="off">
         </div>
        <button id="btnguardar" class="btn btn-block">AGREGAR</button>
    </form>`;
    //lo agregamos al contenedor
    $('#formcontainer').append(formularioregistro);

    //BTN AGREGAR
    //Aqui debe agregar la funcionalidad del boton
    $('#btnguardar').click(function (e) { 

        alert("usuario agregado");
        $('#formregistro')[0].reset();
        $('#formcontainer').empty();
        formulariologin();
        e.preventDefault();
        
    });

}