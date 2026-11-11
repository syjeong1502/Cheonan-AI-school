import React from 'react';
import { RECRUITMENT_SCHEDULE } from '../data/coursesData';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const RecruitmentSchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Timeline & Selection Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            선발 및 강좌 배정 일정 안내
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            원서 접수부터 서류 및 기획서 심사, 모의강의 시연 평가, 위촉식까지의 공식 일정표입니다. 
            모든 심사는 공정하고 투명한 블라인드 심사로 진행됩니다.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {RECRUITMENT_SCHEDULE.map((item, idx) => {
            const isCurrent = item.status === 'current';
            return (
              <div
                key={item.step}
                className={`relative p-5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'border-blue-600 bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-extrabold font-mono px-2 py-0.5 rounded ${
                    isCurrent ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    STEP {item.step}
                  </span>
                  {isCurrent && (
                    <span className="text-[11px] font-bold text-blue-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      진행중
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.phase}
                </h3>

                <p className="mt-2 text-xs font-semibold text-blue-800 tabular-nums">
                  {item.period}
                </p>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Civic Note Strip */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>* 상기 일정은 천안시 교육 운영 상황에 따라 부득이한 경우 사전 공지 후 일부 변경될 수 있습니다.</span>
          </div>
          <div className="font-semibold text-slate-800">
            문의: 천안시청 평생교육과 ☎ 041-521-3700
          </div>
        </div>
      </div>
    </section>
  );
};
