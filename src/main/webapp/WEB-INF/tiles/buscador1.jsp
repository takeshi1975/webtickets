<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<div id="tab-two">
	<form>
		<div class="form-group">
			<div class="row">
				<div class="col-sm-12" style="margin-bottom: 4px">Fecha de entrada</div>
			</div>
			<div class="row" name="Fila_de_fechaEntrada">
				<div class="col-md-12">
					<input type="text" name="fechaEntrada" class="fechasEPL" />
				</div>
			</div>
		</div>
		<div class="clearfix clear"></div>
			<div class="form-group">
				<div class="row">
					<div class="col-sm-12" style="margin-bottom: 4px">Fecha de salida</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<input type="text" name="fechaSalida" class="fechasEPL" />
					</div>
				</div>
			</div>
			<div class="clearfix clear"></div>

			<div class="form-group">
				<div class="row">
					<div class="col-sm-6">Adultos</div>
					<div class="col-sm-6">Niños (4 a 12 años)</div>
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="col-sm-4"><input name="adultos"  class="spinner" value="1" /></div>			
					</div>
					<div class="col-sm-6">
						<div class="col-sm-4"><input name="niños" class="spinner" value="2" /></div>
					</div>
				</div>
			</div>
			<div class="form-group container">				
			<div class="container">
				<div class="row" style="margin-left:33.333%">
					<div style="boder:none; height:100px"></div>
					<div class="col-md-2">	
						<input type="image"
							src="${pageContext.request.contextPath}/content/images/poa/buscar.png"
							onClick="submit()" />
					</div>
				</div>
			</div>
		</div>
	</form>
</div>		
		
