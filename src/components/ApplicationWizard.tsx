import React, { useState, useEffect } from 'react';
import { 
  ApplicationSubmission, 
  CourseProposal, 
  TrackType, 
  AgeGroup, 
  AiTool, 
  WeeklyPlan 
} from '../types';
import { 
  CHEONAN_DISTRICTS, 
  AGE_GROUPS_META, 
  AI_TOOLS_META, 
  SAMPLE_COURSES, 
  CourseCatalogItem 
} from '../data/coursesData';
import { 
  X, 
  Sparkles, 
  Plus, 
  Trash2, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  FileCheck, 
  Laptop, 
  Info,
  BookOpen,
  Calendar
} from 'lucide-react';

interface ApplicationWizardProps {
  initialTrack?: TrackType;
  initialTemplate?: Partial<CourseProposal>;
  onClose: () => void;
  onSuccess: (submission: ApplicationSubmission) => void;
}

export const ApplicationWizard: React.FC<ApplicationWizardProps> = ({
  initialTrack = 'experienced',
  initialTemplate,
  onClose,
  onSuccess
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [track, setTrack] = useState<TrackType>(initialTrack);

  // Applicant Basic Info
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('1990-05-15');
  const [gender, setGender] = useState<'M' | 'F' | 'OTHER'>('M');
  const [phone, setPhone] = useState('010-');
  const [email, setEmail] = useState('');
  const [addressDistrict, setAddressDistrict] = useState(CHEONAN_DISTRICTS[0]);
  const [currentOccupation, setCurrentOccupation] = useState('');
  const [majorOrField, setMajorOrField] = useState('');

  // Course Proposal State
  const [courseTitle, setCourseTitle] = useState('');
  const [targetAge, setTargetAge] = useState<AgeGroup>('senior');
  const [primaryTool, setPrimaryTool] = useState<AiTool>('chatgpt');
  const [totalWeeks, setTotalWeeks] = useState<number>(4);
  const [hoursPerSession, setHoursPerSession] = useState<number>(2);
  const [maxStudents, setMaxStudents] = useState<number>(15);
  const [objective, setObjective] = useState('');
  const [prerequisites, setPrerequisites] = useState('기초 스마트폰 또는 PC 조작이 가능한 천안 시민 누구나');
  const [hardwareRequirement, setHardwareRequirement] = useState('스마트폰 또는 개인 노트북');
  const [softwareRequirement, setSoftwareRequirement] = useState('무료 웹 브라우저 및 앱');
  const [ageSpecificConsiderations, setAgeSpecificConsiderations] = useState('');
  const [expectedOutcome, setExpectedOutcome] = useState('');
  const [curriculum, setCurriculum] = useState<WeeklyPlan[]>([
    {
      week: 1,
      topic: '생성형 AI의 기초 개념과 첫 대화 시작하기',
      lectureDetail: '인공지능 도구 소개 및 환경 설정, 기본 인터페이스 이해',
      practiceDetail: '첫 프롬프트 입력 및 응답 결과 확인하기',
      outcome: '앱 설치 및 첫 질문 성공'
    },
    {
      week: 2,
      topic: '일상 문제 해결을 위한 효과적인 질문법',
      lectureDetail: '좋은 프롬프트의 4가지 원칙과 역할 부여(Role Prompting)',
      practiceDetail: '자신만의 관심사에 맞춘 실습 과제 수행',
      outcome: '맞춤형 프롬프트 작성 3회'
    },
    {
      week: 3,
      topic: '멀티모달 기능과 실생활 응용 프로젝트',
      lectureDetail: '텍스트뿐만 아니라 이미지, 문서 요약 기능 활용법',
      practiceDetail: '실생활에 바로 적용할 수 있는 콘텐츠 생성 실습',
      outcome: '나만의 콘텐츠 1차 시안 제작'
    },
    {
      week: 4,
      topic: '최종 작품 완성 및 공유회',
      lectureDetail: 'AI 윤리 수칙, 저작권, 출처 표기 가이드라인',
      practiceDetail: '완성된 결과물 상호 피드백 및 소감 나누기',
      outcome: '1인 1 최종 산출물 완성 및 발표'
    }
  ]);

  // Experience & Portfolio State
  const [experienceYears, setExperienceYears] = useState('1년~3년');
  const [experienceNotes, setExperienceNotes] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [statementOfPurpose, setStatementOfPurpose] = useState('');

  // Load initial template if provided
  useEffect(() => {
    if (initialTemplate) {
      if (initialTemplate.title) setCourseTitle(initialTemplate.title);
      if (initialTemplate.targetAge) setTargetAge(initialTemplate.targetAge);
      if (initialTemplate.primaryTool) setPrimaryTool(initialTemplate.primaryTool);
      if (initialTemplate.totalWeeks) setTotalWeeks(initialTemplate.totalWeeks);
      if (initialTemplate.hoursPerSession) setHoursPerSession(initialTemplate.hoursPerSession);
      if (initialTemplate.maxStudents) setMaxStudents(initialTemplate.maxStudents);
      if (initialTemplate.objective) setObjective(initialTemplate.objective);
      if (initialTemplate.prerequisites) setPrerequisites(initialTemplate.prerequisites);
      if (initialTemplate.hardwareRequirement) setHardwareRequirement(initialTemplate.hardwareRequirement);
      if (initialTemplate.softwareRequirement) setSoftwareRequirement(initialTemplate.softwareRequirement);
      if (initialTemplate.ageSpecificConsiderations) setAgeSpecificConsiderations(initialTemplate.ageSpecificConsiderations);
      if (initialTemplate.expectedOutcome) setExpectedOutcome(initialTemplate.expectedOutcome);
      if (initialTemplate.curriculum && initialTemplate.curriculum.length > 0) {
        setCurriculum(initialTemplate.curriculum);
      }
    }
  }, [initialTemplate]);

  // Helper to load sample course into form
  const handleLoadSampleCourse = (course: CourseCatalogItem) => {
    const t = course.templateProposal;
    if (t.title) setCourseTitle(t.title);
    if (t.targetAge) setTargetAge(t.targetAge);
    if (t.primaryTool) setPrimaryTool(t.primaryTool);
    if (t.totalWeeks) setTotalWeeks(t.totalWeeks);
    if (t.hoursPerSession) setHoursPerSession(t.hoursPerSession);
    if (t.maxStudents) setMaxStudents(t.maxStudents);
    if (t.objective) setObjective(t.objective);
    if (t.prerequisites) setPrerequisites(t.prerequisites);
    if (t.hardwareRequirement) setHardwareRequirement(t.hardwareRequirement);
    if (t.softwareRequirement) setSoftwareRequirement(t.softwareRequirement);
    if (t.ageSpecificConsiderations) setAgeSpecificConsiderations(t.ageSpecificConsiderations);
    if (t.expectedOutcome) setExpectedOutcome(t.expectedOutcome);
    if (t.curriculum && t.curriculum.length > 0) {
      setCurriculum(t.curriculum);
    }
  };

  // Add week to curriculum
  const handleAddWeek = () => {
    const nextWeek = curriculum.length + 1;
    setCurriculum([
      ...curriculum,
      {
        week: nextWeek,
        topic: `${nextWeek}주차 심화 실습 및 응용`,
        lectureDetail: '핵심 기능 복습 및 단계별 실무 프로세스 안내',
        practiceDetail: '팀별/개별 심화 프로젝트 실습 진행',
        outcome: `${nextWeek}차시 실습 결과물 도출`
      }
    ]);
    setTotalWeeks(nextWeek);
  };

  // Remove week
  const handleRemoveWeek = (weekNum: number) => {
    if (curriculum.length <= 2) {
      alert('최소 2주차 이상의 커리큘럼이 필요합니다.');
      return;
    }
    const updated = curriculum
      .filter((w) => w.week !== weekNum)
      .map((w, idx) => ({ ...w, week: idx + 1 }));
    setCurriculum(updated);
    setTotalWeeks(updated.length);
  };

  // Update specific week
  const handleUpdateWeek = (
    weekNum: number,
    field: keyof WeeklyPlan,
    value: string
  ) => {
    setCurriculum(
      curriculum.map((item) =>
        item.week === weekNum ? { ...item, [field]: value } : item
      )
    );
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('지원자 성명을 입력해주세요.');
      setCurrentStep(1);
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      alert('올바른 연락처를 입력해주세요.');
      setCurrentStep(1);
      return;
    }
    if (!courseTitle.trim()) {
      alert('강좌명을 입력해주세요.');
      setCurrentStep(2);
      return;
    }
    if (!objective.trim()) {
      alert('강좌의 교육 목표를 입력해주세요.');
      setCurrentStep(2);
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `CN-AI-2026-${randomSuffix}`;

    const newSubmission: ApplicationSubmission = {
      id: newId,
      submittedAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      track,
      applicant: {
        name,
        birthDate,
        gender,
        phone,
        email: email || `${name.toLowerCase()}@cheonan-candidate.kr`,
        addressDistrict,
        currentOccupation: currentOccupation || '일반 시민 / 프리랜서',
        majorOrField: majorOrField || '해당 없음',
        statementOfPurpose: statementOfPurpose || '천안시민의 AI 디지털 역량 강화를 위해 최선을 다해 가르치겠습니다.',
        experienceYears,
        experienceNotes: experienceNotes || '관련 교육 또는 실무 프로젝트 경험 보유',
        portfolioUrl
      },
      proposal: {
        title: courseTitle,
        targetAge,
        primaryTool,
        totalWeeks: curriculum.length,
        hoursPerSession,
        maxStudents,
        objective,
        prerequisites,
        targetAudienceDetail: `${AGE_GROUPS_META[targetAge].name} 대상`,
        hardwareRequirement,
        softwareRequirement,
        ageSpecificConsiderations: ageSpecificConsiderations || AGE_GROUPS_META[targetAge].pedagogyTips.join(', '),
        expectedOutcome: expectedOutcome || '1인 1 AI 실습 창작물 완성',
        curriculum
      },
      status: '접수완료'
    };

    // Save to localStorage
    try {
      const existing = localStorage.getItem('cheonan_ai_applications');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newSubmission);
      localStorage.setItem('cheonan_ai_applications', JSON.stringify(list));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }

    onSuccess(newSubmission);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-8">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold text-blue-400">천안시 미래디지털 역량 강화</div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight">
              AI 시민강사 지원서 및 강좌 개설 기획서 작성
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 shrink-0">
          <div className="flex items-center justify-between text-xs font-semibold">
            <button
              onClick={() => setCurrentStep(1)}
              className={`flex items-center gap-1.5 ${
                currentStep === 1 ? 'text-blue-700 font-bold' : 'text-slate-500'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 1 ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>1</span>
              <span>기본 정보 & 트랙</span>
            </button>
            <span className="text-slate-300">──</span>
            <button
              onClick={() => setCurrentStep(2)}
              className={`flex items-center gap-1.5 ${
                currentStep === 2 ? 'text-blue-700 font-bold' : 'text-slate-500'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 2 ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>2</span>
              <span>강좌 기획서 작성</span>
            </button>
            <span className="text-slate-300">──</span>
            <button
              onClick={() => setCurrentStep(3)}
              className={`flex items-center gap-1.5 ${
                currentStep === 3 ? 'text-blue-700 font-bold' : 'text-slate-500'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 3 ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>3</span>
              <span>경력 및 지원동기</span>
            </button>
            <span className="text-slate-300">──</span>
            <button
              onClick={() => setCurrentStep(4)}
              className={`flex items-center gap-1.5 ${
                currentStep === 4 ? 'text-blue-700 font-bold' : 'text-slate-500'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                currentStep === 4 ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}>4</span>
              <span>최종 검토 및 접수</span>
            </button>
          </div>
        </div>

        {/* Wizard Form Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Track & Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">지원 트랙 선택</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  본인의 강의 및 실무 경험에 알맞은 트랙을 선택해 주세요.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    track === 'experienced'
                      ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-900">실전 즉시투입형 강사</span>
                      <input
                        type="radio"
                        name="track"
                        checked={track === 'experienced'}
                        onChange={() => setTrack('experienced')}
                        className="text-blue-600"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      AI 강의/실무 경력 1년 이상, 선발 즉시 2027 정규 강좌 배정 희망자
                    </p>
                  </label>

                  <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    track === 'incubator'
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-900">AI 시민강사 육성과정형 (아카데미)</span>
                      <input
                        type="radio"
                        name="track"
                        checked={track === 'incubator'}
                        onChange={() => setTrack('incubator')}
                        className="text-indigo-600"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      열정 있는 예비 강사, 60시간 집중 교육 이수 후 보조강사 실습부터 시작
                    </p>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-3">지원자 인적사항</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">성명 *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">생년월일 *</label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">연락처(휴대전화) *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-1234-5678"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">이메일 주소</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cheonan.ai@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">천안시 거주 읍/면/동 *</label>
                    <select
                      value={addressDistrict}
                      onChange={(e) => setAddressDistrict(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      {CHEONAN_DISTRICTS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">현재 직업 / 주 전공</label>
                    <input
                      type="text"
                      value={currentOccupation}
                      onChange={(e) => setCurrentOccupation(e.target.value)}
                      placeholder="예: IT 프리랜서 / 컴퓨터공학 / 일반 시민"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Course Proposal Blueprint */}
          {currentStep === 2 && (
            <div className="space-y-6">
              {/* Template Quick Loader Bar */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-blue-900 block">
                    모범 강좌 기획서 템플릿 불러오기
                  </span>
                  <span className="text-blue-700">
                    천안시 표준 검증 커리큘럼을 클릭하면 아래 입력창이 자동으로 채워집니다.
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {SAMPLE_COURSES.map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => handleLoadSampleCourse(sc)}
                      className="px-2.5 py-1 bg-white hover:bg-blue-100 text-blue-800 rounded border border-blue-200 font-medium text-[11px] transition-colors"
                    >
                      {AGE_GROUPS_META[sc.targetAge].name.split(' (')[0]} ({AI_TOOLS_META[sc.primaryTool].iconLabel})
                    </button>
                  ))}
                </div>
              </div>

              {/* Core Course Metadata */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    개설 제안 강좌명 *
                  </label>
                  <input
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    placeholder="예: 스마트폰으로 만나는 친절한 비서, 어르신 ChatGPT & 음성 AI 교실"
                    className="w-full px-3 py-2 text-sm font-semibold border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">수강 대상 연령대 *</label>
                    <select
                      value={targetAge}
                      onChange={(e) => setTargetAge(e.target.value as AgeGroup)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      {(Object.keys(AGE_GROUPS_META) as AgeGroup[]).map((ak) => (
                        <option key={ak} value={ak}>{AGE_GROUPS_META[ak].name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">핵심 활용 AI 도구 *</label>
                    <select
                      value={primaryTool}
                      onChange={(e) => setPrimaryTool(e.target.value as AiTool)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      {(Object.keys(AI_TOOLS_META) as AiTool[]).map((tk) => (
                        <option key={tk} value={tk}>{AI_TOOLS_META[tk].name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">교육 차시 (기간)</label>
                    <select
                      value={totalWeeks}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        setTotalWeeks(val);
                        // Adjust curriculum array length if needed
                        if (val > curriculum.length) {
                          const diff = val - curriculum.length;
                          const added: WeeklyPlan[] = Array.from({ length: diff }, (_, i) => {
                            const w = curriculum.length + i + 1;
                            return {
                              week: w,
                              topic: `${w}주차 실습 프로젝트`,
                              lectureDetail: '핵심 기능 복습 및 활용법',
                              practiceDetail: '실습 과제 수행',
                              outcome: `${w}차시 산출물 완성`
                            };
                          });
                          setCurriculum([...curriculum, ...added]);
                        } else if (val < curriculum.length) {
                          setCurriculum(curriculum.slice(0, val));
                        }
                      }}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value={4}>4주 (단기 특강 / 8시간)</option>
                      <option value={8}>8주 (정규 심화 / 16~24시간)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">회당 수업 시수</label>
                    <select
                      value={hoursPerSession}
                      onChange={(e) => setHoursPerSession(parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value={2}>회당 2시간 (권장: 시니어 및 초등)</option>
                      <option value={3}>회당 3시간 (권장: 대학생 코딩/프로젝트)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">적정 정원</label>
                    <input
                      type="number"
                      value={maxStudents}
                      onChange={(e) => setMaxStudents(parseInt(e.target.value, 10) || 15)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    교육 목표 및 강의 취지 *
                  </label>
                  <textarea
                    rows={2}
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="수강생이 이 과정을 통해 얻게 되는 역량과 수업 취지를 구체적으로 기술합니다."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">최종 기대 산출물 (1인 1작품)</label>
                    <input
                      type="text"
                      value={expectedOutcome}
                      onChange={(e) => setExpectedOutcome(e.target.value)}
                      placeholder="예: 손주 축하 편지 카드 1종 / 재활용 분리수거 로봇 프로그램"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">수강 요건 및 선수 지식</label>
                    <input
                      type="text"
                      value={prerequisites}
                      onChange={(e) => setPrerequisites(e.target.value)}
                      placeholder="예: 스마트폰 기본 조작 가능자"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    대상 연령 특화 지도 방안 (눈높이 교육 전략)
                  </label>
                  <textarea
                    rows={2}
                    value={ageSpecificConsiderations}
                    onChange={(e) => setAgeSpecificConsiderations(e.target.value)}
                    placeholder="글자 크기 확대, 쉬운 비유 사용, 팩트체크 및 AI 윤리 지도, 보조강사 협업 계획 등을 기술합니다."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Weekly Syllabus Table Editor */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      주차별 세부 강의 계획 (총 {curriculum.length}회차)
                    </h4>
                    <p className="text-xs text-slate-500">
                      이론 30% : 실습 70% 구성을 준수하여 주차별 내용을 편집해 주세요.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddWeek}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>주차 추가 (+1주)</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {curriculum.map((item) => (
                    <div
                      key={item.week}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-900 text-xs">
                          {item.week}주차 계획
                        </span>
                        {curriculum.length > 2 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveWeek(item.week)}
                            className="text-slate-400 hover:text-red-600 transition-colors p-1"
                            title="이 주차 삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                        <div className="sm:col-span-4">
                          <label className="text-[11px] text-slate-500 block mb-0.5">강의 주제</label>
                          <input
                            type="text"
                            value={item.topic}
                            onChange={(e) => handleUpdateWeek(item.week, 'topic', e.target.value)}
                            className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded font-medium text-slate-900"
                          />
                        </div>
                        <div className="sm:col-span-4">
                          <label className="text-[11px] text-slate-500 block mb-0.5">이론 및 설명</label>
                          <input
                            type="text"
                            value={item.lectureDetail}
                            onChange={(e) => handleUpdateWeek(item.week, 'lectureDetail', e.target.value)}
                            className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded text-slate-800"
                          />
                        </div>
                        <div className="sm:col-span-4">
                          <label className="text-[11px] text-slate-500 block mb-0.5">실습 내용 및 산출물</label>
                          <input
                            type="text"
                            value={item.practiceDetail}
                            onChange={(e) => handleUpdateWeek(item.week, 'practiceDetail', e.target.value)}
                            className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded text-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Experience & Statement */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">강의 및 실무 경력</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  관련 분야 강의 경력, 프로젝트 수행 경험, 보유 자격증 등을 기재해 주세요.
                </p>
                <div className="mt-3 space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">관련 경력 기간</label>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="경력 없음 (입문 희망)">경력 없음 (AI 시민강사 육성과정 희망)</option>
                      <option value="1년 미만">1년 미만 (기초 강의/학습 경험)</option>
                      <option value="1년~3년">1년 ~ 3년 (실무 또는 정기 출강)</option>
                      <option value="3년~5년">3년 ~ 5년 (전문 강사/개발자)</option>
                      <option value="5년 이상">5년 이상 (베테랑 전문가)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      주요 강의/프로젝트 이력 및 자격사항
                    </label>
                    <textarea
                      rows={4}
                      value={experienceNotes}
                      onChange={(e) => setExperienceNotes(e.target.value)}
                      placeholder="예: 2025 천안 청소년 복지관 코딩 멘토링 6개월, 정보처리기사, 생성형 AI 프롬프트 1급 자격증 보유 등"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      포트폴리오 / GitHub / 블로그 링크 (선택)
                    </label>
                    <input
                      type="url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="https://github.com/myname 또는 블로그 URL"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  지원 동기 및 천안시 AI 교육 기여 포부 *
                </h3>
                <p className="text-xs text-slate-500 mb-2">
                  왜 천안시 AI 시민강사로 활동하고자 하는지, 시민들에게 어떤 가치를 전달하고 싶은지 자유롭게 작성해 주세요.
                </p>
                <textarea
                  rows={4}
                  value={statementOfPurpose}
                  onChange={(e) => setStatementOfPurpose(e.target.value)}
                  placeholder="예: 천안에서 나고 자란 청년으로서 어르신들의 디지털 소외를 해소하고, 우리 동네 어르신들이 AI 비서로 더 풍요로운 일상을 누리실 수 있도록 돕고 싶습니다..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          )}

          {/* STEP 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-700" />
                  지원서 작성이 모두 완료되었습니다!
                </span>
                <p className="text-blue-800/80">
                  아래 요약된 내용을 최종 확인하신 후 [최종 지원서 제출하기] 버튼을 눌러주세요. 
                  제출 즉시 접수번호가 부여되며 공문서 형태의 기획서를 인쇄하거나 보관하실 수 있습니다.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-slate-200 space-y-2 bg-slate-50">
                  <span className="font-bold text-slate-700 block">지원자 정보</span>
                  <p>• 성명: <strong>{name || '(미입력)'}</strong> ({gender === 'M' ? '남' : '여'})</p>
                  <p>• 연락처: <strong>{phone}</strong></p>
                  <p>• 거주지: <strong>{addressDistrict}</strong></p>
                  <p>• 지원 트랙: <strong className="text-blue-700">{track === 'experienced' ? '실전 즉시투입형' : 'AI 시민강사 육성과정형'}</strong></p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2 bg-slate-50">
                  <span className="font-bold text-slate-700 block">제안 강좌 요약</span>
                  <p>• 강좌명: <strong>{courseTitle || '(미입력)'}</strong></p>
                  <p>• 대상 연령: <strong>{AGE_GROUPS_META[targetAge].name}</strong></p>
                  <p>• 핵심 도구: <strong>{AI_TOOLS_META[primaryTool].name}</strong></p>
                  <p>• 총 시수: <strong>{curriculum.length}주 (회당 {hoursPerSession}시간)</strong></p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <span className="font-bold block text-slate-900">개인정보 수집 및 서약 확인</span>
                <p className="leading-relaxed text-slate-500">
                  천안시 평생학습원 및 디지털역량강화팀은 본 선발을 위해 최소한의 개인정보를 수집하며, 
                  제출된 강좌 기획서는 선발 심사 및 향후 강좌 개설 시 기초 자료로 활용됩니다.
                </p>
                <div className="pt-1 flex items-center gap-2">
                  <input type="checkbox" id="pledge" defaultChecked className="rounded text-blue-600" />
                  <label htmlFor="pledge" className="font-semibold text-slate-800">
                    상기 기재 사항이 사실임을 확인하며, 지원서를 제출합니다.
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>이전 단계</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors"
              >
                <span>다음 단계로 이동</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
              >
                <FileCheck className="w-4 h-4" />
                <span>최종 지원서 제출하기</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
