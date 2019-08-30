<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.sql.*" %>
<%
	request.setCharacterEncoding("utf-8");

	Connection conn = null;
	PreparedStatement pstmt = null;
	
	// 데이터베이스 연결관련정보를 문자열로 선언
	String jdbc_driver = "com.mysql.cj.jdbc.Driver";
	String jdbc_url = "jdbc:mysql://127.0.0.1/jspdb?useSSL=false&serverTimezone=Asia/Seoul";
	
	try {
		// JDBC 드라이버 로드
		Class.forName(jdbc_driver);
		
		// 데이터베이스 연결정보를 이용해 Connection 인스턴스 정보
		conn = DriverManager.getConnection(jdbc_url, "root", "password");
		
		// Connection 클래스의 인스턴스로부터 SQL문 작성을 위한 Statement 준비
		String sql = "insert into jdbc_test values(?,?)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, request.getParameter("username")); // 숫자 1, 2는 ?의 순서
		pstmt.setString(2, request.getParameter("email"));
		
		if(request.getParameter("username") != null) {
			pstmt.executeUpdate();
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Day 2 : JDBC 테스트</title>
</head>
<body>
	<div align="center">
		<h2>이벤트 등록</h2>
		<hr>
		<form name="form1" method="post" action="jdbc_test.jsp">
		등록이름 : <input type="text" name="username">
		email 주소 : <input type="text" name="email" size="20">
		<input type="submit" value="등록">
		</form>
		<hr>
	</div>
	# 등록 목록<p>
<%
	// select 문장을 문자열 형태로 구성한다.
	String sql = "select username, email from jdbc_test";
	pstmt = conn.prepareStatement(sql);
	
	// select를 수행하면 데이터 정보가 ResultSet 클래스의 인스턴스로 return.
	ResultSet rs = pstmt.executeQuery();
	
	int i = 1;
	// 마지막 데이터까지 반복함
	while(rs.next()) {
		out.println(i + " : " + rs.getString("username") + ", " + rs.getString("email") + "<br>");
		i++;
	}
	
	// 사용한 자원의 반납
	rs.close();
	pstmt.close();
	conn.close();
%>
	
</body>
</html>