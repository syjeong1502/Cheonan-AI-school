import React from 'react';
import { ApplicationSubmission, CourseProposal } from '../types';
import { Printer, Download, X, CheckCircle, FileText } from 'lucide-react';
import { AGE_GROUPS_META, AI_TOOLS_META } from '../data/coursesData';

interface ProposalViewerProps {
  submission: ApplicationSubmission;
  onClose: () => void;
}

export const ProposalViewer: React.FC<ProposalViewerProps> = ({ submission, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const { applicant, proposal } = submission;
  const ageMeta = AGE_GROUPS_META[proposal.targetAge];
  const toolMeta = AI_TOOLS_META[proposal.primaryTool];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-8">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-300 my-auto overflow-hidden">
        {/* Modal Top Bar (Hidden on print) */}
        <div className="no-print bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm tracking-tight">
              천안시 AI 시민강사 공인 지원서 및 강좌개설기획서
            </span>
            <span className="text-xs text-slate-400 ml-2 font-mono">
              접수번호: {submission.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF로 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Document Body (Printable) */}
        <div className="p-6 sm:p-10 font-sans text-slate-900 space-y-8 bg-white" id="printable-document">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-5 text-center relative">
            <div className="text-[11px] text-slate-500 font-serif tracking-wider mb-1">
              [별지 제1호 서식] 천안시 평생교육 진흥 조례 시행규칙 제14조
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-serif">
              천안시 AI 시민강사 지원서 및 강좌 개설 기획서
            </h2>
            <div className="mt-3 flex items-center justify-center gap-6 text-xs text-slate-600">
              <span>접수일시: <strong className="text-slate-900 font-mono">{submission.submittedAt}</strong></span>
              <span>·</span>
              <span>지원 트랙: <strong className="text-blue-700 font-bold">{submission.track === 'experienced' ? '실전 즉시투입형' : 'AI 시민강사 육성과정형'}</strong></span>
              <span>·</span>
              <span>접수 상태: <strong className="text-emerald-700 font-bold">{submission.status}</strong></span>
            </div>

            {/* Municipal Stamp Badge */}
            <div className="absolute right-0 top-0 hidden sm:flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-red-600/70 text-red-700 text-[10px] font-bold p-1 leading-tight rotate-12 select-none">
              <span>천안시장</span>
              <span className="text-[8px] text-red-500">직인생략</span>
              <span className="text-[9px] font-mono">접수완료</span>
            </div>
          </div>

          {/* Section 1: Applicant Information Table */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-serif">
              <span>1. 지원자 기본 인적사항</span>
            </h3>
            <table className="w-full text-xs border border-slate-300 border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold w-24 text-slate-700 border-r border-slate-200">성명</th>
                  <td className="p-2.5 font-bold text-slate-900 w-44 border-r border-slate-200">{applicant.name}</td>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold w-24 text-slate-700 border-r border-slate-200">생년월일</th>
                  <td className="p-2.5 text-slate-800 font-mono">{applicant.birthDate || '미입력'}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">연락처</th>
                  <td className="p-2.5 text-slate-800 font-mono border-r border-slate-200">{applicant.phone}</td>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">이메일</th>
                  <td className="p-2.5 text-slate-800 font-mono">{applicant.email}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">천안 거주지</th>
                  <td className="p-2.5 text-slate-800 border-r border-slate-200 font-medium">{applicant.addressDistrict}</td>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">현재 직업/전공</th>
                  <td className="p-2.5 text-slate-800">{applicant.currentOccupation} ({applicant.majorOrField || '일반'})</td>
                </tr>
                <tr>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">경력/포트폴리오</th>
                  <td colSpan={3} className="p-2.5 text-slate-800">
                    <div className="font-semibold text-blue-900">경력 {applicant.experienceYears}</div>
                    <div className="mt-1 text-slate-700 whitespace-pre-line">{applicant.experienceNotes}</div>
                    {applicant.portfolioUrl && (
                      <div className="mt-1 text-blue-700 font-mono text-[11px]">
                        URL: {applicant.portfolioUrl}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 2: Course Proposal Overview Table */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-serif">
              <span>2. 제안 강좌 개요 및 운영 계획</span>
            </h3>
            <table className="w-full text-xs border border-slate-300 border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold w-24 text-slate-700 border-r border-slate-200">강좌명</th>
                  <td colSpan={3} className="p-2.5 font-bold text-slate-950 text-sm">{proposal.title}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">대상 연령대</th>
                  <td className="p-2.5 text-slate-800 font-semibold border-r border-slate-200">{ageMeta.name}</td>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">핵심 AI 도구</th>
                  <td className="p-2.5 text-slate-800 font-bold text-blue-800">{toolMeta.name}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">교육 기간/시수</th>
                  <td className="p-2.5 text-slate-800 border-r border-slate-200">
                    총 {proposal.totalWeeks}주 (주 1회, 회당 {proposal.hoursPerSession}시간 / 총 {proposal.totalWeeks * proposal.hoursPerSession}시간)
                  </td>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">모집 정원</th>
                  <td className="p-2.5 text-slate-800">{proposal.maxStudents}명 내외</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">교육 목표</th>
                  <td colSpan={3} className="p-2.5 text-slate-800 leading-relaxed font-medium">
                    {proposal.objective}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">수강 요건</th>
                  <td colSpan={3} className="p-2.5 text-slate-700 leading-relaxed">
                    {proposal.prerequisites}
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">기대 산출물</th>
                  <td colSpan={3} className="p-2.5 text-blue-900 font-semibold leading-relaxed">
                    {proposal.expectedOutcome}
                  </td>
                </tr>
                <tr>
                  <th className="bg-slate-100 p-2.5 text-left font-semibold text-slate-700 border-r border-slate-200">실습/교재 환경</th>
                  <td colSpan={3} className="p-2.5 text-slate-700 leading-relaxed">
                    하드웨어: {proposal.hardwareRequirement} / 소프트웨어: {proposal.softwareRequirement}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Detailed Weekly Curriculum Plan */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between font-serif">
              <span>3. 주차별 세부 강의 계획 (이론 30% : 실습 70%)</span>
              <span className="text-xs text-slate-500 font-sans font-normal">총 {proposal.curriculum.length}회차 구성</span>
            </h3>
            <table className="w-full text-xs border border-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                  <th className="p-2 text-center w-12 border-r border-slate-200 font-semibold">회차</th>
                  <th className="p-2 text-left w-44 border-r border-slate-200 font-semibold">강의 주제</th>
                  <th className="p-2 text-left border-r border-slate-200 font-semibold">강의 및 실습 세부 내용</th>
                  <th className="p-2 text-left w-48 font-semibold">주차별 결과물/과제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {proposal.curriculum.map((weekItem) => (
                  <tr key={weekItem.week} className="hover:bg-slate-50/50">
                    <td className="p-2 text-center font-bold text-slate-900 border-r border-slate-200 bg-slate-50/40">
                      {weekItem.week}주
                    </td>
                    <td className="p-2 font-semibold text-slate-900 border-r border-slate-200">
                      {weekItem.topic}
                    </td>
                    <td className="p-2 border-r border-slate-200 space-y-1">
                      <div className="text-slate-800">
                        <span className="font-semibold text-blue-800 mr-1">[이론]</span>
                        {weekItem.lectureDetail}
                      </div>
                      <div className="text-slate-700">
                        <span className="font-semibold text-emerald-800 mr-1">[실습]</span>
                        {weekItem.practiceDetail}
                      </div>
                    </td>
                    <td className="p-2 text-slate-700 font-medium">
                      {weekItem.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4: Age-Specific Considerations */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 font-serif">
              4. 대상 연령 특화 지도 방안 및 안전·윤리 계획
            </h3>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed whitespace-pre-line">
              {proposal.ageSpecificConsiderations || '해당 연령대 특성을 고려하여 반복 학습과 친근한 비유, 보조강사 밀착 지원을 진행합니다.'}
            </div>
          </div>

          {/* Section 5: Statement of Purpose */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 font-serif">
              5. 지원 동기 및 천안시 AI 교육 기여 포부
            </h3>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed whitespace-pre-line">
              {applicant.statementOfPurpose}
            </div>
          </div>

          {/* Official Pledge */}
          <div className="pt-6 border-t-2 border-slate-900 text-center space-y-4">
            <p className="text-xs text-slate-700 leading-relaxed">
              본인은 천안시 AI 시민강사 모집에 응시함에 있어 상기 기재사항 및 제출 기획서가 모두 사실임을 서약하며,<br />
              향후 강사로 위촉될 시 성실히 교육에 임하고 천안시민의 디지털 역량 향상에 이바지할 것을 확약합니다.
            </p>
            <div className="text-sm font-serif font-bold text-slate-900">
              지원자 성명: <span className="underline underline-offset-4 ml-1">{applicant.name}</span> (서명 또는 날인)
            </div>
            <div className="text-base font-serif font-extrabold text-slate-950 pt-2 tracking-wide">
              천안시장 귀하
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar (Hidden on print) */}
        <div className="no-print bg-slate-100 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            * '인쇄 / PDF로 저장'을 클릭하여 지원서 사본을 보관할 수 있습니다.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>문서 인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              창 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
