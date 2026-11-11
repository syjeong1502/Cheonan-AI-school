import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs">
                천안
              </span>
              <span>천안시 AI 시민강사 모집 포털</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              천안시는 전 세대 시민의 디지털 기본권 보장과 AI 리터러시 확산을 위해 
              역량 있는 지역 강사진을 발굴하고 체계적으로 육성합니다.
            </p>
          </div>

          <div className="md:col-span-7 space-y-2 text-slate-400">
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-300">
              <span><strong>주관:</strong> 천안시 평생학습원 · 미래디지털혁신센터</span>
              <span><strong>소재지:</strong> (31162) 충청남도 천안시 서북구 번영로 156 천안시청</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span><strong>대표전화:</strong> 041-521-3700</span>
              <span><strong>팩스:</strong> 041-521-3709</span>
              <span><strong>이메일:</strong> lifelong@cheonan.go.kr</span>
            </div>
            <div className="pt-3 border-t border-slate-800 text-slate-400 text-[11px] flex flex-wrap items-center justify-between gap-2">
              <p>© 2026 CHEONAN SPECIAL CITY. ALL RIGHTS RESERVED.</p>
              <div className="flex items-center gap-3">
                <span className="hover:text-slate-300 transition-colors">개인정보처리방침</span>
                <span>·</span>
                <span className="hover:text-slate-300 transition-colors">저작권 정책</span>
                <span>·</span>
                <span className="hover:text-slate-300 transition-colors">오시는 길</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
