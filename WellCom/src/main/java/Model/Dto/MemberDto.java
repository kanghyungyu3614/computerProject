package Model.Dto;

public class MemberDto {

	private int mno;
	private String mname;
	private String mid;
	private String mpw;
	private String mphone;
	private String maddr;
	private String mdate;
	
	public MemberDto() {
		
	}

	public MemberDto(int mno, String mname, String mid, String mpw, String mphone, String maddr, String mdate) {
		super();
		this.mno = mno;
		this.mname = mname;
		this.mid = mid;
		this.mpw = mpw;
		this.mphone = mphone;
		this.maddr = maddr;
		this.mdate = mdate;
	}

	public int getMno() {
		return mno;
	}

	public void setMno(int mno) {
		this.mno = mno;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
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

	public String getMphone() {
		return mphone;
	}

	public void setMphone(String mphone) {
		this.mphone = mphone;
	}

	public String getMaddr() {
		return maddr;
	}

	public void setMaddr(String maddr) {
		this.maddr = maddr;
	}

	public String getMdate() {
		return mdate;
	}

	public void setMdate(String mdate) {
		this.mdate = mdate;
	}

	@Override
	public String toString() {
		return "MemberDto [mno=" + mno + ", mname=" + mname + ", mid=" + mid + ", mpw=" + mpw + ", mphone=" + mphone
				+ ", maddr=" + maddr + ", mdate=" + mdate + "]";
	}
	
}
