import React, { useState } from 'react';
import { FAQ_LIST } from '../data/coursesData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            지원 자격, 트랙 선택 기준, 강좌 기획서 작성 및 처우에 관해 지원자분들이 가장 많이 묻는 질문들을 모았습니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpdesk Notice */}
        <div className="mt-8 text-center text-xs text-slate-500">
          추가적인 문의사항은 <strong className="text-slate-800">천안시 평생학습원 평생교육과 (041-521-3700)</strong>로 평일 09:00~18:00에 문의해 주시기 바랍니다.
        </div>
      </div>
    </section>
  );
};
