$(document).ready(function () {
    
    //llamamos la barra de opciones
    $.getScript("./scripts/opciones.js", function () {
        opciones();
    });

    //llamamos el formulario LOGIN
    $.getScript("./scripts/formularios.js", function () {
        formulariologin();
    });

});