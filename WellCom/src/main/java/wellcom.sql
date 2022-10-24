drop database if exists wellcom;
create database wellcom;
use wellcom;
create table member(
	mno			int auto_increment primary key ,		-- 번호[pk , autokey ] 
    mid         varchar(30) not null unique, 			-- 아이디
    mpw         varchar(30) not null,					-- 비밀번호
    mname		varchar(20) not null, 			        -- 이름
    mphone      varchar(30) not null,					-- 전화번호
    mdate		datetime default now() not null, 	    -- 회원가입일
    maddr       varchar(50) not null 					-- 주소
);

insert into member(mid, mpw, mname, mphone, maddr) values ("admin", "admin", "admin", "000-0000-0000", "admin" );
select * from member;

create table product(
    pno			int auto_increment primary key ,		-- 상품번호[pk , autokey ] 
    ptype       varchar(20) not null,               	-- 상품종류     
    pname		varchar(50) not null, 			    	-- 상품이름
	pcontent	longtext,								-- 상품내용
    pimg		longtext,								-- 사진파일
	pprice      int,                                	-- 상품가격
    pdate		datetime default now() not null,		-- 상품등록일
  	pamount		int default 1 not null,					-- 상품수량		
	pstock		int	default 1 not null					-- 상품재고
);
select * from product;
