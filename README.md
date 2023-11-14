# Plan-Trek
https://github.com/KDT-IaaS-Class-One-Group/Plan-Trek.git

# 프로젝트 디렉토리 구조 및 MVC 패턴

## MVC 패턴

MVC 패턴은 소프트웨어 디자인 패턴 중 하나로, 소프트웨어를 세 가지 컴포넌트로 분리하여 개발하는 방법

- **Model (모델):** 데이터와 비즈니스 로직을 담당. 데이터의 상태를 유지하고, 변경 사항을 감지하여 View에 알림.
- **View (뷰):** 사용자 인터페이스를 담당. 모델의 상태를 표시하고, 사용자 입력을 받아 컨트롤러에 전달.
- **Controller (컨트롤러):** 사용자 입력을 받아 모델 또는 뷰를 업데이트. 모델과 뷰 간의 상호 작용을 조정.

## 디렉토리 구조

### Plan-Trek/

#### 구조
```
Plan-Trek/
│
├── app.js
│
├── routes/
│   └── route.js
│
├── controllers/
│   └── [Controller files]
│
├── models/
│   └── data/
│       └── myTask.json
│
└── public/
    ├── scripts/
    │   ├── main.js
    │   └── [Other client-side script files]
    ├── styles/
    │   ├── common.css
    │   └── style.css
    └── views/
        └── index.html
```
markdown
Copy code

#### 상세 설명
- `app.js`: 서버와 미들웨어 설정을 하는 파일.
- `routes/`: 라우팅 파일들을 담는 폴더. 각 파일은 특정 기능의 라우팅을 담당.
  - `route.js`: 초기 진입 페이지 및 기타 라우팅을 설정하는 파일.
- `controllers/`: 컨트롤러 파일들을 담는 폴더. 각 파일은 특정 기능의 비즈니스 로직을 담당.
- `models/`: 모델 파일들을 담는 폴더. 각 파일은 데이터와 관련된 로직을 담당.
  - `data/`: 데이터 파일들을 담는 폴더.
    - `myTask.json`: 사용자가 입력한 일정을 동적으로 저장하는 파일.
- `public/`: 클라이언트 사이드에서 사용되는 정적 파일들을 담는 폴더.
  - `scripts/`: 클라이언트 사이드의 스크립트 파일들을 담는 폴더.
    - `main.js`: 메인 클라이언트 사이드 스크립트 파일.
    - `[Other client-side script files]`: 기타 클라이언트 사이드 스크립트 파일들이 들어갈 공간.
  - `styles/`: 클라이언트 사이드의 스타일 시트 파일들을 담는 폴더.
    - `common.css`: 공통으로 사용되는 스타일을 정의한 파일.
    - `style.css`: 해당 프로젝트에 특화된 스타일을 정의한 파일.
  - `views/`: 클라이언트 사이드의 뷰 파일들을 담는 폴더.
    - `index.html`: 초기 진입 페이지 파일.