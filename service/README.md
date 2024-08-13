# 소프티어 부트캠프 4기 최종 프로젝트
> 현대 소프티어 부트캠프 Team 밟으실 수수숲...
>
> 개발기간: 2024.07.22 ~
## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [컨벤션](#컨벤션)
5. [1차 발표 pdf 링크](#1차-발표-pdf-링크)
6. [Notion 주소](#Notion-주소)
7. [주요 기능](#주요-기능)
8. [배포 주소](#배포-주소)

## 프로젝트 소개
### 신차 소개 이벤트 페이지
#### 주요 서비스
1. 메인 스토리 이벤트
> - 운전 중 발생할 수 있는 다양한 상황이 제시되고, 아이템 결합(경품 응모) 시 해당 상황을 해결할 수 있는 캐스퍼 EV의 기능 정보를 제공함
> - 월드컵 이벤트에서 얻은 '자동차' 아이템과 일일 퀴즈 이벤트에서 얻은 '툴박스' 아이템을 결합하여 경품에 응모함

2. 운전 중 피하고 싶은 상황 월드컵 이벤트
> - 캐스퍼 EV와 관련된 다양한 상황을 두 개씩 제시하고, 하나씩 선택하며 토너먼트 방식으로 진행함
> - 최종으로 선택한 결과를 확인하고, 해당 상황을 해결할 수 있는 캐스퍼 EV의 기능 정보를 제공함
> - 참여 시 메인 스토리 이벤트에 참여할 수 있는 '자동차' 아이템을 제공함

3. 일일 퀴즈 이벤트
> - 캐스퍼 EV의 기능과 관련된 일일 퀴즈 이벤트를 진행함
> - 참여 시 메인 스토리 이벤트에 참여할 수 있는 '툴박스' 아이템을 하루에 한 번 제공함

4. 기대평 이벤트
> - 운전 중 피하고 싶은 상황 월드컵 이벤트 참여 후 해당 상황과 관련된 캐스퍼 EV 기대평 작성
> - 참여 시 메인 스토리 이벤트에 참여할 수 있는 '툴박스' 아이템을 하루에 한 번 제공함

## 기술 스택
#### Environment
![js](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![js](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![js](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
#### Config
![js](https://img.shields.io/badge/yarn-CB3837?style=for-the-badge&logo=npm&logoColor=white)
#### Development
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![js](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
#### communication
![js](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## 프로젝트 구조
```
📦 client
├── src
│   ├── assets          # 이미지 등의 정적 파일들
│   │   ├── images
│   │   │ 
│   │   └── icons
│   │   
│   │
│   ├── components      # 공통 컴포넌트 관리
│   │   ├── header
│   │   │   
│   │   ├── footer
│   │   │   
│   │   ├── modal
│   │   │
│   │   └── button
│   │       
│   │
│   ├── pages           # 라우터 페이지 관리 (Head 정보 및 SSR 관리)
│   │   ├── eventIntro
│   │   │   
│   │   ├── joinEvent
│   │   │   ├── worldCup
│   │   │   │ 
│   │   │   ├── miniQuiz
│   │   │   │ 
│   │   │   ├── dailyComment
│   │   │   │ 
│   │   │   └── commentList
│   │   │
│   │   └── newCarIntro
│   │
│   ├── hooks           # 프로젝트 전역적으로 쓰이는 커스텀 hook
│   │
│   ├── context         # 상태 관리 (Context API, Redux 등)
│   │
│   ├── styles          # 전역적으로 사용하는 폰트, 색깔, spacing 등
│   │   └── global.css
│   │
│   ├── utils           # 전역적으로 쓰이는 간단한 유틸리티 함수들
│   │
│   ├── App.jsx        # 앱의 진입점
│   │
│   ├── main.jsx
│  
├── index.html
├── tailwind.config.js
└── vite.config.js
```
## 컨벤션

### 브랜치명
```
<!-- 컨벤션 -->
타입/#이슈번호/세부내용

<!-- 예시 -->
feat/#27/Button

```

### 이슈 제목
```
<!-- 컨벤션 -->
[타입] 내용

<!-- 예시 -->
[feat] Component Base - Button
```

### PR 제목
```
<!-- 컨벤션 -->
타입 : #이슈번호/내용

<!-- 예시 -->
feat : #27/Component Base - Button 기능 개발
```

## 1차 발표 pdf 링크
> https://nbviewer.org/github/softeerbootcamp4th/Team8-PineApple-FE/blob/main/team8_%EB%B0%9F%EC%9C%BC%EC%8B%A4%EC%88%98%EC%88%98%EC%88%B2_%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C%EC%B4%88%EC%95%88.pdf

## Notion 주소
```
https://www.notion.so/bside/59c69aab577144e09de0e7afef1e552f?pvs=4
```
