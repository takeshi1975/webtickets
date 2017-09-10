/**
 * Select2 Spanish translation
 */
(function ($) {
    "use strict";




    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "No se encontraron resultados"; },
        formatInputTooShort: function (input, min) { var n = min - input.length;
            var nombre;
            if(n==1){
               nombre= "un";
            }else if(n==2){
               nombre = "dos";
            }else if (n==3){
               nombre = "tres";
            }else{
                nombre = n;
            }

            return "Introduzca " + nombre + " car" + (n == 1? "á" : "a") + "cter" + (n == 1? "" : "es"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Elimine " + n + " car" + (n == 1? "á" : "a") + "cter" + (n == 1? "" : "es"); },
        formatSelectionTooBig: function (limit) { return "Sólo puede seleccionar " + limit + " elemento" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Cargando más resultados..."; },
        formatSearching: function () { return "Buscando..."; }
    });
})(jQuery);
