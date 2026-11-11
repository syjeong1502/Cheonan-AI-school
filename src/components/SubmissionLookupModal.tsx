import React, { useState, useEffect } from 'react';
import { ApplicationSubmission } from '../types';
import { Search, X, FileText, Printer, CheckCircle2, AlertCircle } from 'lucide-react';
import { AGE_GROUPS_META, AI_TOOLS_META } from '../data/coursesData';

interface SubmissionLookupModalProps {
  onClose: () => void;
  onViewProposal: (submission: ApplicationSubmission) => void;
}

export const SubmissionLookupModal: React.FC<SubmissionLookupModalProps> = ({
  onClose,
  onViewProposal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allSubmissions, setAllSubmissions] = useState<ApplicationSubmission[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cheonan_ai_applications');
      if (stored) {
        setAllSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const results = allSubmissions.filter((sub) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return false;
    return (
      sub.applicant.name.toLowerCase().includes(term) ||
      sub.applicant.phone.replace(/[^0-9]/g, '').includes(term.replace(/[^0-9]/g, '')) ||
      sub.id.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 my-auto overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-base">천안시 AI 시민강사 지원내역 조회</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              지원자 성명 또는 휴대전화번호 / 접수번호 입력
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setHasSearched(true);
                }}
                placeholder="예: 홍길동 또는 010-1234-5678 또는 CN-AI-2026-..."
                className="flex-1 px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
              <button
                type="button"
                onClick={() => setHasSearched(true)}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-colors whitespace-nowrap"
              >
                조회하기
              </button>
            </div>
          </div>

          {/* Result List */}
          <div className="space-y-3 pt-2">
            {hasSearched && results.length === 0 && (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs">
                <AlertCircle className="w-6 h-6 mx-auto mb-2 text-slate-400" />
                <p>일치하는 지원 내역을 찾을 수 없습니다.</p>
                <p className="mt-1 text-slate-400">성명이나 연락처가 지원서와 일치하는지 확인해 주세요.</p>
              </div>
            )}

            {results.map((sub) => (
              <div
                key={sub.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors shadow-xs space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-700 block">
                      {sub.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                      {sub.proposal.title}
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {sub.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1 border-t border-slate-100">
                  <span>지원자: <strong>{sub.applicant.name}</strong></span>
                  <span>·</span>
                  <span>트랙: <strong>{sub.track === 'experienced' ? '실전 즉시투입형' : '아카데미 육성과정형'}</strong></span>
                  <span>·</span>
                  <span>접수일: <span className="tabular-nums font-mono">{sub.submittedAt}</span></span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      onViewProposal(sub);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>공인 기획서 / 지원서 보기 및 인쇄</span>
                  </button>
                </div>
              </div>
            ))}

            {!hasSearched && allSubmissions.length > 0 && (
              <div className="text-xs text-slate-500">
                * 최근 이 브라우저에서 접수된 지원서 {allSubmissions.length}건이 보관되어 있습니다. 성명이나 연락처를 입력해 확인하세요.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
