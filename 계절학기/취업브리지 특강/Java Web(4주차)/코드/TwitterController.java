package javaweb.day2;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class TwitterController
 */
@WebServlet("/twitter")
public class TwitterController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private HttpServletResponse response;
	private HttpSession session;
	private ServletContext application;
	private String view;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TwitterController() {
        super();
    }

	private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		request.setCharacterEncoding("utf-8");
		this.request = request;  // 기존 doGet() 사용할 땐 문제가 없으나, 멀티 컨트롤러를 사용하려면 따로 선언 필요
		this.response = response;
		session = request.getSession();
		application = request.getServletContext();
		
		String action = request.getParameter("action");
		if(action == null) {
			session.invalidate();
			response.sendRedirect("/javaweb/day2/twitter_login.jsp");  // 비정상적인 요청이 들어오면 로그인 화면으로 다시 보냄
			
			return;
		}
		
		switch(action) {
		case "login":
			login(); break;
		case "tweet":
			tweet(); break;
		}
		
		// login() 혹은 tweet()이 끝나면 지정된 view로 감
		// forward 메소드를 이용해서 parameter 유지
		RequestDispatcher dispatcher = request.getRequestDispatcher(view);
		dispatcher.forward(request, response);
	}
    
	private void login() {
		String username = request.getParameter("username");
		
		if(username != null) {
			session.setAttribute("user", username);
			// session은 map 구조(key, value)
		}
		
		view = "/day2/tweet_list.jsp";  // 스프링에선 view를 return하는 구조임
	}
	
	private void tweet() {
		String msg = request.getParameter("msg");
		String username = (String)session.getAttribute("user");
		
		List<String> msgs = (List<String>)application.getAttribute("msgs");
		if(msgs == null) {
			msgs = new ArrayList<String>();
			application.setAttribute("msgs", msgs);
		}
		
		LocalDateTime date = LocalDateTime.now();
		DateTimeFormatter f = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		
		msgs.add(username + " :: " + msg + " , " + date.format(f));
		application.log(msg + "추가됨");  // tomcat의 log 시스템을 이용
		
		view = "/day2/tweet_list.jsp";
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);  // 여러 요청을 처리할 Servlet을 만들 것 이기 때문에 메소드 수정
											// 기존 자바 Servlet은 하나만을 처리하는 문제점이 있음(스프링프레임워크로 편리하게 구현 가능)
	}

}
