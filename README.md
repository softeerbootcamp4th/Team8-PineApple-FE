# 소프티어 부트캠프 4기 최종 프로젝트
> 현대 소프티어 부트캠프 Team 밟으실 수수숲...
>
> 개발기간: 2024.07.22 ~
## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [컨벤션](#컨벤션)
5. [Notion 주소](#Notion-주소)
6. [주요 기능](#주요-기능)
7. [배포 주소](#배포-주소)
## 프로젝트 소개
이 프로젝트는 소프티어 부트캠프 4기 최종 프로젝트
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

## Notion 주소
```
https://www.notion.so/bside/59c69aab577144e09de0e7afef1e552f?pvs=4
```
