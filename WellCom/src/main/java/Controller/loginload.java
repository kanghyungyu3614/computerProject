package Controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import Model.Dao.MemberDao;
import Model.Dto.MemberDto;

/**
 * Servlet implementation class loginload
 */
@WebServlet("/member/loginload")
public class loginload extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		// 회원정보 호출
		String mid = (String)request.getSession().getAttribute("mid");
	
		if(mid == null) {
			return;
		}
		
		MemberDto dto = MemberDao.getInstance().loginload(mid);

		// dto를 ajax로 못받으니까 JSONObject로 String 객체로 넘겨줌
		JSONObject object = new JSONObject();
		object.put("mno", dto.getMno());
		object.put("mid", dto.getMid());
		object.put("mpw", dto.getMpw());
		object.put("mname", dto.getMname());
		object.put("mphone", dto.getMphone());
		object.put("mdate", dto.getMdate());
		object.put("maddr", dto.getMaddr());
		
		// JSONObject 한글 깨져서 response에도 인코딩을 해주었다.
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(object);		
	}
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginload() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
