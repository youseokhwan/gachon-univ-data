<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="inc_header.html"%>
<title>Twitter Login</title>
</head>
<body>
<div class="container mx-auto m-5 p-5 bg-info w-50 shadow">  <!-- CSS 속성 -->
	<h2>Twitter::Login</h2>
	<form action="/javaweb/twitter" method="post">  <!-- 서블릿 호출 -->
		<input type="hidden" name="action" value="login" />
		<div class="input-group">
			<input name="username" type="text" class="form-control" placeholder="login id" />  <!-- class 키워드는 부트스트랩 관련 -->
			<input type="submit" class="btn btn-warning" value="Login" />
		</div>
	</form>
</div>
</body>
</html>