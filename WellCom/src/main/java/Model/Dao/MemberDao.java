package Model.Dao;

import Model.Dto.MemberDto;

public class MemberDao extends Dao {
	
	private static MemberDao dao = new MemberDao();
	public static MemberDao getInstance() { return dao; }
	
	public boolean signup(String mid, String mpw, String mname, String mphone, String maddr) {
		try {
			String sql = "insert into member(mid, mpw, mname, mphone, maddr) "
						+ "values(?, ?, ?, ?, ?)";
			
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			ps.setString(2, mpw);
			ps.setString(3, mname);
			ps.setString(4, mphone);
			ps.setString(5, maddr);
			ps.executeUpdate();
			
			return true;
		} catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}
	
	public boolean idcheck(String mid) {
		String sql = "select mid from member where mid= ?";
			
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			rs = ps.executeQuery();
			if(rs.next()) return true;
		} catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}
	
	public int login(String mid, String mpw) {
		String sql = "select * from member where mid = ?";
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			rs = ps.executeQuery();
			if(rs.next()) {
				sql = "select * from member where mid = ? and mpw = ?";
				
				ps = con.prepareStatement(sql);
				ps.setString(1, rs.getString(2));
				ps.setString(2, mpw);
				rs = ps.executeQuery();
				
				if(rs.next()) {
					return 1; // 로그인 성공
				}
				return 2; // 패스워드 불일치
			}
		} catch (Exception e) {
			System.out.println(e);
			return 4; // DB 오류
		}
		return 3; // 일치 아이디 없음
	}
	
	public MemberDto loginload(String mid) {
		String sql = "select * from member where mid = ?";
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, mid);
			rs = ps.executeQuery();
			if(rs.next()) {
				MemberDto dto = new MemberDto(
							rs.getInt(1), rs.getString(2),
							rs.getString(3), rs.getString(4),
							rs.getString(5), rs.getString(6),
							rs.getString(7)
						);
				return dto;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}
	
}


































