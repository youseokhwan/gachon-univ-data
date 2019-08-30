package javabasic.week3;

import java.sql.*;

public class JDBC_Exam {

	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch(ClassNotFoundException ce) {
//			ce.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		try {
			String dbURL = "jdbc:mysql://localhost:3306/mysql?useSSL=false&serverTimezone=Asia/Seoul";
			Connection con = DriverManager.getConnection(dbURL, "root", "0c51359c9e");
			Statement stmt = con.createStatement();
			StringBuffer sb = new StringBuffer();
			sb.setLength(0);
			sb.append("select * from student");
			ResultSet rs = stmt.executeQuery(sb.toString());
			while(rs.next()) {
				System.out.println("id : " + rs.getString(1) + ", " + "name : " + rs.getString("name"));
			}
		} catch(SQLException se) {
			System.out.println("Connect Error");
//			se.printStackTrace();
		}
	}

}
