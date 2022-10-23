package Model.Dto;

public class MemberDto {

	private int mno;
	private String mid;
	private String mpw;
	private String mname;
	private String mphone;
	private String mdate;
	private String maddr;
	
	public MemberDto() {
		
	}

	public MemberDto(int mno, String mid, String mpw, String mname, String mphone, String mdate, String maddr) {
		super();
		this.mno = mno;
		this.mid = mid;
		this.mpw = mpw;
		this.mname = mname;
		this.mphone = mphone;
		this.mdate = mdate;
		this.maddr = maddr;
	}

	public int getMno() {
		return mno;
	}

	public void setMno(int mno) {
		this.mno = mno;
	}

	public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}

	public String getMpw() {
		return mpw;
	}

	public void setMpw(String mpw) {
		this.mpw = mpw;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getMphone() {
		return mphone;
	}

	public void setMphone(String mphone) {
		this.mphone = mphone;
	}

	public String getMdate() {
		return mdate;
	}

	public void setMdate(String mdate) {
		this.mdate = mdate;
	}

	public String getMaddr() {
		return maddr;
	}

	public void setMaddr(String maddr) {
		this.maddr = maddr;
	}

	@Override
	public String toString() {
		return "MemberDto [mno=" + mno + ", mid=" + mid + ", mpw=" + mpw + ", mname=" + mname + ", mphone=" + mphone
				+ ", mdate=" + mdate + ", maddr=" + maddr + "]";
	}
	
}
