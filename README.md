![logo_w-1](https://user-images.githubusercontent.com/67556491/193203547-ebe92e5c-5444-4f41-ab43-fb48903d5fed.png)


## 정육쩜 **프로젝트 Front-end/Back-end 소개**

- 초신선 육류를 주력으로 판매하는 쇼핑몰
- 프로젝트 기간동안 메인, 회원가입, 로그인, 리스트, 상세, 장바구니 결제 페이지를 구현했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### **개발 인원 및 기간**

- 개발기간 : 2022/9/19 ~ 2022/9/30
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-jeong6-jjeom-backend)

### **프로젝트 선정이유**

- 이 사이트는, 깔끔한 UI로 구성되어있으며 기본 기능 구현에 충실한 사이트이기 때문이다.

### **데모 영상(이미지 클릭)**

[정육쩜 시연영상](https://youtu.be/NzY8gplL_xM) 

## **적용 기술 및 구현 기능**

### **적용 기술**

> Front-End : React.js, sass
> 

> Back-End : My SQL, Bcrypt, Node.js, express, Typeorm, JsonWebToken
> 

> Common :  RESTful API
> 

### **모델링**
>
### **구현 기능**

### 회원가입/로그인

- BackEnd : Bcrypt 암호화와 JsonWebToken 인증을 적용한 회원가입, 로그인 기능 API 구현. 토큰 발행의 경우 미들웨어처럼 사용할 수 있도록 함.
            Service 레이어에서 정규표현식을 이용한 validation  진행.

### 메인페이지


### 리스트
- BackEnd : 정보조회 API/GET, 옵션 선택 재고고려(쿼리문 작성)) API
   
### 상세

- BackEnd  : 옵션 선택 재고고려 API

### 장바구니

- BackEnd  : 장바구니 CRUD 개발.
             장바구니 내에서 상품 개별 선택 제거 기능 추가(QueryString활용)
            
### 주문/결제

- BackEnd : 오더 에 필요한 정보 제공 GET
            QueryRunner를 활용하여 Transection 작성
            (선택된 카트 상품 가져오기, 카트삭제, 오더생성, 재고관리 등)
            
## **Reference**

- 이 프로젝트는 [정육각](https://www.jeongyookgak.com/index) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
