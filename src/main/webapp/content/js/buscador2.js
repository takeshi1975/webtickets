
    var fecha_sel = 0;

    $(document).ready(function () {

      $(".num-noc").change(function(){
        var fecIni = $(".fechaInicio").val();
        if (fecIni != ""){
          var day1 = fecIni.split("/")[0];
          var month1 = parseInt(fecIni.split("/")[1]) -1;
          var year1 = fecIni.split("/")[2];
          $('.fechaFin').datepicker('setDate', new Date(year1, month1, parseInt(day1) + parseInt($(this).val())));
          $(".fechaFin").datepicker("option", "minDate", new Date(year1, month1, day1));
          $(".fechaFin").datepicker("option", "maxDate", new Date(year1 + 1, month1, day1));
        }
      });

      $(".datepicker-icon").click(function(){
        $(this).parent().find("input").focus();
      });

      /* Opciones y Filtros Buscador */
      $(".num-nin").change(function() {
        var rel = $(this).val();
        var dad = $(this).parents(1).parents(1);
        var dadc = $(dad).attr('class');
        $(dad).addClass('ninHab');

        switch (rel){
          case "0":
            $(dad).removeClass('ninHab nin0 nin1 nin1n2 nin1n2n3 nin1n2n3n4');
            $(dad).addClass("nin0");
            break;
          case "1":
            $(dad).removeClass('nin0 nin1 nin1n2 nin1n2n3 nin1n2n3n4');
            $(dad).addClass("nin1");
            break;
          case "2":
            $(dad).removeClass('nin0 nin1 nin1n2 nin1n2n3 nin1n2n3n4');
            $(dad).addClass("nin1" + "n2");
            break;
          case "3":
            $(dad).removeClass('nin0 nin1 nin1n2 nin1n2n3 nin1n2n3n4');
            $(dad).addClass("nin1" + "n2" + "n3");
            break;
          case "4":
            $(dad).removeClass('nin0 nin1 nin1n2 nin1n2n3 nin1n2n3n4');
            $(dad).addClass("nin1" + "n2"+ "n3"+ "n4");
            break;
        }
      });

      $(".num-hab").change(function(){
        var rel = $(this).val();
        switch (rel){
          case "1":
            $(".ocupacionHab2").css("display","none");
            $(".ocupacionHab3").css("display","none");
            break;
          case "2":
            $(".ocupacionHab2").css("display","block");
            $(".ocupacionHab3").css("display","none");
            break;
          case "3":
            $(".ocupacionHab2").css("display","block");
            $(".ocupacionHab3").css("display","block");
            break;
        }

      });

      $('.selectpicker').selectpicker();

      $('.datepicker').datepicker({
        dateFormat: 'dd/mm/yy', // formato de fecha que se usa en EspaÃ±a
        dayNames: ['Domingo', 'Lunes', 'Martes', 'MiÃ©rcoles', 'Jueves', 'Viernes', 'Sabado'], // dÃ­as de la semana
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'], // dÃ­as de la semana (versiÃ³n super-corta)
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'], // dÃ­as de la semana (versiÃ³n corta)
        firstDay: 1, // primer dÃ­a de la semana (Lunes)
        minDate: '0',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], // meses
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // meses
        selectOtherMonths: false,
        navigationAsDateFormat: true,
        inline: true,
        changeYear: false,
        changeMonth: false
      });

      $(".fechaInicio").change(function () {
        var day1 = $(this).datepicker('getDate').getDate();
        var month1 = $(this).datepicker('getDate').getMonth();
        var year1 = $(this).datepicker('getDate').getFullYear();
        $('.fechaFin').datepicker('setDate', new Date(year1, month1, parseInt(day1) + parseInt($(".num-noc").val())));
        $(".fechaFin").datepicker("option", "minDate", new Date(year1, month1, day1));
        $(".fechaFin").datepicker("option", "maxDate", new Date(year1 + 1, month1, day1));
      });

      $(".fechaFin").change(function(){
        var start = $('.fechaInicio').datepicker('getDate');
        var end   = $('.fechaFin').datepicker('getDate');
        var days   = parseInt((end - start)/1000/60/60/24);

        $('.num-noc option[value="'+ days +'"]').prop("selected",true);
        $('.num-noc').selectpicker('refresh');
      });

      $(".fechaInicioIcon").click(function () {
        $(".fechaInicio").datepicker("show");
      });
      $(".fechaFinIcon").click(function () {
        $(".fechaFin").datepicker("show");
      });

      $('.fechaInicio').tooltip();
      $('.fechaFin').tooltip();
        
            var dataZonasHotel = [
              
                {"text": "Andorra", "label": "Andorra", "value": "ANDOR", "id": "ANDOR"},
              
                {"text": "Zona Centro - Andorra", "label": "Zona Centro - Andorra", "value": "ZCEN", "id": "ZCEN"},
              
                {"text": "Zona Granvalira - Andorra", "label": "Zona Granvalira - Andorra", "value": "ZOGRA", "id": "ZOGRA"},
              
                {"text": "Zona Vallnord - Andorra", "label": "Zona Vallnord - Andorra", "value": "ZVLN", "id": "ZVLN"},
              
            ];

            $(".zonaDestinoH").select2({
              data: dataZonasHotel,
              minimumInputLength: 3});
      
        $(".nombreHotel").select2({
          placeholder: 'Nombre del hotel',
          minimumInputLength: 3,
          allowClear: true,
          ajax: {
            url: "/web-eplSH/HotelNew/listarServicios",
            dataType: 'json',
            data: function (term, page) {
              return {
                nombreServicio: term,
                destinoCodigo: $('#zonaDestino').val()
              };
            },
            results: function (data, page) {
              return { results: data };
            }
          }
        });
      
      $(".origenVH").select2({
        placeholder: "Aeropuerto de salida",
        allowClear: true,
        minimumInputLength: 1,
        ajax: {
          url: "/web-eplSH/listarAeropuertos",
          dataType: 'json',
          data: function (term, page) {
            return {
              q: term, // search term
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      });

      $(".destinoVH").select2({
        placeholder: "Aeropuerto de destino",
        allowClear: true,
        minimumInputLength: 1,
        ajax: {
          url: "/web-eplSH/listarAeropuertos",
          dataType: 'json',
          data: function (term, page) {
            return {
              q: term, // search term
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      });

      $(".zonaDestinoVH").select2({
        placeholder: "Zona de destino",
        allowClear: true,
        minimumInputLength: 1,
        ajax: {
          url: "/web-eplSH/listarDestinoNombreVuelo",
          dataType: 'json',
          data: function (term, page) {
            return {
              q: term, // search term
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      });
      

      
      var dataOrigen = [{"text":"Barcelona","label":"Barcelona","value":"PUEBCN","id":"PUEBCN"},{"text":"Denia","label":"Denia","value":"PUEDEN","id":"PUEDEN"},{"text":"Ibiza (Ibiza)","label":"Ibiza (Ibiza)","value":"PUEIBZ","id":"PUEIBZ"},{"text":"Ibiza (San Antonio)","label":"Ibiza (San Antonio)","value":"PUESAN","id":"PUESAN"},{"text":"Mallorca (AlcÃºdia)","label":"Mallorca (AlcÃºdia)","value":"PUEALC","id":"PUEALC"},{"text":"Mallorca (Palma de Mallorca)","label":"Mallorca (Palma de Mallorca)","value":"PUEPMI","id":"PUEPMI"},{"text":"Menorca (Ciudadela)","label":"Menorca (Ciudadela)","value":"PUECIU","id":"PUECIU"},{"text":"Menorca (MahÃ³n)","label":"Menorca (MahÃ³n)","value":"PUEMAH","id":"PUEMAH"},{"text":"Porto Torres (CerdeÃ±a)","label":"Porto Torres (CerdeÃ±a)","value":"ITPTO","id":"ITPTO"},{"text":"Valencia","label":"Valencia","value":"PUEVAL","id":"PUEVAL"}];
      var dataDestino =  [];
      var dataZonaDestino =  [];

      dameDestinos = function(origenCodigo){
        $.ajax({
          url: "/web-eplSH/listarDestinosPuerto?origenCodigo="+origenCodigo,
          dataType: "json",
          type: "POST",
          error: function () {
            alert("An error ocurred.");
          },
          success: function (data) {
            dataDestino = data;
          }
        });
      };

      dameZonaDestinos = function(destinoCodigo){
        $.ajax({
          url: "/web-eplSH/listarDestino?destinoCodigo="+destinoCodigo,
          dataType: "json",
          type: "POST",
          error: function () {
            alert("An error ocurred.");
          },
          success: function (data) {
            dataZonaDestino = data;
          }
        });
      };

      $(".origenB").select2({
        placeholder: "Puerto de salida",
        allowClear: true,
        minimumInputLength: 1,
        data: dataOrigen,
        ajax: {
          url: "/web-eplSH/listarOrigenPuerto?tipoProductoTransporte=BARCO",
          dataType: 'json',
          data:    function (term, page) {
            return {
              q: term, // search term
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      }).select2({data:dataOrigen});

      $(".origenB").on("change", function(e) {
        dameDestinos(e.val);
        $(".destinoB").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
        $(".zonaDestinoB").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataZonaDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
      });

      $(".destinoB").on("change", function(e) {
        dameZonaDestinos(e.val);
        $(".zonaDestinoB").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataZonaDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
      });

      $(".destinoB").select2({
        placeholder: "Puerto de destino",
        data: function() {
          return {results: dataDestino};
        }
      });

      $(".zonaDestinoB").select2({
        placeholder: "Zona de destino",
        data: function() {
          return {results: dataZonaDestino};
        }
      });

      

      

      $(".origenBH").select2({
        placeholder: "Puerto de salida",
        allowClear: true,
        minimumInputLength: 1,
        data: dataOrigen,
        ajax: {
          url: "/web-eplSH/listarOrigenPuerto?tipoProductoTransporte=BARCO",
          dataType: 'json',
          data:    function (term, page) {
            return {
              q: term, // search term
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      }).select2({data:dataOrigen});

      $(".origenBH").on("change", function(e) {
        dameDestinos(e.val);
        $(".destinoBH").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
        $(".zonaDestinoBH").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataZonaDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
      });

      $(".destinoBH").on("change", function(e) {
        dameZonaDestinos(e.val);
        $(".zonaDestinoBH").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataZonaDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarOrigenPuerto?origenCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
      });

      $(".destinoBH").select2({
        placeholder: "Puerto de destino",
        data: function() {
          return {results: dataDestino};
        }
      });

      $(".zonaDestinoBH").select2({
        placeholder: "Zona de destino",
        data: function() {
          return {results: dataZonaDestino};
        }
      });            

      var dataDestinoT =  [];

      dameDestinosT = function(origenCodigo){
        $.ajax({
          url: "/web-eplSH/listarDestinosTren?s=" + origenCodigo + "&t=TREN",
          dataType: "json",
          type: "POST",
          error: function () {
            alert("An error ocurred.");
          },
          success: function (data) {
            dataDestinoT = data;
          }
        });
      };

      $(".origenT").select2({
        placeholder: "Puerto de salida",
        allowClear: true,
        minimumInputLength: 3,
        ajax: {
          url: "/web-eplSH/listarEstaciones",
          dataType: 'json',
          data: function (term, page) {
            return {
              q: term, // search term
              tipoRuta: "TREN",
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      });

      $(".origenT").change(function(e) {
        var este = $(this);
        dameDestinosT(e.val);
        $(".destinoT").select2({
          placeholder: "Zona del hotel",
          allowClear: true,
//                        minimumInputLength: 3,
          ajax: {
            url: "/web-eplSH/listarEstacionesDestino",
            dataType: 'json',
            data: function (term, page) {
              return {
                q: term,
                s: este.val(),
                t: 'TREN',
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
              };
            },
            results: function (data, page) {
              return { results: data };
            }
          }
        });
      });

      $(".destinoT").select2({
        placeholder: "Zona del hotel",
        data: function() {
          return {results: dataDestinoT};
        }
      });

      

      $("#soloIda").change(function () {
        if ($(this).is(":checked")) { // check if the radio is checked
          var val = $(this).val(); // retrieve the value

          $("#fechaVueltaID").css("display", 'none');
          $(".fechaFin").attr("disabled", true);
        }
      });

      $("#idaVuelta").change(function () {
        if ($(this).is(":checked")) { // check if the radio is checked
          var val = $(this).val(); // retrieve the value
          $("#fechaVueltaID").css("display", 'block');
          $(".fechaFin").attr("disabled", false);
        }
      });

      var dataDestinoTH =  [];

      dameDestinosTH = function(origenCodigo){
        $.ajax({
          url: "/web-eplSH/listarDestinosTren?s=" + origenCodigo + "&t=TRENHOTEL",
          dataType: "json",
          type: "POST",
          error: function () {
            alert("An error ocurred.");
          },
          success: function (data) {
            dataDestinoTH = data;
          }
        });
      };

      $(".origenTH").select2({
        placeholder: "Estaci&oacute;n de salida",
        allowClear: true,
        minimumInputLength: 3,
        ajax: {
          url: "/web-eplSH/listarEstaciones",
          dataType: 'json',
          data: function (term, page) {
            return {
              q: term, // search term
              tipoRuta: "TRENHOTEL",
              page_limit: 10,
              apikey: "ju6z9mjyajq2djue3gbvv26t"
            };
          },
          results: function (data, page) {
            return { results: data };
          }
        }
      });

      $(".origenTH").change(function(e) {
        dameDestinosTH(e.val);
        $(".destinoTH").select2({
          placeholder: "Zona del hotel",
          allowClear: true,
//                        minimumInputLength: 3,
          ajax: {
            url: "/web-eplSH/listarEstacionesDestino",
            dataType: 'json',
            data: function (term, page) {
              return {
                q: term,
                s: $(".origenTH").val(),
                t: 'TRENHOTEL',
                page_limit: 10,
                apikey: "ju6z9mjyajq2djue3gbvv26t"
              };
            },
            results: function (data, page) {
              return { results: data };
            }
          }
        });
      });

      $(".destinoTH").select2({
        placeholder: "Zona del hotel",
        data: function() {
          return {results: dataDestino};
        }
      });

      var dataZonaDestinoTH =  [];

      dameZonaDestinosTH = function(destinoCodigo){
        $.ajax({
          
          url: "/web-eplSH/listarDestinoNombre?destinoCodigo=" + destinoCodigo,
          dataType: "json",
          type: "POST",
          error: function () {
            alert("An error ocurred.");
          },
          success: function (data) {
            dataZonaDestino = data;
          }
        });
      };

      $(".destinoTH").on("change", function(e) {
        dameZonaDestinosTH(e.val);
        $(".zonaDestinoTH").select2({
          placeholder: "Puerto de destino",
          data: function() {
            return {results: dataZonaDestino};
          },
          initSelection : function (element, callback) {

            var codigo = $(element).val();
            if (codigo !== "") {
              $.ajax("/web-eplSH/listarDestinoNombre?destinoCodigo=" + codigo, {
                data: {
                  apikey: "ju6z9mjyajq2djue3gbvv26t"
                } ,
                dataType: "json"
              }).done(function(data) {
                callback(data[0]);
              });
            }
          }
        });
      });

      $(".zonaDestinoTH").select2({
        placeholder: "Zona de destino",
        data: function() {
          return {results: dataZonaDestinoTH};
        }
      });
      

    });

    function validateForm() {


      var resultado = true;

      if ($("#zonaDestino").val().length == 0 && $("#nombreHotel").val().length == 0) {
        $("#s2id_zonaDestino").css('color', 'red');
        $("#s2id_zonaDestino").css('background', 'seashell');
        $("#s2id_zonaDestino").css('border-color', 'red');
        $("#s2id_zonaDestino").css('border-width', '2px 2px 17px 2px');

        $("#s2id_nombreHotel").css('color', 'red');
        $("#s2id_nombreHotel").css('background', 'seashell');
        $("#s2id_nombreHotel").css('border-color', 'red');
        $("#s2id_nombreHotel").css('border-width', '2px 2px 17px 2px');

        resultado = false;

      } else {
        $("#s2id_zonaDestino").css('color', '');
        $("#s2id_zonaDestino").css('background', '');
        $("#s2id_zonaDestino").css('border-color', '');

        $("#s2id_nombreHotel").css('color', '');
        $("#s2id_nombreHotel").css('background', '');
        $("#s2id_nombreHotel").css('border-color', '');
      }

      var dateReg = /(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/;

      if (!dateReg.test($(".fechaInicio").val())) {
        $(".fechaInicio").css('color', 'red');
        $(".fechaInicio").css('background', 'seashell');
        $(".fechaInicio").css('border-color', 'red');

        $("#fechaInicioIcon").css("border-top", "1px solid red");
        $("#fechaInicioIcon").css("border-bottom", "1px solid red");
        $("#fechaInicioIcon").css("border-right", "1px solid red");
        $("#fechaInicioIcon").css("border-left", "0px");

        resultado = false;

      } else {
        $(".fechaInicio").css('color', '');
        $(".fechaInicio").css('background', '');
        $(".fechaInicio").css('border-color', '');

        $("#fechaInicioIcon").css("border-top", "");
        $("#fechaInicioIcon").css("border-bottom", "");
        $("#fechaInicioIcon").css("border-right", "");
        $("#fechaInicioIcon").css("border-left", "");

      }

      if (!dateReg.test($(".fechaFin").val())) {
        $(".fechaFin").css('color', 'red');
        $(".fechaFin").css('background', 'seashell');
        $(".fechaFin").css('border-color', 'red');


        $("#fechaFinIcon").css("border-top", "1px solid red");
        $("#fechaFinIcon").css("border-bottom", "1px solid red");
        $("#fechaFinIcon").css("border-right", "1px solid red");
        $("#fechaFinIcon").css("border-left", "0px");

        resultado = false;
      } else {
        $(".fechaFin").css('color', '');
        $(".fechaFin").css('background', '');
        $(".fechaFin").css('border-color', '');

        $("#fechaFinIcon").css("border-top", "");
        $("#fechaFinIcon").css("border-bottom", "");
        $("#fechaFinIcon").css("border-right", "");
        $("#fechaFinIcon").css("border-left", "");
      }

      if (resultado) {
        $('.fondoimageSearch').css('visibility', 'visible');
        $('.sliderCargando').css('visibility', 'visible');
        $('.fondoimageSearch').css('display', 'block');
        $('.sliderCargando').css('display', 'block');
      }

      return resultado;

    }