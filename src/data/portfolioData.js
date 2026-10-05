export const profile = {
  name: '이정재',
  role: '프론트엔드 개발자',
  tagline: '사용자 경험을 최우선으로 생각하는 개발자입니다.',
  email: 'st20916@naver.com',
  github: 'https://github.com/JeongJae1203',
  linkedin: 'https://linkedin.com',
  resume: '#',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const aboutContent = {
  title: 'About Me',
  subtitle: '웹 퍼블리셔 경험을 바탕으로 성장하는 프론트엔드 개발자입니다.',
  description: [
    '웹 퍼블리셔로 HTML, CSS, JavaScript를 활용해 다양한 웹사이트의 마크업과 스타일링, 반응형 UI 구현을 담당했습니다. 시맨틱 마크업, 크로스 브라우징, 웹 접근성을 고려한 퍼블리싱 경험을 통해 UI 구현력과 디테일에 대한 감각을 키웠습니다.',
    '현재는 퍼블리싱에서 쌓은 기반 위에 React 기반 웹 애플리케이션 개발로 영역을 확장하고 있습니다. 디자인 시안을 정확하게 구현하는 것은 물론, 컴포넌트 설계와 인터랙션 구현, 성능 최적화까지 사용자 경험 전반을 고민합니다.',
    '기획·디자인·개발 팀과의 협업 경험을 바탕으로, 화면 단위의 구현을 넘어 서비스 관점에서 문제를 해결하는 개발자로 성장하고 있습니다.',
  ],
  highlights: [
    { label: '경력', value: 'Web Publisher → Frontend' },
    { label: '강점', value: 'UI · Markup · Responsive' },
    { label: '기술 스택', value: 'React · JS · SCSS' },
  ],
};

export const experience = [
  {
    company: '(주)지플러스',
    period: '2020.10 - 2025.03',
    role: 'e-biz 사업부 디자인팀 - 퍼블리싱 총괄',
    details: [
      'HTML, CSS, JS, SCSS를 활용해 웹 표준 및 접근성 준수하여 자사 및 타사 웹사이트 퍼블리싱',
      '웹 디자이너 및 백엔드 개발자와의 협업 툴을 적극적으로 활용해 지속적인 커뮤니케이션',
      '클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화',
    ],
  },
  {
    company: '(주)온더시스',
    period: '2018.02 - 2020.01',
    role: '시스템 개발부 - Java 기반 웹 개발',
    details: [
      'Spring, Tibero DB 한국수자원공사 및 기타 지자체 웹 수문 현황 모니터링 개발',
      '웹 디자이너와의 지속적인 커뮤니케이션',
      '클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화',
    ],
  },
];

export const education = [
  {
    institution: '대전세잔직업전문학교',
    period: '2025.04 - 2025.10 / 2020.04 - 2020.10',
    programs: [
      '프론트엔드 개발자 과정 수료',
      '웹 디자인 & 퍼블리셔 과정 수료',
    ],
    details: [
      'Javascript, Vue.js, React.js, MySQL 학습',
      '스터디를 주최하여 개발 공부 진행 및 동기생들과 원활한 소통과 커뮤니케이션',
      '팀 프로젝트 1회 진행 (대전세잔직업전문학교 리뉴얼)',
      'HTML, CSS, Javascript, JQuery 학습',
    ],
  },
  {
    institution: '이노비즈협회',
    period: '2017.06 - 2017.12',
    programs: ['Java 기반 웹 개발자 과정 수료'],
    details: [
      'Spring, JPA, Oracle DB 학습',
      '팀 프로젝트 1회 진행 (도서 관리 시스템)',
    ],
  },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'SCSS', 'Responsive Web'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'Figma', 'VS Code', 'Vercel'],
  },
  {
    category: 'Soft Skills',
    items: ['문제 해결', '협업 커뮤니케이션', 'UI/UX 이해', '자기 주도 학습'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'My Portfolio',
    description:
      'React.js + Typescript 기반으로 작성한 이전 포트폴리오입니다.',
    tags: ['React', 'SCSS', 'Typescript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: 'https://jarryjeong.vercel.app/',
    githubUrl: 'https://github.com/JeongJae1203/portfolio',
    featured: true,
  },
  {
    id: 2,
    title: 'NeverWatchLater',
    description:
      '유튜브 ’나중에 볼 동영상’을 Gemini AI 3줄 요약과 D-Day 시스템으로 자동 정리해 주는 린(Lean) 웹 서비스',
    tags: ['React', 'API', 'CSS Modules'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f008b32?w=800&q=80',
    liveUrl: 'https://neverwatchlater-wine.vercel.app/',
    githubUrl: 'https://github.com/st20916/neverwatchlater',
    featured: true,
  },
  // {
  //   id: 3,
  //   title: 'Portfolio Website',
  //   description:
  //     '개인 포트폴리오 웹사이트. SCSS 변수/믹스인을 활용한 체계적인 스타일 구조와 반응형 디자인을 적용했습니다.',
  //   tags: ['React', 'SCSS', 'Vite'],
  //   image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: 'Todo Application',
  //   description:
  //     '로컬 스토리지 기반 할 일 관리 앱. 드래그 앤 드롭, 필터링, 다크 모드 기능을 포함합니다.',
  //   tags: ['React', 'LocalStorage', 'SCSS'],
  //   image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  // },
];

export const contactInfo = {
  title: 'Contact',
  subtitle: '함께 일하고 싶으시다면 언제든 연락 주세요.',
  message:
    '새로운 프로젝트, 협업 기회, 또는 궁금한 점이 있으시면 아래 이메일로 연락해 주세요.',
};