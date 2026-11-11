import React from 'react';
import { Sparkles, FileText, Search, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenLookup: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenLookup,
  onNavigateSection
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single clean text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-900 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
              천안
            </span>
            <span>천안시 AI 시민 강사 모집</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => onNavigateSection('tracks')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              지원 트랙 안내
            </button>
            <button
              onClick={() => onNavigateSection('courses')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              강좌·연령별 로드맵
            </button>
            <button
              onClick={() => onNavigateSection('guide')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              기획서 작성 가이드
            </button>
            <button
              onClick={() => onNavigateSection('schedule')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              선발 일정
            </button>
            <button
              onClick={() => onNavigateSection('faq')}
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              자주 묻는 질문
            </button>
          </nav>

          {/* Zone 3: 1 primary action & auxiliary lookup */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenLookup}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>접수 내역 조회</span>
            </button>

            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>온라인 지원서 접수</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
