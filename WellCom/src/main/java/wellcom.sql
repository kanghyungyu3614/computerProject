drop database if exists welcom;
create database welcom;
use welcom;
create table member(
	mno			int auto_increment primary key ,		-- 번호[pk , autokey ] 
    mname		varchar(20) NOT NULL , 			        -- 작성자
    mid         varchar(30) not null, 					-- 아이디
    mpw         varchar(30) not null,					-- 비밀번호
    mphone      varchar(30) not null,					-- 전화번호
    maddr       varchar(50) not null, 					-- 주소
    mdate		datetime default now() NOT NULL 	    -- 회원가입일
);

create table product(
    pno			int auto_increment primary key ,		-- 상품번호[pk , autokey ] 
    ptype       varchar(20) not null ,                  -- 상품종류     
    pname		varchar(50) NOT NULL , 			        -- 상품이름
	pcontent	longtext NULL,							-- 상품내용
    pimg		longtext NULL,							-- 사진파일
	pprice      int,                                    -- 상품가격
    pdate		datetime default now() NOT NULL ,	    -- 상품등록일 
	ppoint		int	default 1 NOT NULL					--  상품제고
);
