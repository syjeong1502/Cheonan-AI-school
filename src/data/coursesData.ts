import { AgeGroup, AiTool, CourseProposal } from '../types';

export const AGE_GROUPS_META: Record<
  AgeGroup,
  {
    name: string;
    subtext: string;
    description: string;
    recommendedTools: AiTool[];
    pedagogyTips: string[];
    badgeColor: string;
  }
> = {
  senior: {
    name: '시니어 (60세 이상 어르신)',
    subtext: '디지털 격차 해소 및 생활 밀착형 AI',
    description: '스마트폰 기반 음성 인터페이스, 말벗 대화, 건강/복지 알림, 추억 사진 복원 및 손주 소통용 콘텐츠 제작 중심의 친근한 실습 교육',
    recommendedTools: ['chatgpt', 'gemini', 'image_gen'],
    pedagogyTips: [
      '스마트폰 화면 글자 크기 확대 및 음성 받아쓰기(STT) 적극 활용',
      '전문 용어(Prompt, LLM 등) 대신 "인공지능 비서에게 말 걸기" 등 쉬운 비유 사용',
      '1회당 실습 과제를 1~2개로 압축하고 짝꿍/반복 학습 세션 배치'
    ],
    badgeColor: 'text-amber-800 bg-amber-50 border-amber-200'
  },
  elementary: {
    name: '초등학생 (꿈나무 어린이)',
    subtext: '상상력 기반 창의 AI & 코딩 첫걸음',
    description: '나노바나나(NanoBanana) 및 엔트리 블록 AI, 창작 동화책 만들기, 올바른 AI 이용 윤리와 안전 가이드라인을 놀이처럼 체득하는 과정',
    recommendedTools: ['nanobanana', 'chatgpt', 'image_gen'],
    pedagogyTips: [
      '텍스트 입력 부담을 줄이고 블록형 인터페이스 및 드로잉 도구 결합',
      'AI가 만들어낸 답변을 비판적으로 검토하는 팩트체크 놀이 활동 포함',
      '개인정보(이름, 얼굴사진 등)를 AI에 입력하지 않도록 안전 수칙 철저 교육'
    ],
    badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
  },
  youth: {
    name: '중·고등학생 (청소년)',
    subtext: '논리적 탐구 & 문제 해결 AI',
    description: 'Claude를 활용한 심층 독서 및 논리 글쓰기, 수학/과학 개념 시각화, 교과 탐구보고서 주제 발굴 및 비판적 사고력 함양',
    recommendedTools: ['claude', 'gemini', 'github'],
    pedagogyTips: [
      '단순 과제 대필 방지를 위해 "생각의 파트너"로서 질문을 발전시키는 프롬프트 기법 지도',
      '다양한 관점의 토론과 출처 표기, 저작권 및 연구 윤리 의식 고취',
      '코딩 및 수식 표현 등 학업 연계 프로젝트 중심 진행'
    ],
    badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200'
  },
  college: {
    name: '대학생·청년 (취업/실무)',
    subtext: '개발 협업 & 비즈니스 자동화',
    description: 'GitHub & Copilot을 통한 실전 프로젝트 협업, 제미나이/클로드 API 기반 생산성 파이프라인 구축 및 포트폴리오 차별화',
    recommendedTools: ['github', 'claude', 'gemini'],
    pedagogyTips: [
      '버전 관리(Git)와 GitHub Copilot의 실제 코드 리뷰 및 디버깅 시나리오 훈련',
      '기업 실무에서 요구되는 문서화(Readme), 데이터 분석 자동화 실무 적용',
      '오픈소스 기여 경험 및 실질적인 기술 포트폴리오 산출물 제작 유도'
    ],
    badgeColor: 'text-blue-800 bg-blue-50 border-blue-200'
  },
  general: {
    name: '소상공인·일반시민',
    subtext: '생업 생산성 & 생활 자동화',
    description: '천안 관내 자영업자와 시민을 위한 매장 홍보 카드뉴스 제작, 스마트스토어 상세페이지 기획, 행정 민원 서식 작성 자동화',
    recommendedTools: ['chatgpt', 'gemini', 'image_gen'],
    pedagogyTips: [
      '즉시 매출이나 일상 업무에 적용할 수 있는 템플릿(문구, 숏폼 대본) 제공',
      '무료 플랜과 모바일 앱 위주 구성으로 추가 비용 부담 최소화',
      '천안시 지역 상권 및 로컬 문화 콘텐츠와 연계한 실습 예제 활용'
    ],
    badgeColor: 'text-purple-800 bg-purple-50 border-purple-200'
  }
};

export const AI_TOOLS_META: Record<
  AiTool,
  {
    name: string;
    developer: string;
    summary: string;
    strengths: string;
    typicalAudience: string;
    iconLabel: string;
  }
> = {
  chatgpt: {
    name: 'ChatGPT (OpenAI)',
    developer: 'OpenAI',
    summary: '전 세계 표준 생성형 대화 AI, 멀티모달 음성 대화 및 GPTs 커스텀 봇 제작',
    strengths: '직관적인 인터페이스, 음성 대화 지원, 광범위한 일상/업무 활용성',
    typicalAudience: '전 연령 (특히 시니어 및 일반 시민 입문용)',
    iconLabel: 'GPT'
  },
  gemini: {
    name: 'Google Gemini',
    developer: 'Google',
    summary: '구글 워크스페이스(문서·시트·메일) 연동 및 실시간 웹 검색 기반 멀티모달',
    strengths: '구글 생태계와 긴밀한 통합, 이미지·영상 동시 분석, 최신 실시간 정보 탐색',
    typicalAudience: '대학생, 직장인, 스마트폰 활용 시니어',
    iconLabel: 'Gemini'
  },
  claude: {
    name: 'Anthropic Claude',
    developer: 'Anthropic',
    summary: '초장문 분석, 탁월한 한국어 작문 뉘앙스 및 구조적 기획서·코드 작성',
    strengths: '안전하고 정교한 추론, 긴 글 요약, 체계적인 논리 문서 작성',
    typicalAudience: '중고등학생 탐구, 대학생 리포트, 기획자 및 강사',
    iconLabel: 'Claude'
  },
  github: {
    name: 'GitHub & Copilot',
    developer: 'GitHub / Microsoft',
    summary: '글로벌 개발 협업 플랫폼 및 AI 코딩 페어 프로그래머',
    strengths: '코드 자동 완성, 디버깅 설명, 버전 관리 및 오픈소스 프로젝트 협업',
    typicalAudience: '대학생, 청년 취준생, IT 심화 교육생',
    iconLabel: 'GitHub'
  },
  nanobanana: {
    name: '나노바나나 (NanoBanana)',
    developer: 'AI 에듀테크 & 피지컬 컴퓨팅',
    summary: '어린이·초심자를 위한 비주얼 블록 기반 AI 알고리즘 & 스마트 교구',
    strengths: '코딩을 몰라도 드래그 앤 드롭으로 AI 카메라 비전, 모션 인식, 인터랙티브 프로젝트 구현',
    typicalAudience: '초등학생, 청소년 방과후 교실, 메이커 동아리',
    iconLabel: 'Nano'
  },
  image_gen: {
    name: '생성형 이미지 & 크리에이티브 AI',
    developer: 'DALL-E / Imagen / Canva AI',
    summary: '텍스트 프롬프트로 고화질 일러스트, 동화 삽화, 홍보 포스터 생성',
    strengths: '시각화 직관성, 디자인 비전공자도 1분 만에 시각 산출물 제작 가능',
    typicalAudience: '초등학생 동화책 창작, 소상공인 마케팅, 시니어 갤러리',
    iconLabel: 'Visual'
  }
};

export interface CourseCatalogItem {
  id: string;
  title: string;
  subtitle: string;
  targetAge: AgeGroup;
  primaryTool: AiTool;
  duration: '4주 (단기 특강)' | '8주 (정규 심화)';
  level: '입문' | '중급' | '심화';
  keyObjectives: string[];
  syllabusOutline: string[];
  recommendedKit: string;
  templateProposal: Partial<CourseProposal>;
}

export const SAMPLE_COURSES: CourseCatalogItem[] = [
  {
    id: 'course-senior-01',
    title: '스마트폰으로 만나는 친절한 비서, 어르신 ChatGPT & 음성 AI 교실',
    subtitle: '타자 입력 없이 말로 묻고 듣는 어르신 맞춤형 생활 밀착 AI',
    targetAge: 'senior',
    primaryTool: 'chatgpt',
    duration: '4주 (단기 특강)',
    level: '입문',
    keyObjectives: [
      '스마트폰에서 음성으로 ChatGPT와 대화하며 일상 질문 해결하기',
      '병원 진료 일정, 복약 알림, 날씨 및 대중교통 정보 똑똑하게 묻기',
      '가족/손주에게 보낼 따뜻한 안부 편지와 생일 축하 메시지 작성'
    ],
    syllabusOutline: [
      '1주차: 스마트폰 속 인공지능 친구 만나기 (음성 마이크 켜기와 첫 인사)',
      '2주차: "오늘 날씨 어때?" 일상 비서로 써보는 음성 대화 꿀팁',
      '3주차: 건강 상식 묻기와 병원 방문 전 증상 메모 정리하기',
      '4주차: 손주에게 보내는 다정한 AI 축하 시(詩) 짓기와 낭독회'
    ],
    recommendedKit: '개인 스마트폰 (안드로이드/iOS), 이어폰 (선택)',
    templateProposal: {
      title: '스마트폰으로 만나는 친절한 비서, 어르신 ChatGPT & 음성 AI 교실',
      targetAge: 'senior',
      primaryTool: 'chatgpt',
      totalWeeks: 4,
      hoursPerSession: 2,
      maxStudents: 15,
      objective: '디지털 기기 사용이 어려운 60세 이상 어르신들이 음성 인터페이스를 통해 일상 생활에서 필요한 정보를 손쉽게 얻고 세대 간 소통의 즐거움을 누릴 수 있도록 돕는다.',
      prerequisites: '스마트폰 전원 켜기 및 기본 조작이 가능한 천안 시민 누구나',
      targetAudienceDetail: '천안시 관내 60세 이상 시니어 15명 내외',
      hardwareRequirement: '수강생 개인 스마트폰 (Wi-Fi 연결 필수), 교육장 빔프로젝터 및 스크린 미러링 장비',
      softwareRequirement: 'OpenAI ChatGPT 모바일 공식 앱 (무료 계정 가입 지원)',
      ageSpecificConsiderations: '화면 글자 크기를 최대로 설정하고, 영문 메뉴 대신 한글 모바일 UI를 철저히 점검합니다. 1:1 보조강사를 2명 배치하여 개별 밀착 지도를 제공합니다.',
      expectedOutcome: '어르신들이 키보드 타이핑 스트레스 없이 음성으로 AI와 대화하며 나만의 따뜻한 가족 편지 카드 1종을 완성하여 전송.',
      curriculum: [
        {
          week: 1,
          topic: '스마트폰 속 인공지능 친구와 첫 만남',
          lectureDetail: '생성형 AI가 무엇인지 쉬운 비유로 알아보고 스마트폰에 ChatGPT 앱 설치 및 한글 음성 설정',
          practiceDetail: '음성 대화 버튼 누르고 "반가워! 내 이름은 ○○○야" 말해보기',
          outcome: '앱 설치 완료 및 첫 음성 인사 성공'
        },
        {
          week: 2,
          topic: '일상의 궁금증을 척척 해결하는 AI 비서',
          lectureDetail: '음성으로 천안 날씨, 버스 노선, 근처 산책로 물어보는 요령',
          practiceDetail: '"천안 태조산 공원 가는 길 알려줘", "혈압에 좋은 차는 뭐야?" 질문해보기',
          outcome: '음성 검색 3가지 이상 스스로 실행'
        },
        {
          week: 3,
          topic: '사진을 보여주고 물어보는 눈 달린 AI',
          lectureDetail: '스마트폰 카메라로 길거리 꽃이나 약 봉투를 촬영해 AI에게 물어보기',
          practiceDetail: '교육장 내 식물이나 안내문 사진을 찍고 "이게 무슨 꽃이니?" 질문 실습',
          outcome: '멀티모달 이미지 질문 1회 이상 성공'
        },
        {
          week: 4,
          topic: '손주와 가족에게 전하는 사랑의 AI 편지',
          lectureDetail: '따뜻한 감정을 전달하는 문장 다듬기 및 스마트폰 카드 만들기',
          practiceDetail: '손주 생일 축하 메시지 생성 후 메신저로 전송하고 소감 나누기',
          outcome: '완성된 디지털 축하 카드 1점 제작 및 수료'
        }
      ]
    }
  },
  {
    id: 'course-elementary-01',
    title: '나노바나나(NanoBanana)로 만드는 미래 AI 로봇 & 스마트 교실',
    subtitle: '초등 눈높이에 맞춘 블록코딩과 비전 AI의 신나는 만남',
    targetAge: 'elementary',
    primaryTool: 'nanobanana',
    duration: '8주 (정규 심화)',
    level: '입문',
    keyObjectives: [
      '나노바나나 블록형 인터페이스로 코딩 기본 구조(순차, 반복, 조건) 습득',
      '웹캠을 통한 인공지능 이미지/모션 인식 모델 직접 학습시키기',
      '우리가 사는 천안시를 깨끗하게 만드는 스마트 쓰레기 분리수거 로봇 구현'
    ],
    syllabusOutline: [
      '1주차: 안녕 나노바나나! 컴퓨터에게 눈과 귀를 선물해요',
      '2주차: 블록으로 명령하기 - 강아지 캐릭터가 내 손짓을 따라와요',
      '3주차: 인공지능에게 사진 가르치기 (사과 vs 바나나 분류 AI 모델 훈련)',
      '4주차: 재활용 탐정단! 플라스틱과 종이를 척척 알아보는 스마트 카메라',
      '5주차: 손가락 제스처로 조종하는 AI 미로 탈출 게임',
      '6주차: 소리를 듣고 반응하는 음성 인식 마법 상자 만들기',
      '7주차: 우리 팀만의 창의 AI 프로젝트 기획 및 조립',
      '8주차: 천안 어린이 AI 메이커 페스티벌 (작품 발표회)'
    ],
    recommendedKit: '나노바나나 전용 키트 및 웹캠 연결된 교육용 PC/노트북',
    templateProposal: {
      title: '나노바나나(NanoBanana)로 만드는 미래 AI 로봇 & 스마트 교실',
      targetAge: 'elementary',
      primaryTool: 'nanobanana',
      totalWeeks: 8,
      hoursPerSession: 2,
      maxStudents: 16,
      objective: '어려운 프로그래밍 문법 대신 친근한 나노바나나 블록과 AI 센서를 활용하여 초등학생들이 AI 원리를 체험하고 창의적 문제해결력을 기르도록 한다.',
      prerequisites: '마우스 클릭 및 기초 한글 읽기가 가능한 초등학교 3~6학년',
      targetAudienceDetail: '천안 관내 초등학생 16명 (2인 1조 8팀)',
      hardwareRequirement: '웹캠과 마이크가 구비된 PC실 (1인 1대 또는 2인 1대), 나노바나나 교구 세트',
      softwareRequirement: '나노바나나 웹 에디터 (Chrome 브라우저 기반, 별도 설치 불필요)',
      ageSpecificConsiderations: '집중 시간이 짧은 초등학생 특성을 고려하여 15분 설명 후 25분 만들기 실습으로 호흡을 맞춥니다. 안전한 인터넷 윤리 규칙을 매 차시 시작 전 3분간 리마인드합니다.',
      expectedOutcome: '학생 스스로 카메라에 사물을 비추면 반응하는 나만의 AI 인터랙티브 창작물 1종 제작 및 발표.',
      curriculum: [
        {
          week: 1,
          topic: '안녕 나노바나나! 컴퓨터에게 감각을 주자',
          lectureDetail: '인공지능이란 무엇일까? 센서와 비전 AI의 원리',
          practiceDetail: '나노바나나 블록으로 캐릭터 표정 바꾸기',
          outcome: '첫 블록 인터랙션 성공'
        },
        {
          week: 2,
          topic: '움직임 인식! 손짓으로 그리는 마법 캔버스',
          lectureDetail: '포즈 인식(Pose Estimation) 기술 이해',
          practiceDetail: '카메라 앞에서 손을 흔들면 무지개 선이 그려지는 프로그램 완성',
          outcome: '손동작 인터랙티브 프로그램 제작'
        },
        {
          week: 3,
          topic: '인공지능에게 공부시키기 (머신러닝 기초)',
          lectureDetail: '지도학습(데이터 수집, 라벨링, 학습) 개념 체득',
          practiceDetail: '가위, 바위, 보 사진을 찍어 나만의 심판 AI 훈련',
          outcome: '가위바위보 판정 모델 훈련'
        },
        {
          week: 4,
          topic: '스마트 천안 지킴이: 재활용 분리수거 로봇',
          lectureDetail: '사회 문제 해결을 위한 공공 AI의 역할 탐색',
          practiceDetail: '캔과 페트병을 감별하여 화면에 분리수거통을 안내하는 프로그램 구현',
          outcome: '환경 AI 분류기 프로토타입'
        },
        {
          week: 5,
          topic: '목소리로 작동하는 스마트 홈 어시스턴트',
          lectureDetail: '음성 인식(STT)과 명령어 조건문 처리',
          practiceDetail: '"불 켜줘", "문 열어줘" 말하면 화면 속 조명이 켜지는 시스템 구축',
          outcome: '음성 반응 스마트 홈 구현'
        },
        {
          week: 6,
          topic: '친구와 함께하는 2인 협동 AI 게임 만들기',
          lectureDetail: '변수와 점수 시스템, 게임 로직 설계',
          practiceDetail: '머리 위로 떨어지는 별을 머리 위치로 받아내는 미니게임 제작',
          outcome: '점수 획득형 인터랙티브 게임 완성'
        },
        {
          week: 7,
          topic: '나만의 AI 창작물 완성 및 디버깅',
          lectureDetail: '프로젝트 완성도 높이기와 발표 자료 준비 요령',
          practiceDetail: '팀별 자유 주제(동물원 도우미, 횡단보도 안전 알리미 등) 심화 개발',
          outcome: '최종 작품 디버깅 및 동작 검증'
        },
        {
          week: 8,
          topic: '천안 어린이 AI 메이커 쇼케이스',
          lectureDetail: '서로의 작품을 칭찬하고 개선 아이디어를 나누는 피어 리뷰',
          practiceDetail: '가족과 친구들을 초청하여 작품 시연 및 소감 발표',
          outcome: '수료증 수여 및 포트폴리오 전시'
        }
      ]
    }
  },
  {
    id: 'course-youth-01',
    title: 'Claude & Gemini로 완성하는 고교 논리적 탐구보고서와 프롬프트 사고력',
    subtitle: '대필이 아닌 지적 협업 파트너로서의 생성형 AI 활용법',
    targetAge: 'youth',
    primaryTool: 'claude',
    duration: '4주 (단기 특강)',
    level: '중급',
    keyObjectives: [
      'Claude 3.7의 심층 추론 능력을 활용한 탐구 주제 브레인스토밍 및 반론 검증',
      '신뢰할 수 있는 학술 출처 검증(Cross-check) 및 연구 윤리 준수',
      '천안시 지역 현안(교통, 환경, 스마트시티)을 소재로 한 모범 탐구 기획서 도출'
    ],
    syllabusOutline: [
      '1주차: AI 시대의 진짜 사고력 - 왜 클로드의 논리 구조가 뛰어난가?',
      '2주차: 질문의 깊이가 결과를 결정한다 (단계적 사고 CoT 프롬프트 설계)',
      '3주차: AI의 거짓말(환각) 잡아내기 - 팩트체크와 교차 검증 실습',
      '4주차: 천안형 스마트 미래 탐구보고서 발표 및 상호 비판 토론'
    ],
    recommendedKit: '개인 노트북 또는 태블릿 (PC실 제공)',
    templateProposal: {
      title: 'Claude & Gemini로 완성하는 고교 논리적 탐구보고서와 프롬프트 사고력',
      targetAge: 'youth',
      primaryTool: 'claude',
      totalWeeks: 4,
      hoursPerSession: 3,
      maxStudents: 20,
      objective: '중·고등학생들이 AI를 단순 정답 자판기로 쓰는 오용을 막고, 생각의 지평을 넓히는 논리적 대화 파트너로 활용하여 자기주도적 탐구 역량을 극대화한다.',
      prerequisites: '문서 작성(한글 또는 워드) 기초가 가능한 중3~고3 청소년',
      targetAudienceDetail: '천안시 청소년 20명',
      hardwareRequirement: '수강생 1인 1노트북 또는 스마트 디지털 교실 PC',
      softwareRequirement: '웹 브라우저 (Anthropic Claude 및 Google Gemini 무료 계정)',
      ageSpecificConsiderations: '연구 윤리와 표절 방지 가이드라인을 강하게 교육합니다. AI가 써준 문장을 그대로 복사하는 것이 아니라 비판적 재구성 과정을 반드시 포트폴리오에 기록하도록 지도합니다.',
      expectedOutcome: '자신만의 논리적 관점이 담긴 3페이지 내외의 소논문/탐구보고서 기획서 1편 완성.',
      curriculum: [
        {
          week: 1,
          topic: 'AI와 나누는 소크라테스식 대화',
          lectureDetail: '단순 요약과 심층 추론의 차이점 및 Claude 아키텍처 특성',
          practiceDetail: '관심 분야 주제를 입력하고 AI에게 반대 의견을 내놓도록 프롬프팅',
          outcome: '탐구 주제 다각화 맵 작성'
        },
        {
          week: 2,
          topic: 'Chain-of-Thought 단계별 논리 프레임워크',
          lectureDetail: '복잡한 문제를 단계별로 쪼개어 해결하는 체계적 질문법',
          practiceDetail: '천안시 대중교통 배차 간격 문제 해결을 위한 다단계 가설 수립',
          outcome: '단계적 문제해결 프롬프트 3단계 구축'
        },
        {
          week: 3,
          topic: '데이터 교차 검증과 학술 출처 팩트체크',
          lectureDetail: 'Gemini의 실시간 웹 검색 기능과 Claude의 정밀 텍스트 분석 비교',
          practiceDetail: '생성된 데이터의 실제 통계청 및 지자체 공공데이터 대조 검증',
          outcome: '팩트체크 체크리스트 완성'
        },
        {
          week: 4,
          topic: '최종 탐구보고서 완성 및 피어 리뷰',
          lectureDetail: 'AI 작성 출처 표기 표준 가이드라인 및 발표 전달력',
          practiceDetail: '각자 작성한 탐구 보고서 발표 및 상호 교차 질문 세션',
          outcome: '최종 탐구기획서 1편 제출'
        }
      ]
    }
  },
  {
    id: 'course-college-01',
    title: 'GitHub & Copilot으로 시작하는 실무형 AI 개발 협업 & 포트폴리오',
    subtitle: '코드 작성부터 버전 관리, 오픈소스 기여까지 실무진처럼 일하기',
    targetAge: 'college',
    primaryTool: 'github',
    duration: '8주 (정규 심화)',
    level: '심화',
    keyObjectives: [
      'Git & GitHub 브랜치 전략(GitFlow)과 풀 리퀘스트(PR) 기반 코드 리뷰',
      'GitHub Copilot을 이용한 단위 테스트(Unit Test) 자동 작성 및 성능 리팩토링',
      'AI 기반 웹 서비스 배포 및 나만의 취업용 기술 포트폴리오 사이트 완성'
    ],
    syllabusOutline: [
      '1주차: 개발자의 표준 언어 Git & GitHub 기초 환경 세팅',
      '2주차: GitHub Copilot 페어 프로그래밍 - 나의 첫 AI 코딩 파트너',
      '3주차: 팀 프로젝트 협업을 위한 Issue, Branch, PR 워크플로우',
      '4주차: Copilot으로 테스트 코드 짜기와 레거시 코드 리팩토링',
      '5주차: 생성형 AI API(Gemini / Claude SDK)를 연동한 미니 서비스 설계',
      '6주차: 실무 프로젝트 스프린트 - 천안 공공데이터 API 연동 웹앱 개발',
      '7주차: GitHub Pages / Cloud Run 무료 배포와 CI/CD 맛보기',
      '8주차: 취업 시장을 사로잡는 GitHub Readme 및 기술 포트폴리오 쇼케이스'
    ],
    recommendedKit: '수강생 개인 노트북 (VS Code 및 Git 설치)',
    templateProposal: {
      title: 'GitHub & Copilot으로 시작하는 실무형 AI 개발 협업 & 포트폴리오',
      targetAge: 'college',
      primaryTool: 'github',
      totalWeeks: 8,
      hoursPerSession: 3,
      maxStudents: 18,
      objective: '소프트웨어 전공자 및 비전공 청년들이 최신 AI 코딩 도구를 통해 현업 수준의 협업 프로세스를 경험하고 취업 경쟁력 있는 포트폴리오를 구축하도록 지원한다.',
      prerequisites: 'HTML/CSS/JS 또는 Python 기본 문법 지식 보유자',
      targetAudienceDetail: '천안/충남권 대학생 및 청년 구직자 18명',
      hardwareRequirement: '개인 노트북 (RAM 8GB 이상 권장), 교육장 고속 Wi-Fi',
      softwareRequirement: 'Visual Studio Code, Git, GitHub 계정, GitHub Copilot (학생 무료 또는 트라이얼)',
      ageSpecificConsiderations: '단순 지식 전달보다 현업 개발 문화(코드 리뷰 에티켓, 커밋 메시지 컨벤션)를 직접 체득할 수 있도록 모의 스프린트 방식으로 운영합니다.',
      expectedOutcome: '라이브 URL로 접속 가능한 실전 AI 웹 서비스 1건 배포 및 정돈된 GitHub 포트폴리오 레포지토리 구축.',
      curriculum: [
        {
          week: 1,
          topic: '개발자의 명함 GitHub 첫걸음',
          lectureDetail: '버전 관리 시스템(VCS) 필요성과 Git 기본 명령어(add, commit, push)',
          practiceDetail: 'GitHub 계정 생성 및 나만의 프로필 레포지토리 꾸미기',
          outcome: '프로필 레포지토리 배포'
        },
        {
          week: 2,
          topic: 'GitHub Copilot과의 첫 페어 프로그래밍',
          lectureDetail: 'AI 코드 추천 알고리즘과 프롬프트 주석 작성 요령',
          practiceDetail: '주석으로 함수 시그니처를 적어 Copilot에게 알고리즘 코드 생성시키기',
          outcome: 'Copilot 활용 알고리즘 5선 해결'
        },
        {
          week: 3,
          topic: '협업의 꽃: Branch와 Pull Request',
          lectureDetail: '협업 시 충돌(Conflict) 해결 기법과 코드 리뷰 문화',
          practiceDetail: '동료 수강생 레포지토리에 Issue 생성 및 PR 보내기',
          outcome: '상호 PR 머지(Merge) 경험'
        },
        {
          week: 4,
          topic: '신뢰성 높은 코드를 위한 테스트 자동화',
          lectureDetail: 'TDD 개념 및 Copilot Chat을 이용한 예외 케이스 테스팅',
          practiceDetail: '주요 함수에 대한 Jest / PyTest 유닛 테스트 케이스 자동화',
          outcome: '테스트 커버리지 80% 달성'
        },
        {
          week: 5,
          topic: 'Gemini / Claude API를 활용한 풀스택 미니 프로젝트 기획',
          lectureDetail: 'LLM API 호출 구조, 엔드포인트 및 인증 키 보안 관리',
          practiceDetail: '천안시 관광 맛집 추천 챗봇 API 연동 프로토타입 작성',
          outcome: 'API 통신 동작 확인'
        },
        {
          week: 6,
          topic: '팀 스프린트: 천안 디지털 시민 서비스 구축',
          lectureDetail: '애자일 보드(GitHub Projects)를 활용한 태스크 분배',
          practiceDetail: '팀별 역할 분담(Frontend, Backend, AI 연동) 및 집중 코딩',
          outcome: '통합 테스트 버전 빌드'
        },
        {
          week: 7,
          topic: '클라우드 무료 배포와 Readme 문서화',
          lectureDetail: 'Vercel / GitHub Pages를 통한 원클릭 배포',
          practiceDetail: '서비스 배포 링크 생성 및 아키텍처 다이어그램 Readme 작성',
          outcome: '실제 인터넷 접속 가능한 배포 URL 확보'
        },
        {
          week: 8,
          topic: '청년 데모데이 & 포트폴리오 피드백',
          lectureDetail: '기술 면접관의 시선에서 본 레포지토리 평가 포인트',
          practiceDetail: '프로젝트 라이브 데모 발표 및 멘토 피드백 반영',
          outcome: '최종 이력서 제출 가능한 완성 레포지토리 1건'
        }
      ]
    }
  },
  {
    id: 'course-general-01',
    title: '천안 소상공인을 위한 생성형 AI 마케팅: 1시간 만에 끝내는 홍보 콘텐츠',
    subtitle: 'ChatGPT와 Gemini, 이미지 AI로 매출 올리는 카드뉴스 & 숏폼 대본 제작',
    targetAge: 'general',
    primaryTool: 'image_gen',
    duration: '4주 (단기 특강)',
    level: '입문',
    keyObjectives: [
      '우리 가게 메뉴/상품을 매력적으로 소개하는 인스타그램/블로그 카피라이팅',
      '디자이너 없이 AI로 감각적인 홍보 포스터 및 이벤트 카드뉴스 제작',
      '네이버 플레이스 후기 관리와 고객 문의 응대 AI 챗봇 프롬프트 템플릿 확보'
    ],
    syllabusOutline: [
      '1주차: 바쁜 사장님을 위한 10분 AI 마케팅 입문 (챗GPT로 카피 뽑기)',
      '2주차: 클릭을 부르는 인스타그램 카드뉴스와 홍보 포스터 AI 생성',
      '3주차: 조회수 터지는 30초 숏폼 릴스/쇼츠 대본 AI로 5분 완성',
      '4주차: 리뷰 답변 자동화와 나만의 1인 마케팅 시스템 구축'
    ],
    recommendedKit: '개인 스마트폰 또는 노트북',
    templateProposal: {
      title: '천안 소상공인을 위한 생성형 AI 마케팅: 1시간 만에 끝내는 홍보 콘텐츠',
      targetAge: 'general',
      primaryTool: 'image_gen',
      totalWeeks: 4,
      hoursPerSession: 2,
      maxStudents: 20,
      objective: '생업으로 바쁜 천안 관내 자영업자 및 소상공인들이 고비용의 외주 없이 생성형 AI 도구를 활용하여 스스로 매장 홍보 콘텐츠를 손쉽게 제작하도록 돕는다.',
      prerequisites: '스마트폰 메신저 및 사진 촬영이 가능한 소상공인',
      targetAudienceDetail: '천안시 소상공인 및 예비 창업자 20명',
      hardwareRequirement: '스마트폰 또는 개인 노트북',
      softwareRequirement: 'ChatGPT 모바일 앱, Canva (무료 AI 기능), Google Gemini',
      ageSpecificConsiderations: '저녁 시간대 또는 휴무일 오프라인 강의를 편성하고, 실제 수강생의 매장 사진과 메뉴판을 가지고 즉석에서 실습 결과물을 뽑아내는 현장 밀착형으로 진행합니다.',
      expectedOutcome: '수강생 본인 매장의 실제 홍보 포스터 1장 및 릴스 대본 1편 완성 즉시 업로드.',
      curriculum: [
        {
          week: 1,
          topic: '고객의 지갑을 여는 감성 카피라이팅',
          lectureDetail: '소구점 분석과 ChatGPT 타깃 맞춤형 문구 프롬프트',
          practiceDetail: '내 가게 신메뉴 소개 문구 5종 생성해보고 가장 마음에 드는 것 선택',
          outcome: '홍보 카피 5선 도출'
        },
        {
          week: 2,
          topic: '디자이너 없이 만드는 고화질 이벤트 포스터',
          lectureDetail: '이미지 생성 AI 프롬프트 원리와 텍스트 배치 팁',
          practiceDetail: '계절 할인 이벤트 포스터 1종 디자인 완성',
          outcome: '출력 가능한 포스터 파일 1종'
        },
        {
          week: 3,
          topic: '30초 숏폼 동영상 기획과 내레이션 대본',
          lectureDetail: '숏폼 초반 3초 후킹(Hooking) 법칙과 대본 구성',
          practiceDetail: 'Gemini로 요리 조리 과정 또는 매장 오픈 일상 숏폼 대본 작성',
          outcome: '30초 숏폼 대본 완성'
        },
        {
          week: 4,
          topic: '리뷰 관리 자동화와 단골 고객 케어',
          lectureDetail: '정중하고 진심 어린 악플/선플 대응 AI 가이드라인',
          practiceDetail: '자주 들어오는 문의 및 후기 답변 템플릿 10개 만들어 저장',
          outcome: '매장 전용 응대 프롬프트 북 완성'
        }
      ]
    }
  }
];

export const CHEONAN_DISTRICTS = [
  '동남구 목천읍',
  '동남구 풍세면',
  '동남구 광덕면',
  '동남구 북면',
  '동남구 성남면',
  '동남구 수신면',
  '동남구 병천면',
  '동남구 동면',
  '동남구 중앙동',
  '동남구 문성동',
  '동남구 원성1동',
  '동남구 원성2동',
  '동남구 봉명동',
  '동남구 일봉동',
  '동남구 신방동',
  '동남구 청룡동',
  '동남구 신안동',
  '서북구 성환읍',
  '서북구 직산읍',
  '서북구 입장면',
  '서북구 성거읍',
  '서북구 와촌동',
  '서북구 성정1동',
  '서북구 성정2동',
  '서북구 쌍용1동',
  '서북구 쌍용2동',
  '서북구 쌍용3동',
  '서북구 백석동',
  '서북구 불당1동',
  '서북구 불당2동',
  '서북구 부성1동',
  '서북구 부성2동'
];

export const RECRUITMENT_SCHEDULE = [
  {
    step: '01',
    phase: '지원서 및 기획서 접수',
    period: '2026. 11. 10(월) ~ 12. 05(금) 18:00',
    description: '본 웹포털을 통한 온라인 지원서 및 강좌 개설 기획서 제출',
    status: 'current'
  },
  {
    step: '02',
    phase: '1차 서류 및 기획서 심사',
    period: '2026. 12. 08(월) ~ 12. 10(수)',
    description: '전문성, 기획서의 현실성, 연령대 맞춤 지도 계획성 정량·정성 평가',
    status: 'upcoming'
  },
  {
    step: '03',
    phase: '2차 모의수업 & 면접 평가',
    period: '2026. 12. 15(월) ~ 12. 17(수)',
    description: '실전형: 10분 모의 강의 시연 / 육성형: 교육 참여 의지 및 잠재력 심층 면접',
    status: 'upcoming'
  },
  {
    step: '04',
    phase: '최종 합격자 발표',
    period: '2026. 12. 22(월) 14:00',
    description: '천안시청 누리집 공고 및 개별 알림톡/문자 발송',
    status: 'upcoming'
  },
  {
    step: '05',
    phase: '위촉식 & 강사 아카데미 개강',
    period: '2027. 01. 05(화) ~',
    description: '실전형: 천안시 공인 위촉장 수여 및 강좌 배정 / 육성형: 60시간 집중 양성과정 개강',
    status: 'upcoming'
  }
];

export const FAQ_LIST = [
  {
    category: '지원 자격',
    question: '천안시민이 아니어도 지원할 수 있나요?',
    answer: '원칙적으로 천안시에 주민등록을 둔 시민 또는 천안 소재 대학(원)생, 천안 관내 직장인을 우선 선발합니다. 단, 실전투입형의 경우 뛰어난 AI 실무 경력 또는 강의 포트폴리오를 보유한 인접 지역 지원자도 심사 대상에 포함될 수 있습니다.'
  },
  {
    category: '트랙 선택',
    question: '실전투입형과 육성과정형 중 어떤 트랙을 지원해야 하나요?',
    answer: '이전에 생성형 AI나 IT 관련 강의 경험이 있거나, 실제 개발/실무 경력이 풍부해 즉시 강의실에 투입될 수 있다면 [실전 즉시투입형]을 추천합니다. AI 도구를 잘 다루고 가르치고 싶은 열정이 있으나 교수법이나 강의 경력이 부족하다면, 천안시가 60시간 동안 전액 무료로 강사 역량을 길러드리는 [AI 시민강사 육성과정형]을 지원하시면 됩니다.'
  },
  {
    category: '강좌 기획서',
    question: '강좌 기획서의 대상 연령대는 꼭 하나만 선택해야 하나요?',
    answer: '효과적인 수업 설계를 위해 1개 기획서당 주 타깃 연령대(예: 시니어, 초등학생, 대학생 등)를 명확히 지정해 주셔야 합니다. 서로 다른 연령대를 위한 2개 이상의 강좌를 제안하고 싶으신 경우, 지원서를 복수로 제출하시거나 주력 강좌 1개를 본 기획서에 작성하시고 부가 강좌는 경력 소개란에 기재해 주시기 바랍니다.'
  },
  {
    category: '교육 도구',
    question: '유료 AI 도구(구독 요금)를 수업에 사용해도 되나요?',
    answer: '시민 대상 공공 평생교육 특성상, 무료 플랜(ChatGPT Free, Gemini, Claude 무료 플랜, NanoBanana 웹버전 등)을 기반으로 커리큘럼을 구성하는 것을 강력히 권장합니다. 부득이 유료 기능이 필요한 경우 천안시 교육장 전용 공용 라이선스 지원 가능 여부를 기획서에 명시해 주시면 심사에 참고합니다.'
  },
  {
    category: '강사 처우',
    question: '위촉 후 강사료와 활동 지원 혜택은 어떻게 되나요?',
    answer: '천안시 인재양성재단 및 평생학습관 강사 수당 지급 조례에 의거하여 시간당 50,000원~70,000원(경력 및 강의 급수별 차등)의 강사료가 지급됩니다. 또한 수강생 15인 이상 실습 강좌의 경우 원활한 진행을 위해 [보조강사 1인]을 동반 배정하여 강의 부담을 덜어드립니다.'
  }
];
