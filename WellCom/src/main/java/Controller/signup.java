package Controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Model.Dao.MemberDao;

/**
 * Servlet implementation class signup
 */
@WebServlet("/member/signup")
public class signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String mid = request.getParameter("mid");
		String mpw = request.getParameter("mpw");
		String mname = request.getParameter("mname");
		String mphone = request.getParameter("mphone");

		String maddress1 =  request.getParameter("maddress1");
		String maddress2 =  request.getParameter("maddress2");
		String maddress3 =  request.getParameter("maddress3");
		String maddress4 =  request.getParameter("maddress4");
		String maddr = maddress1+","+maddress2+","+maddress3+","+maddress4;
		
		boolean result = MemberDao.getInstance().signup(mid, mpw, mname, mphone, maddr);
		
		response.getWriter().print(result);		
	}
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public signup() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */

}
