function opciones(){

    let opciones = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <ul id="lista" class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" id="login" href="#">LOGIN</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" id="registro" href="#">REGISTRO</a>
            </li>
        </ul>
    </nav>`;

    $('#navcontainer').append(opciones);

    //OPCION LOGIN
    $('#login').click(function (e) { 

        $('#formcontainer').empty();
        $.getScript("./scripts/formularios.js", function () {
            formulariologin();
        });
        e.preventDefault();
        
    });

    //OPCION REGISTRO
    $('#registro').click(function (e) { 

        $('#formcontainer').empty();
        $.getScript("./scripts/formularios.js", function () {
            formularioregistro();
        });
        e.preventDefault();
        
    });
}