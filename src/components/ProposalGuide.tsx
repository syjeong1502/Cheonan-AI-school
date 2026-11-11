import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  HelpCircle, 
  ChevronRight, 
  Layers, 
  Sparkles 
} from 'lucide-react';

interface ProposalGuideProps {
  onStartWritingProposal: () => void;
  onPreviewStandardForm: () => void;
}

export const ProposalGuide: React.FC<ProposalGuideProps> = ({
  onStartWritingProposal,
  onPreviewStandardForm
}) => {
  const [activeTab, setActiveTab] = useState<'rubric' | 'sections' | 'tips'>('sections');

  return (
    <section id="guide" className="py-20 bg-slate-50/90 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-xs font-bold text-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Curriculum Proposal Blueprint & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            강좌 개설 기획서 작성 가이드 & 심사 기준
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            천안시 AI 시민강사 선발의 가장 핵심이 되는 서류는 <strong>[강좌 개설 기획서]</strong>입니다. 
            수강생의 눈높이에 맞춘 체계적인 주차별 계획과 구체적인 실습 산출물을 제시할수록 높은 평가를 받습니다.
          </p>
        </div>

        {/* Tab Switcher (Segmented button control) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('sections')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap ${
              activeTab === 'sections'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            기획서 5대 핵심 항목
          </button>
          <button
            onClick={() => setActiveTab('rubric')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap ${
              activeTab === 'rubric'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            심사 평가 배점표 (100점)
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap ${
              activeTab === 'tips'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            합격 작성 팁 & 주의사항
          </button>
        </div>

        {/* Tab 1: 5 Sections */}
        {activeTab === 'sections' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700">01. 강좌 개요 및 타깃 정의</span>
              <h4 className="text-base font-bold text-slate-900">누구를 위한 강좌인가?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                강좌명, 교육 기간(4주 단기 특강 or 8주 정규 심화), 회당 교육 시간(2~3시간), 정원(15~20명)을 명시합니다. 
                특히 <strong>시니어, 초등학생, 대학생, 일반시민 중 주 수강 대상</strong>을 분명히 지정해야 합니다.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                예: "어르신을 위한 4주 스마트폰 음성 AI 비서 교실"
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700">02. 교육 목표 및 기대 산출물</span>
              <h4 className="text-base font-bold text-slate-900">수강생이 무엇을 손에 쥐는가?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                추상적인 "AI 지식 습득"이 아니라 <strong>"1인 1 최종 창작물 완성"</strong>을 명시해야 합니다. 
                (예: 손주 축하 편지 카드, 나노바나나 재활용 비전 로봇, GitHub 라이브 웹 포트폴리오, 소상공인 인스타 포스터 등)
              </p>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                원칙: 결과물이 명확할수록 실무 심사에서 만점 부여
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700">03. 주차별 강의 계획 (3:7 황금률)</span>
              <h4 className="text-base font-bold text-slate-900">이론 30% : 실습 70% 구성</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                각 주차마다 [주제], [이론 및 강의 내용], [개별/팀별 실습 활동], [차시별 소과제 산출물]을 구체적으로 기재합니다. 
                듣기만 하는 강의가 아닌 직접 도구를 만지는 체험 중심이어야 합니다.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                실습 비율이 60% 미만인 경우 감점 사유가 됩니다.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700">04. 소프트웨어 및 교보재 요건</span>
              <h4 className="text-base font-bold text-slate-900">무료 플랜 위주의 공공 접근성</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                시민 대상 강좌이므로 <strong>무료 플랜(ChatGPT Free, Gemini, Claude 무료, NanoBanana 웹)</strong>을 원칙으로 합니다. 
                노트북 사양, 웹캠 유무, 스마트폰 기종(안드로이드/iOS) 호환성을 사전 점검하여 기재합니다.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                유료 결제 강요 또는 특정 상업 교재 판매 금지
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-700">05. 연령대별 특화 지도 방안</span>
              <h4 className="text-base font-bold text-slate-900">학습자 눈높이에 맞춘 세심한 배려</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                시니어의 경우 글자 크기 확대와 음성 안내, 초등학생의 경우 AI 윤리와 개인정보 보호 수칙, 
                대학생의 경우 코드 리뷰 및 질문 피드백 등 <strong>대상층에 특화된 티칭 전략</strong>을 기술합니다.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                수업 중 보조강사와의 역할 분담 계획도 함께 기술
              </div>
            </div>

            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-800">스마트 지원 시스템</span>
                <h4 className="text-base font-bold text-blue-950">온라인 기획서 빌더 지원</h4>
                <p className="text-xs text-blue-900/80 leading-relaxed">
                  본 포털의 온라인 지원서 시스템에서는 위 5대 항목을 단계별로 손쉽게 작성할 수 있으며, 
                  과목별 표준 템플릿을 1초 만에 불러와 수정할 수 있습니다.
                </p>
              </div>
              <button
                onClick={onStartWritingProposal}
                className="mt-4 w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>온라인 기획서 작성하기</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Evaluation Rubric */}
        {activeTab === 'rubric' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50">
              <h4 className="text-base font-bold text-slate-900">천안시 AI 시민강사 기획서 심사 기준 (총점 100점)</h4>
              <p className="text-xs text-slate-500 mt-1">
                천안시 인공지능 평생교육 심의위원회 전문가 5인의 블라인드 정량/정성 평가를 합산합니다.
              </p>
            </div>
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3">
                  <span className="font-bold text-slate-900">01. 연령대 적합성 및 눈높이 교수 설계</span>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">배점 25점</p>
                </div>
                <div className="md:col-span-9 text-slate-600 text-xs sm:text-sm">
                  대상 학습자(시니어, 초등, 대학생 등)의 디지털 문해력 수준을 정확히 파악하고, 어려운 기술 용어 대신 이해하기 쉬운 비유와 맞춤형 속도 조절 전략을 수립하였는가?
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3">
                  <span className="font-bold text-slate-900">02. 실습 중심 구성 및 명확한 산출물</span>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">배점 25점</p>
                </div>
                <div className="md:col-span-9 text-slate-600 text-xs sm:text-sm">
                  강의 계획 중 실습 비중이 70% 이상이며, 수강생이 수료 시점에 실제로 완성하여 가져갈 수 있는 손에 잡히는 결과물(편지, 포스터, 코딩 프로젝트 등)이 구체적인가?
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3">
                  <span className="font-bold text-slate-900">03. 최신 AI 도구 활용의 실용성</span>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">배점 25점</p>
                </div>
                <div className="md:col-span-9 text-slate-600 text-xs sm:text-sm">
                  ChatGPT, Gemini, Claude, GitHub, 나노바나나 등 최신 생성형 AI 트렌드를 올바르게 반영하고, 시민의 실제 일상이나 학업·업무에 즉각적인 도움이 되는가?
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-3">
                  <span className="font-bold text-slate-900">04. 교육 실현성 및 공공 윤리 의식</span>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">배점 25점</p>
                </div>
                <div className="md:col-span-9 text-slate-600 text-xs sm:text-sm">
                  무료 도구 위주의 접근 가능한 환경을 구성하였는가? 저작권, 개인정보, 생성형 AI의 환각(Hallucination) 방지 및 안전 윤리 교육이 커리큘럼에 조화롭게 포함되어 있는가?
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Writing Tips */}
        {activeTab === 'tips' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <h4 className="text-base font-bold text-slate-900">합격 기획서 작성을 위한 4가지 체크리스트</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DO: "차시마다 작은 성공 체험"을 설계하세요</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  수강생들이 1회차부터 무언가를 직접 만들어보고 성취감을 느낄 수 있도록 작은 마일스톤을 쪼개어 배치하세요. 
                  (예: 1회차에 바로 AI로 내 명함 문구 짓기)
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DO: 천안 지역의 맥락과 연결하세요</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  일반적인 예제 대신 "천안 아라리오 조각공원 홍보 카드", "천안 흥타령 춤축제 숏폼 대본", "천안 대중교통 노선 질문" 등 지역 친화적 실습 소재를 기획서에 녹여내면 가산점을 받습니다.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-rose-700 text-sm">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>DON'T: 전문 개발자 용어 남발을 피하세요</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  'Transformer 어텐션 메커니즘', '벡터 임베딩' 등의 기술 이론 나열은 일반 시민 대상 평생학습 기획서에서 감점 요인이 됩니다. 시민의 언어로 쉽게 풀어써 주세요.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-rose-700 text-sm">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>DON'T: 과도한 수강생 유료 구독 전제 금지</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  월 20달러 이상의 유료 모델 구독을 수강생의 필수 준비물로 지정하는 것은 불가합니다. 무료 모델 기능 위주로 구성하거나 대안을 명시해야 합니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Actions Bar */}
        <div className="mt-8 bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">천안시 표준 강좌 개설 기획서 양식</p>
              <p className="text-xs text-slate-500">공식 서식 기준 미리보기 및 가이드라인 확인</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onPreviewStandardForm}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              표준 기획서 서식 미리보기
            </button>
            <button
              onClick={onStartWritingProposal}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            >
              지금 기획서 작성하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
