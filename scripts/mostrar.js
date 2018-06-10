$(document).ready(function(){
    $(".contenido").hide();
    $("#div_1").show();
    $("#opciones").change(function(){
    $(".contenido").hide();
        $("#div_" + $(this).val()).show();
    });
});