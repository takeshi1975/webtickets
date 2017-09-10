<style type="text/css">
	.jcarousel-wrapper{
		margin-top:0px !important;		
	}
</style>
<script type="text/javascript">		
		$(function(){
			$("#opt0").click(function(){
				$("#add-container").load("ads/slider-poa.html");
			});
			$("#opt1").click(function(){
				$("#add-container").load("ads/mundos-poa.html");
			});
			window.console && console.log("Se va a procesar el documento de footer.jsp");
			$("#menuFooter").menuFooter();
            $(".jcarousel").slider();
            window.console && console.log("Mensaje de log");
		});				
</script>

<div id="menuFooter" style="height:39px;width:950px;margin-left:10px">
	<span id="opt0">
		<img src="content/images/poa/poa-2.png" class="pull-left"/>
	</span>
	<span id="opt1">
		<img src="content/images/poa/mundos.png" class="pull-left"/>
	</span>
	<span id="opt2">
		<img src="content/images/poa/acuatic-park.png" class="pull-left"/>
	</span>
	<span id="opt3">
		<img src="content/images/poa/ferrari-land.png" class="pull-left"/>
	</span>
	<span id="opt4">
		<img src="content/images/poa/eventos.png" class="pull-left"/>
	</span>
	<span id="opt5">
		<img src="content/images/poa/promociones.png" class="pull-left"/>
	</span>
</div>

<div id="add-container" style="width:950px; margin-left:10px;">
	<div class="jcarousel-wrapper" style="height:450px">
		<div class="jcarousel">
			<ul>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
				<li>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
					<span>
						<img alt="" height="400" src="content/images/poa/descarga.jpg" width="400" />
					</span>
				</li>
			</ul>
		</div>
	</div>

	
</div>
