import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileCheck, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { TrackType } from '../types';

interface HeroProps {
  onOpenApply: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenLookup: () => void;
}

interface SlideItem {
  id: string;
  image: string;
  badge: string;
  targetCategory: string;
  title: string;
  subtitle: string;
  leadText: string;
  tags: string[];
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 'slide-senior',
    image: '/src/assets/images/senior_man_ai_laptop_1794379601074.jpg',
    badge: 'Senior & Active Senior AI Track',
    targetCategory: '어르신·신중년의 새로운 디지털 도전',
    title: '스마트폰 비서부터 AI 글쓰기까지,',
    subtitle: '천안시 어르신의 내일을 함께 열어 갈 시민 강사를 모십니다',
    leadText: '말벗 ChatGPT 음성 대화, 병원 및 복약 알림, 손주를 위한 AI 동화와 추억 복원. 디지털 소외 없는 따뜻한 천안을 만드는 주인공이 되어 주세요.',
    tags: ['ChatGPT 음성 비서', '스마트폰 AI 활용', '시니어 눈높이 교육']
  },
  {
    id: 'slide-civic',
    image: '/src/assets/images/hero_cheonan_ai_1794378338472.jpg',
    badge: 'Cheonan Civic Smart Lab',
    targetCategory: '배우는 기쁨, 가르치는 보람',
    title: '전 세대를 아우르는 천안형 AI 교육,',
    subtitle: '실전 경험자부터 양성 아카데미까지 맞춤 선발합니다',
    leadText: '현장에 바로 출강할 실전 즉시 투입형 강사와 60시간 전액 무료 교육으로 성장할 육성 과정형 강사를 총 40명 내외로 모집합니다.',
    tags: ['실전 투입 20명', '아카데미 육성 20명', '시간당 5~7만 원']
  },
  {
    id: 'slide-youth',
    image: '/src/assets/images/youth_coding_lab_1794378340137.jpg',
    badge: 'Kids & Youth Maker Space',
    targetCategory: '꿈나무 어린이 & 청소년 창의 교실',
    title: '나노바나나(NanoBanana)와 생성형 AI로,',
    subtitle: '천안의 아이들에게 미래 기술의 호기심을 선물하세요',
    leadText: '어려운 텍스트 코딩 대신 비주얼 블록 AI와 카메라 비전 센서, Claude 논리 탐구로 상상력을 마음껏 펼치는 재미있는 수업을 기획해 주세요.',
    tags: ['나노바나나 교구 지원', '비전 AI 로봇', '올바른 AI 윤리']
  },
  {
    id: 'slide-academy',
    image: '/src/assets/images/instructor_academy_1794378338719.jpg',
    badge: 'Cheonan AI Instructor Academy',
    targetCategory: '60시간 집중 AI 교수법 양성 과정',
    title: '경험이 부족해도 괜찮습니다,',
    subtitle: '천안시가 공인 AI 전문 강사로 탄탄하게 육성합니다',
    leadText: '프롬프트 엔지니어링 실무부터 연령별 티칭 스킬, 보조 강사 현장 실습까지 체계적인 멘토링으로 강사로서의 새로운 길을 열어 드립니다.',
    tags: ['교육비 전액 무료', '보조 강사 실습 100%', '공인 위촉장 수여']
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onNavigateSection,
  onOpenLookup
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIdx]);

  const slide = HERO_SLIDES[currentIdx];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Slides with Crossfade Animation */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIdx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
          } transition-transform duration-7000`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Measured Photographic Contrast Scrim (Referencing Tablet design) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Hero Foreground Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Top Category Badge & Notice */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 bg-blue-600/90 text-white font-bold rounded-md backdrop-blur-xs shadow-sm">
              {slide.badge}
            </span>
            <span className="text-blue-300 font-semibold tracking-wide">
              {slide.targetCategory}
            </span>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span className="text-slate-300">천안시 미래디지털혁신센터</span>
          </div>

          {/* Dynamic Headline with balanced line wrap */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
              {slide.title}
              <span className="block text-blue-400 mt-1 font-bold">
                {slide.subtitle}
              </span>
            </h1>
          </div>

          {/* Lead Proposition */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            {slide.leadText}
          </p>

          {/* Topic Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
            {slide.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Triggers */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all group"
            >
              <span>온라인 지원서 & 강좌기획서 작성</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateSection('guide')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl border border-white/20 transition-colors"
            >
              <FileCheck className="w-4 h-4 text-blue-300" />
              <span>강좌 기획서 작성 가이드</span>
            </button>
          </div>

          {/* Schedule & Metadata Mini Strip */}
          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
            <div>
              <span className="text-slate-400 mr-1.5">접수 마감:</span>
              <strong className="text-white font-mono font-bold">2026. 12. 05(금) 18:00</strong>
            </div>
            <div>
              <span className="text-slate-400 mr-1.5">모집 정원:</span>
              <strong className="text-white">실전형 20명 + 육성형 20명</strong>
            </div>
            <div>
              <span className="text-slate-400 mr-1.5">선발 대상:</span>
              <strong className="text-white">천안시민 및 생활권자 우선</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Controller Bar (Bottom Right & Indicators) */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 shadow-xl text-white">
        {/* Slide Counter */}
        <span className="text-xs font-mono font-bold tracking-widest tabular-nums text-blue-300">
          0{currentIdx + 1} <span className="text-slate-500">/</span> 0{HERO_SLIDES.length}
        </span>

        {/* Indicators Dots */}
        <div className="flex items-center gap-1.5 px-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`슬라이드 ${idx + 1}번으로 이동`}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIdx ? 'w-6 bg-blue-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause & Arrows */}
        <div className="flex items-center gap-1 pl-1 border-l border-white/20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? '슬라이드쇼 일시정지' : '슬라이드쇼 재생'}
            className="p-1 hover:text-blue-300 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={prevSlide}
            aria-label="이전 사진"
            className="p-1 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="다음 사진"
            className="p-1 hover:text-blue-300 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
