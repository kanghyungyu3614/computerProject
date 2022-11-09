package Model.Dto;

public class ProductDto {
	
	private int pno;
	private String ptype;
	private String pname;
	private String pcontent;
	private String pimg;
	private int pprice;
	private String pdate;
	private int pamount;
	
	public ProductDto() {
		
	}

	public ProductDto(int pno, String ptype, String pname, String pcontent, String pimg, int pprice, String pdate,
			int pamount) {
		super();
		this.pno = pno;
		this.ptype = ptype;
		this.pname = pname;
		this.pcontent = pcontent;
		this.pimg = pimg;
		this.pprice = pprice;
		this.pdate = pdate;
		this.pamount = pamount;
	}

	public int getPno() {
		return pno;
	}

	public void setPno(int pno) {
		this.pno = pno;
	}

	public String getPtype() {
		return ptype;
	}

	public void setPtype(String ptype) {
		this.ptype = ptype;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPcontent() {
		return pcontent;
	}

	public void setPcontent(String pcontent) {
		this.pcontent = pcontent;
	}

	public String getPimg() {
		return pimg;
	}

	public void setPimg(String pimg) {
		this.pimg = pimg;
	}

	public int getPprice() {
		return pprice;
	}

	public void setPprice(int pprice) {
		this.pprice = pprice;
	}

	public String getPdate() {
		return pdate;
	}

	public void setPdate(String pdate) {
		this.pdate = pdate;
	}

	public int getPamount() {
		return pamount;
	}

	public void setPamount(int pamount) {
		this.pamount = pamount;
	}

	@Override
	public String toString() {
		return "ProductDto [pno=" + pno + ", ptype=" + ptype + ", pname=" + pname + ", pcontent=" + pcontent + ", pimg="
				+ pimg + ", pprice=" + pprice + ", pdate=" + pdate + ", pamount=" + pamount + "]";
	}
	
}
