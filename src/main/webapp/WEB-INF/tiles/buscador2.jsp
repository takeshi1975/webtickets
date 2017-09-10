<script src="content/js/buscador2.js"></script>
  
<div id="tab-one" role="tabpanel" class="buscadoresBox">

  <!-- Tab panes -->
  <div class="tab-content">
    
      <div role="tabpanel" class="tab-pane active" id="BUSC-PARQUES">

         <div class="buscador" id="buscHome0">
          
          <div class="busc-body">
            <form name="buscador-bh" id="buscador-bh" action="/web-eplSH/HotelNew/disponibilidad" method="POST" onsubmit="return validateForm()">

              <tr style="display:none;">
				<td colspan="2"><input type="hidden" name="peticionWeb.tipoPago" value="" id="peticionWeb_tipoPago"/>  </td>
			  </tr>
              
              
              <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.landing" value="poa" id="peticionWeb_landing"/>  
				</td>
			  </tr>

             <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.chkscm" value="N" id="peticionWeb_chkscm"/>  
				</td>
			 </tr>	

            <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.tipoProductoTransporte" value="HOTEL" id="peticionWeb_tipoProductoTransporte"/>  
				</td>
			</tr>
	
            <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.soloIda" value="N" id="peticionWeb_soloIda"/>  
				</td>
			</tr>

            <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.codttp" value="WAR" id="peticionWeb_codttp"/>  
				</td>
			</tr>

            <tr style="display:none;">
				<td colspan="2">
					<input type="hidden" name="peticionWeb.codtts" value="ESC" id="peticionWeb_codtts"/>  
				</td>
			</tr>

              
            <input type="hidden" name="peticionWeb.tipoTransporte" value=""/>
            <input type="hidden" name="peticionWeb.estancia" value=""/>
              
            <label class="title">Zona del hotel</label>
            <input type="hidden" id="zonaDestino" placeholder="Zona del hotel"
                     data-initvalue='[{"id":"AND","name":"Andorra"}]' autocapitalize="on" name="peticionWeb.zonaDestino"
                     class="bigdrop busc-inp form-control zonaDestinoH"/>
              

              
            <label class="title">Nombre del hotel</label>
            <input type="hidden" id="nombreHotel" placeholder="Nombre del hotel"
                       autocapitalize="on" name="peticionWeb.codigoServicio"
                       class="bigdrop busc-inp form-control nombreHotel"/>
              

			<div class="busc-dat">
            <label class="title-min">Fecha de Entrada</label>

            <input class="busc-inp-min form-control datepicker clear fechaInicio" type="text" id="fechaInicio0"
                       name="peticionWeb.fechaInicio" data-toggle="tooltip" data-placement="top"
                       title="1. Elija una fecha de entrada" data-trigger="focus"/>

            <span class="datepicker-icon add-on" id="fechaInicioIcon" type="date"><i class="fa fa-calendar"
                                                                                     style="margin-left: 10%;"></i></span>
          </div>
          <div class="buscs-dat">
            <label class="title-min">Fecha de <br/>Salida</label>
				<!--  input class="busc-inp-min form-control datepicker fechaFin" type="text" id="fechaFin0" name="peticionWeb.fechaFin"/ -->
				<input class="busc-inp-min form-control datepicker fechaFin" type="text" id="fechaFin0" name="peticionWeb.fechaFin" data-toggle="tooltip" data-placement="top" title="2. Elija una fecha de salida" data-trigger="focus" style="width:100%;"/>
                <span class="datepicker-icon add-on" id="fechaFinIcon" type="date"><i class="fa fa-calendar" style="margin-left: 10%;"></i></span>
          </div>
          <div class="clearfix clear"></div>

          <div class="busc-opt hab">
             <div class="clearfix clear"></div>
             <label class="title-min">Noches</label>
				<select class="num-noc dropdown-toggle selectpicker show-menu-arrow" data-toggle="dropdown" id="selectorNoches" name="peticionWeb.noches">
                  <option value="1" selected="selected">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                </select>

          </div>

              

               
                  <div class="busc-opt hab">
                    <div class="clearfix clear"></div>
                    <label class="title-min">Habitaciones</label>

                    <select class="num-hab dropdown-toggle selectpicker show-menu-arrow" data-toggle="dropdown" name="peticionWeb.habitaciones">
                      <option value="1" selected="selected">1</option>
                      
                        <option value="2">2</option>
                      
                      
                        <option value="3">3</option>
                      

                    </select>

                  </div>
                

                
                  <!-- ocupacionHab1 ===============================================================================================-->
                  <div class="ocupacionHab1">
                  <span class="titHabitat">Hab 1:</span>

                  <div class="busc-opt pas">
                    <label class="title-min title-top">Adultos<br/>&nbsp;</label>
                    <select class="num-pas selectpicker" name="peticionWeb.adultos1">

                      <option value="1">1</option>
                      <option value="2" selected="selected">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>

                    </select>
                  </div>
                  <div class="busc-opt nin">
                    <div class="clearfix clear"></div>
                    <label class="title-min title-top" style="width:93px;">Ni&nacute;os y Beb&eacute;s</label>
                    <select class="num-nin selectpicker" name="peticionWeb.ninos1">
                      <option value="0" selected="selected">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div class="group-edad">
                    <label id="edades" class="title-min title-left edades-lab" style="display:none">Edades ni&nacute;os</label>

                    <div id="ed" class="busc-opt edad ed1">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo11">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed2" class="busc-opt edad ed2">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo12">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed3" class="busc-opt edad ed3">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo13">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed4" class="busc-opt edad ed4">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo14">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div class="clearfix clear"></div>
                  </div>
                </div>
                

                
                <!-- ocupacionHab2 ================================================================================================= -->
                  <div class="ocupacionHab2" style="display:none">
                  <span class="titHabitat">Hab 2:</span>

                  <div class="busc-opt pas">
                    <label class="title-min title-top">Adultos</label>
                    <select class="num-pas selectpicker" name="peticionWeb.adultos2">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2" selected="selected">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div class="busc-opt nin">
                    <div class="clearfix clear"></div>
                    <label class="title-min title-top" style="width:93px;">Ni&nacute;os y Beb&eacute;s</label>
                    <select class="num-nin selectpicker" name="peticionWeb.ninos2">
                      <option value="0" selected="selected">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div class="group-edad">
                    <label id="edades2" class="title-min title-left edades2-lab" style="display:none">Edades ni&nacute;os</label>

                    <div id="ed" class="busc-opt edad ed1">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo21">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed2" class="busc-opt edad ed2">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo22">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed3" class="busc-opt edad ed3">
                      <div class="clearfix clear"></div>
                      <select class="num-edad  selectpicker" name="peticionWeb.edadNinyo23">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed4" class="busc-opt edad ed4">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo24">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div class="clearfix clear"></div>
                  </div>
                </div>
                

                
                <!-- ocupacionHab3 =============================================================================================================== -->
                  <div class="ocupacionHab3" style="display:none">
                  <span class="titHabitat">Hab 3:</span>

                  <div class="busc-opt pas">
                    <label class="title-min title-top">Adultos</label>
                    <select class="num-pas selectpicker" name="peticionWeb.adultos3">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2" selected="selected">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div class="busc-opt nin">
                    <div class="clearfix clear"></div>
                    <label class="title-min title-top" style="width:93px;">Ni&nacute;os y Beb&eacute;s</label>
                    <select class="num-nin selectpicker" name="peticionWeb.ninos3">
                      <option value="0" selected="selected">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div class="group-edad">
                    <label id="edades3" class="title-min title-left" style="display:none">Edades ni&nacute;os</label>

                    <div id="ed" class="busc-opt edad">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo31">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed2" class="busc-opt edad">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo32">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed3" class="busc-opt edad">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo33">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div id="ed4" class="busc-opt edad">
                      <div class="clearfix clear"></div>
                      <select class="num-edad selectpicker" name="peticionWeb.edadNinyo34">
                        



    <option value="0">0</option>

<option value="1">1</option>
<option value="2">2</option>
<option value="3" selected="selected">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
                      </select>
                    </div>
                    <div class="clearfix clear"></div>
                  </div>
                </div>
                
                <div class="clear clearfix"></div>
              


              <div class="busc-opt" id="btn-bh1">
                
                <input type="submit" class="btn btn-default busc-btn" value="Buscar"/>
              </div>

              <div class="clear clearfix"></div>

            </form>
          </div>
        <!-- / Body Buscador  -->
        </div>

      </div>  
    </div>
</div>