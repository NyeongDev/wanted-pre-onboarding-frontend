# 원티드 프리온보딩 프론트엔드 사전과제

&nbsp;

## 1. 배포 링크

📌 https://todolist-dun-two.vercel.app

&nbsp;

## 2. 프로젝트 설치 및 실행

1. 저장소 복제

```
git clone https://github.com/NyeongDev/wanted-pre-onboarding-frontend.git
```

2. 패키지 설치

```
npm install
```

3. root 경로에 .env 파일 생성

```
REACT_APP_SERVER_URL = https://pre-onboarding-selection-task.shop
```

4. 프로젝트 실행

```
npm start
```

&nbsp;

## 3. 기술 스택

- JavaScript
- React
- Axios
- react-router-dom
- styled-components

&nbsp;

## 4. 기능

### 1) 로그인 , 회원가입

<img src="https://user-images.githubusercontent.com/110284486/218668809-9e5d5b0b-3579-483f-bac3-6ffba413b42f.gif" width="400" height="400"/>

- 이메일, 비밀번호 유효성 검사 (이메일: @ 포함, 비밀번호: 8자 이상)
- 유효성 검사를 통과할 때만 버튼 활성화
- 회원가입 성공 시 /signin 경로로 이동
- 로그인 성공 시 /todo 경로로 이동
- JWT를 로컬 스토리지에 저장
- 로컬 스토리지에 토큰이 있는 상태로 /signin, /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트

&nbsp;

### 2) 투두리스트

<img src="https://user-images.githubusercontent.com/110284486/218668837-7cd98d7c-e401-4a39-ba88-c95e3a01f1bb.gif" width="400" height="400"/>

- 투두 조회, 추가, 수정, 삭제 기능 구현
- `<input type="checkbox"/>` 를 활용한 투두 완료 기능 구현
- 수정 버튼을 눌러 수정 모드 활성화
- 수정 모드에서는 작성된 투두 내용이 input 창 안에 입력된 상태로 변경되며, 저장/취소 버튼이 표시됨
- 취소 버튼을 누르면 수정한 내용을 초기화하고, 수정 모드를 비활성화
