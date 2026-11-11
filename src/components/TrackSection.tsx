import React from 'react';
import { Zap, BookOpen, CheckCircle2, UserCheck, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { TrackType } from '../types';

interface TrackSectionProps {
  onSelectTrackAndApply: (track: TrackType) => void;
}

export const TrackSection: React.FC<TrackSectionProps> = ({ onSelectTrackAndApply }) => {
  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Track Recruitment System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            내 역량과 경험에 맞는 지원 트랙을 선택하세요
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            강의 경험이 풍부하여 즉시 현장 투입이 가능한 <strong className="text-white font-semibold">실전형</strong>과, 
            AI 활용 열정을 바탕으로 천안시 공인 교수법 교육을 이수하고 강사로 발돋움하는 <strong className="text-white font-semibold">육성형</strong> 두 가지 트랙으로 분리 선발합니다.
          </p>
        </div>

        {/* 2 Track Cards with Rich Photographic Background Overlays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Track 1: 실전 즉시투입형 */}
          <div className="group relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-850/90 hover:border-blue-500/80 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            {/* Top Photo Strip Header */}
            <div className="h-44 relative overflow-hidden bg-slate-800">
              <img
                src="/src/assets/images/hero_cheonan_ai_1794378338472.jpg"
                alt="실전 즉시투입형 강사 강의 현장"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs rounded-lg shadow-md">
                  TRACK 01
                </span>
                <span className="text-xs font-semibold text-blue-200 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  현장 즉시 출강
                </span>
              </div>
              <div className="absolute bottom-3 right-4 text-right">
                <span className="text-[11px] text-slate-300 block">선발 인원</span>
                <span className="text-xl font-extrabold text-blue-400 font-mono">20명 내외</span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-slate-900/90">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    실전 즉시투입형 시민강사
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    IT·교육 실무 경력 또는 생성형 AI 강의 경력을 보유하여, 선발 직후 2027년 1학기 천안시 정규 강좌에 즉시 출강하는 전문 트랙입니다.
                  </p>
                </div>

                {/* Requirements */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                  <h4 className="font-semibold text-blue-300 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    <span>지원 자격 요건</span>
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-xs sm:text-sm pl-1">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>생성형 AI(ChatGPT, Gemini, Claude, GitHub 등) 강의 또는 실무 프로젝트 1년 이상 경력자</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>천안시 관내 공공기관/도서관/주민센터 주 1~2회(회당 2~3시간) 정규 출강 가능자</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>자체 기획한 완성형 강좌 개설 기획서 및 실습 커리큘럼 제출 가능자</span>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-blue-950/40 border border-blue-800/50 rounded-2xl p-4 space-y-2 text-xs text-blue-200">
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>선발 혜택 & 처우 기준</span>
                  </h4>
                  <p>• <strong>강사 수당:</strong> 시간당 50,000 ~ 70,000원 (천안시 인재양성 조례 기준)</p>
                  <p>• <strong>수업 보조:</strong> 15인 이상 실습 강좌 운영 시 보조강사 1인 매칭</p>
                  <p>• <strong>위촉장 수여:</strong> 천안시장 명의 [천안시 공인 AI 전문강사] 공식 위촉</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectTrackAndApply('experienced')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all group"
                >
                  <span>실전 즉시투입형으로 지원하기</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Track 2: AI 시민강사 육성과정형 */}
          <div className="group relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-850/90 hover:border-indigo-500/80 transition-all duration-300 shadow-2xl flex flex-col justify-between">
            {/* Top Photo Strip Header */}
            <div className="h-44 relative overflow-hidden bg-slate-800">
              <img
                src="/src/assets/images/instructor_academy_1794378338719.jpg"
                alt="AI 시민강사 육성 아카데미 교육 현장"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-600 text-white font-bold text-xs rounded-lg shadow-md">
                  TRACK 02
                </span>
                <span className="text-xs font-semibold text-indigo-200 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  60시간 양성 아카데미
                </span>
              </div>
              <div className="absolute bottom-3 right-4 text-right">
                <span className="text-[11px] text-slate-300 block">선발 인원</span>
                <span className="text-xl font-extrabold text-indigo-400 font-mono">20명 내외</span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between bg-slate-900/90">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    AI 시민강사 육성과정형 (아카데미)
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    AI 교육에 열정이 있으나 강의 경험이 부족한 시민을 대상으로, 60시간 집중 교육을 통해 교수법과 도구 활용 역량을 체계적으로 길러주는 양성 트랙입니다.
                  </p>
                </div>

                {/* Requirements */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                  <h4 className="font-semibold text-indigo-300 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-indigo-400" />
                    <span>지원 대상 및 지원 자격</span>
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-xs sm:text-sm pl-1">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>생성형 AI 기본 툴 사용 경험 및 디지털 교육 봉사/강사 활동에 관심 있는 천안시민</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>경력단절 여성, 청년 구직자, 퇴직 후 지식 나눔을 희망하는 액티브 시니어 대환영</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>2027년 1~2월 중 진행되는 60시간 양성 아카데미(주 3회) 성실 참여 가능자</span>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-indigo-950/40 border border-indigo-800/50 rounded-2xl p-4 space-y-2 text-xs text-indigo-200">
                  <h4 className="font-bold text-white flex items-center gap-1.5 text-xs">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span>양성 혜택 & 성장 로드맵</span>
                  </h4>
                  <p>• <strong>전액 무료 교육:</strong> 60시간 AI 교수법 및 실습 커리큘럼 천안시 전액 지원</p>
                  <p>• <strong>현장 실습:</strong> 수료 후 정규 강좌에 '보조강사'로 우선 매칭 (실습 수당 지급)</p>
                  <p>• <strong>메인 강사 승급:</strong> 수업 평가 우수 수료자는 다음 학기 메인 강사 자동 위촉</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectTrackAndApply('incubator')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-600/30 transition-all group"
                >
                  <span>AI 시민강사 육성과정형으로 지원하기</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
