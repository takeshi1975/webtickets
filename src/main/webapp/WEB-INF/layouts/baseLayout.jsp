<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">


<html>
<s:i18n name="textos">
<head>	
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <tiles:insertAttribute name="includes"/>
    <link rel="icon" type="image/png" href="http://backnuevo.europlayas.net/backnuevo/content/images/favicon_europlayas.png"/>
    <link rel="icon" type="image/png" href="content/images/favicon_europlayas.png">

	<script src="${pageContext.request.contextPath}/content/js/jquery-2.0.3.min.js"></script>
	<script src="${pageContext.request.contextPath}/content/js/jquery.cookie.js"></script>
	<script src="${pageContext.request.contextPath}/content/js/jquery-ui.min.js"></script>
	<link href="${pageContext.request.contextPath}/content/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="${pageContext.request.contextPath}/content/css/bootstrap-theme.min.css" rel="stylesheet" media="screen">

	<link href="${pageContext.request.contextPath}/content/css/trenHotelDispo.css" rel="stylesheet" media="screen">
	<link href="${pageContext.request.contextPath}/content/css/vueloHotelDispo.css" rel="stylesheet" media="screen">

	<link href="${pageContext.request.contextPath}/content/css/general.css" rel="stylesheet" media="screen">
	<link href="${pageContext.request.contextPath}/content/css/europlayas.css?v13" rel="stylesheet" media="screen">
	<link href="${pageContext.request.contextPath}/content/css/barcoHotelDispo.css" rel="stylesheet" media="screen">
	<link href="${pageContext.request.contextPath}/content/css/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" media="screen">

	<link href="${pageContext.request.contextPath}/content/js/silviomoreto-bootstrap-select-df2059c/bootstrap-select.min.css" rel="stylesheet" media="screen">

	<script src="${pageContext.request.contextPath}/content/js/bootstrap.min.js"></script>

	<script src="${pageContext.request.contextPath}/content/js/silviomoreto-bootstrap-select-df2059c/bootstrap-select.min.js"></script>

	<%--Font calls [Font-awesome]--%>
	<link href="${pageContext.request.contextPath}/content/fonts/font-awesome-4.0.3/css/font-awesome.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/content/fonts/font-awesome-4.0.3/css/font-awesome.min.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/content/css/select2/select2.css" rel="stylesheet"/>
	<script src="${pageContext.request.contextPath}/content/js/select2/select2.min.js"></script>
	<script src="${pageContext.request.contextPath}/content/js/select2/select2_locale_es.js"></script>
	
	<%--Google Fonts--%>

	<link href='//fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic' rel='stylesheet' type='text/css'>
	<link href="${pageContext.request.contextPath}/content/css/plantillasDin.css" rel="stylesheet" media="screen">
    
    <link type="text/css" href="content/css/poa/portaventura.css"/>    
    <link rel="stylesheet" href="content/css/jcarousel.css"/>	
	<script type="text/javascript" src="content/js/jcarousel.js"></script>	          
    <script type="text/javascript" src="content/js/poa/controls-poa.js"></script>
	<script type="text/javascript" src="content/js/poa/portaventura.js"></script>
		
	<title><tiles:insertAttribute name="title"/></title>	  	
	<style type="text/css">
		body *{
			margin:0px 0px;
			padding:0px 0px;		
		}
		.col-md-4, .col-md-8{ 
			height:500px;			
		}
		.form-group{
			margin:10px 0px 0px 15px;						
		}
	
	</style>
</head>
<body>

	<div class="fondoimageSearch" style="display:none;visibility:hidden;"></div>

	<tiles:insertAttribute name="header"/>

	<!-- Buscador -->
	<div class="container" style="height:488px; padding-bottom:12px;">
		<div class="row">
			<div class="wrapper" style="width:310px; height:488px;float:left; margin-left:10px">
				<div id="tab-control" style="height: 50px;background-color:#ff0000;">					
					<span class="img-one"><img src="/webtickets/content/images/poa/BotonesH-P_02.png" class="pull-left"/></span>
					<span class="img-two"><img src="/webtickets/content/images/poa/Entradas.png"      class="pull-left"/></span>							
				</div>
				<div class="tab-content" style="border:1px solid #a2a2ac; height:438px;">
					<tiles:insertAttribute name="buscador1"/>
					<tiles:insertAttribute name="buscador2"/>
				</div>
			</div>	
			<div style="width:640px;float:left">
				<tiles:insertAttribute name="slider"/>
			</div>		
		</div>	 			
	</div> <!-- end for container: searcher + slider -->
	<!-- Menú inferior -->
	<div class="clear"></div>
	<tiles:insertAttribute name="menu2"/>
	
	<tiles:insertAttribute name="footer"/>

</body>
</s:i18n>
</html>
