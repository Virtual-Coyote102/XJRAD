function show_value(x) {
    $("#slider_value").text(x);
}

$(document).ready(function() {
    show_value($(".input").val()); // Mostrar el valor inicial al cargar
});