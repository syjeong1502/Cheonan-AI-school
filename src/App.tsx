import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrackSection } from './components/TrackSection';
import { CourseMatrix } from './components/CourseMatrix';
import { ProposalGuide } from './components/ProposalGuide';
import { RecruitmentSchedule } from './components/RecruitmentSchedule';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ApplicationWizard } from './components/ApplicationWizard';
import { ProposalViewer } from './components/ProposalViewer';
import { SubmissionLookupModal } from './components/SubmissionLookupModal';
import { 
  ApplicationSubmission, 
  TrackType, 
  CourseProposal 
} from './types';
import { SAMPLE_COURSES, CourseCatalogItem } from './data/coursesData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<TrackType>('experienced');
  const [selectedTemplate, setSelectedTemplate] = useState<Partial<CourseProposal> | undefined>(undefined);
  const [viewingSubmission, setViewingSubmission] = useState<ApplicationSubmission | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize sample application in localStorage for instant testing if none exists
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cheonan_ai_applications');
      if (!stored || JSON.parse(stored).length === 0) {
        const seedSample: ApplicationSubmission = {
          id: 'CN-AI-2026-7842',
          submittedAt: '2026. 11. 10. 14:30',
          track: 'experienced',
          applicant: {
            name: '김천안',
            birthDate: '1988-04-12',
            gender: 'M',
            phone: '010-3849-2910',
            email: 'cheonan.kim@example.com',
            addressDistrict: '서북구 불당2동',
            currentOccupation: 'AI 에듀테크 프리랜서 강사',
            majorOrField: '컴퓨터교육학 석사',
            statementOfPurpose: '천안 토박이 강사로서 관내 어르신들이 디지털 소외 없이 스마트폰 인공지능을 즐겁게 쓰실 수 있도록 따뜻하고 세심한 눈높이 교육을 펼치겠습니다.',
            experienceYears: '3년~5년',
            experienceNotes: '충남 디지털배움터 강사 2년, 천안시 노인종합복지관 스마트폰 기초 특강 8회 출강',
            portfolioUrl: 'https://github.com/cheonan-instructor-kim'
          },
          proposal: SAMPLE_COURSES[0].templateProposal as CourseProposal,
          status: '접수완료'
        };
        localStorage.setItem('cheonan_ai_applications', JSON.stringify([seedSample]));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleOpenApply = (track?: TrackType, template?: Partial<CourseProposal>) => {
    if (track) setSelectedTrack(track);
    setSelectedTemplate(template || undefined);
    setIsApplyOpen(true);
  };

  const handleSelectTrackAndApply = (track: TrackType) => {
    handleOpenApply(track);
  };

  const handleSelectCourseTemplate = (course: CourseCatalogItem) => {
    handleOpenApply(undefined, course.templateProposal);
  };

  const handlePreviewStandardForm = () => {
    // Generate mock official form based on senior course sample
    const mockSubmission: ApplicationSubmission = {
      id: 'CN-AI-2026-PREVIEW',
      submittedAt: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }),
      track: 'experienced',
      applicant: {
        name: '홍길동 (예시)',
        birthDate: '1985-01-01',
        gender: 'M',
        phone: '010-0000-0000',
        email: 'sample@cheonan.go.kr',
        addressDistrict: '서북구 불당1동',
        currentOccupation: 'AI 강사 / 기획자',
        majorOrField: '소프트웨어',
        statementOfPurpose: '천안 시민들에게 실생활에 유용한 생성형 AI 교육을 제공하여 디지털 포용을 실천하고자 지원합니다.',
        experienceYears: '3년',
        experienceNotes: '공공기관 및 대학 AI 리터러시 강좌 다수 출강',
        portfolioUrl: 'https://example.com/portfolio'
      },
      proposal: SAMPLE_COURSES[0].templateProposal as CourseProposal,
      status: '접수완료'
    };
    setViewingSubmission(mockSubmission);
  };

  const handleSubmissionSuccess = (submission: ApplicationSubmission) => {
    setIsApplyOpen(false);
    setViewingSubmission(submission);
    setToastMessage(`지원서가 정상 접수되었습니다! 접수번호: ${submission.id}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Contract Compliant Header */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenLookup={() => setIsLookupOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenApply={() => handleOpenApply()}
          onNavigateSection={handleNavigateSection}
          onOpenLookup={() => setIsLookupOpen(true)}
        />

        <TrackSection onSelectTrackAndApply={handleSelectTrackAndApply} />

        <CourseMatrix onSelectCourseTemplate={handleSelectCourseTemplate} />

        <ProposalGuide
          onStartWritingProposal={() => handleOpenApply()}
          onPreviewStandardForm={handlePreviewStandardForm}
        />

        <RecruitmentSchedule />

        <FAQ />
      </main>

      {/* Civic Footer */}
      <Footer />

      {/* Success Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs font-medium">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white text-xs ml-2"
          >
            닫기
          </button>
        </div>
      )}

      {/* Interactive Application Modal Wizard */}
      {isApplyOpen && (
        <ApplicationWizard
          initialTrack={selectedTrack}
          initialTemplate={selectedTemplate}
          onClose={() => {
            setIsApplyOpen(false);
            setSelectedTemplate(undefined);
          }}
          onSuccess={handleSubmissionSuccess}
        />
      )}

      {/* Submission Lookup Modal */}
      {isLookupOpen && (
        <SubmissionLookupModal
          onClose={() => setIsLookupOpen(false)}
          onViewProposal={(sub) => setViewingSubmission(sub)}
        />
      )}

      {/* Official Proposal Viewer / Print Modal */}
      {viewingSubmission && (
        <ProposalViewer
          submission={viewingSubmission}
          onClose={() => setViewingSubmission(null)}
        />
      )}
    </div>
  );
}
