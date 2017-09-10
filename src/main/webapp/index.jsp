<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>

<html>
	<body>
		<p>
		<a href="<s:url action='base'/>">Link to tiles sample</a>
		<div>
			<tiles:insertAttribute name="head"   ignore="true"/>
   			<tiles:insertAttribute name="body"   ignore="true"/>
   			<tiles:insertAttribute name="footer" ignore="true"/>
   		</div>
	</body>

</html>