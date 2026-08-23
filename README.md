# Portfolio

웹 퍼블리셔 경험을 바탕으로 성장하는 프론트엔드 개발자 **이정재**의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| Framework | React.js 19 (JavaScript) |
| Build Tool | Vite 6 |
| Styling | SCSS (Sass) |
| Icons | react-icons |
| Font | Inter, Noto Sans KR |

> TypeScript가 아닌 **일반 JavaScript**로 작성되었습니다.

## 주요 기능

- **반응형 레이아웃** — 모바일, 태블릿, 데스크톱 대응
- **고정 헤더 네비게이션** — 스크롤 위치에 따른 활성 섹션 하이라이트
- **모바일 햄버거 메뉴** — 992px 미만에서 슬라이드 메뉴 제공
- **스크롤 애니메이션** — Intersection Observer 기반 reveal 효과
- **섹션별 구성** — Hero, About, Skills, Projects, Contact
- **데이터 분리** — `portfolioData.js`에서 콘텐츠 중앙 관리

## 페이지 구성

### Home (Hero)
- 이름, 직무, 소개 문구
- 프로젝트 / 연락처 이동 버튼
- 스크롤 유도 애니메이션

### About
- 자기소개 및 핵심 강점 하이라이트
- **경력** — (주)지플러스, (주)온더시스
- **교육** — 대전세잔직업전문학교, 이노비즈협회

### Skills
- Frontend, Tools, Soft Skills 카테고리별 기술 스택

### Projects
- 프로젝트 카드 (이미지, 설명, 태그, Live / GitHub 링크)

### Contact
- 이메일 및 소셜 링크 (GitHub, LinkedIn)

## 프로젝트 구조

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header/        # 고정 네비게이션, 모바일 메뉴
│   │   ├── Hero/          # 메인 히어로 섹션
│   │   ├── About/         # 소개, 경력, 교육
│   │   ├── Skills/        # 기술 스택
│   │   ├── Projects/      # 프로젝트 목록
│   │   ├── Contact/       # 연락처
│   │   ├── Footer/
│   │   ├── ScrollToTop/   # 상단 이동 버튼
│   │   └── SectionTitle/  # 섹션 공통 타이틀
│   ├── data/
│   │   └── portfolioData.js   # 모든 콘텐츠 데이터
│   ├── hooks/
│   │   └── useScrollEffects.js  # 스크롤 관련 커스텀 훅
│   ├── styles/
│   │   ├── _variables.scss    # 색상, 폰트, 브레이크포인트
│   │   ├── _mixins.scss       # 반응형, 애니메이션 믹스인
│   │   ├── _reset.scss
│   │   ├── _globals.scss
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173/` 로 접속합니다.

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

## 콘텐츠 수정

모든 텍스트, 링크, 프로젝트 정보는 `src/data/portfolioData.js` 에서 수정할 수 있습니다.

| export | 설명 |
|--------|------|
| `profile` | 이름, 직무, 이메일, GitHub 등 기본 정보 |
| `navLinks` | 네비게이션 메뉴 항목 |
| `aboutContent` | About 섹션 소개글 및 하이라이트 |
| `experience` | 경력 사항 |
| `education` | 교육 이력 |
| `skills` | 기술 스택 |
| `projects` | 프로젝트 목록 |
| `contactInfo` | Contact 섹션 문구 |

## 반응형 브레이크포인트

SCSS 변수(`src/styles/_variables.scss`) 기준:

| 변수 | 크기 | 용도 |
|------|------|------|
| `$breakpoint-sm` | 576px | 소형 태블릿 |
| `$breakpoint-md` | 768px | 태블릿 |
| `$breakpoint-lg` | 992px | 데스크톱 (모바일 메뉴 전환) |
| `$breakpoint-xl` | 1200px | 대형 데스크톱 |

## SCSS 구조

- **`_variables.scss`** — 색상, 타이포그래피, 간격, 브레이크포인트 등 디자인 토큰
- **`_mixins.scss`** — `respond-to`, `card-base`, `reveal-animation` 등 재사용 믹스인
- **컴포넌트별 `.scss`** — 각 컴포넌트 폴더에 co-located 스타일 파일

## 디자인

- **테마** — 다크 모드 기반
- **포인트 컬러** — `#6c63ff` (보라 계열)
- **카드 UI** — 경력, 교육, 스킬, 프로젝트 섹션에 통일된 카드 스타일 적용

## 라이선스

Private — 개인 포트폴리오 용도
