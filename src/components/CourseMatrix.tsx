import React, { useState } from 'react';
import { 
  SAMPLE_COURSES, 
  AGE_GROUPS_META, 
  AI_TOOLS_META, 
  CourseCatalogItem 
} from '../data/coursesData';
import { AgeGroup, AiTool, CourseProposal } from '../types';
import { Sparkles, ArrowRight, Layers, Clock, Users, Laptop, CheckCircle } from 'lucide-react';

interface CourseMatrixProps {
  onSelectCourseTemplate: (course: CourseCatalogItem) => void;
}

export const CourseMatrix: React.FC<CourseMatrixProps> = ({ onSelectCourseTemplate }) => {
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<string>('all');

  const filteredCourses = SAMPLE_COURSES.filter((course) => {
    const ageMatch = selectedAge === 'all' || course.targetAge === selectedAge;
    const toolMatch = selectedTool === 'all' || course.primaryTool === selectedTool;
    return ageMatch && toolMatch;
  });

  return (
    <section id="courses" className="py-20 bg-slate-100/90 border-b border-slate-300 relative overflow-hidden">
      {/* Decorative Warm Ambient Tint */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-xs font-bold text-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Audience & AI Curriculum Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            연령대별 맞춤 AI 과목 & 대표 강좌 로드맵
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            수강생의 연령과 인지 경험에 따라 필요한 AI 도구와 학습 목표는 달라집니다. 
            천안시가 권장하는 대표 과목군을 확인하고, 지원자만의 차별화된 강좌 기획서를 제안해 보세요.
          </p>
        </div>

        {/* Filter Controls (Segmented controls) */}
        <div className="space-y-4 mb-10 bg-white/95 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          {/* Age Group Filter */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">수강 대상 연령대 선택</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedAge('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedAge === 'all'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                전체 연령
              </button>
              {(Object.keys(AGE_GROUPS_META) as AgeGroup[]).map((ageKey) => (
                <button
                  key={ageKey}
                  onClick={() => setSelectedAge(ageKey)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedAge === ageKey
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {AGE_GROUPS_META[ageKey].name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* AI Tool Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-200/60">
            <span className="text-xs font-semibold text-slate-700 block">주요 AI 도구 선택</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedTool('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedTool === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                모든 AI 도구
              </button>
              {(Object.keys(AI_TOOLS_META) as AiTool[]).map((toolKey) => (
                <button
                  key={toolKey}
                  onClick={() => setSelectedTool(toolKey)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedTool === toolKey
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {AI_TOOLS_META[toolKey].name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Age Pedagogical Insight Callout (if specific age is selected) */}
        {selectedAge !== 'all' && AGE_GROUPS_META[selectedAge as AgeGroup] && (
          <div className="mb-10 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 text-sm text-slate-700 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-900">
                {AGE_GROUPS_META[selectedAge as AgeGroup].name} 맞춤 지도 팁
              </span>
              <span className="text-xs text-blue-600 font-medium">
                ({AGE_GROUPS_META[selectedAge as AgeGroup].subtext})
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {AGE_GROUPS_META[selectedAge as AgeGroup].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
              {AGE_GROUPS_META[selectedAge as AgeGroup].pedagogyTips.map((tip, idx) => (
                <div key={idx} className="bg-white/90 p-2.5 rounded-lg border border-blue-100 flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-tight">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const ageMeta = AGE_GROUPS_META[course.targetAge];
            const toolMeta = AI_TOOLS_META[course.primaryTool];

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-300 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  {/* Clean Unboxed Metadata with Typographic Separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="font-semibold text-blue-700">{ageMeta.name.split(' (')[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-800 font-medium">{toolMeta.name}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>난이도 {course.level}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  {/* Objectives */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                      핵심 교육 성과
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {course.keyObjectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus Preview Accordion / List */}
                  <div className="pt-2 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                      주차별 강의 구성 요약
                    </span>
                    <div className="space-y-1 text-xs text-slate-600">
                      {course.syllabusOutline.slice(0, 4).map((line, i) => (
                        <p key={i} className="truncate">
                          {line}
                        </p>
                      ))}
                      {course.syllabusOutline.length > 4 && (
                        <p className="text-slate-400 text-[11px] pt-0.5">
                          + {course.syllabusOutline.length - 4}개 주차 심화 실습 계획 포함 (전체 8주)
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Recommended Environment */}
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span><strong>준비 환경:</strong> {course.recommendedKit}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    이 커리큘럼을 기반으로 나만의 기획서 작성 가능
                  </span>
                  <button
                    onClick={() => onSelectCourseTemplate(course)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>기획서 템플릿 적용하기</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout for Youth / Maker Lab */}
        <div className="mt-12 bg-slate-900 rounded-2xl overflow-hidden text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Creative Tech Lab Showcase
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              나노바나나 & 오픈소스 코딩: 미래세대의 호기심을 깨워주세요
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              천안 관내 초·중·고교 방과후 교실과 도서관 메이커스페이스에서는 
              <strong>나노바나나(NanoBanana)</strong> 비주얼 블록 AI와 피지컬 교구를 활용한 실감형 수업 수요가 폭발적으로 증가하고 있습니다. 
              교재와 교구는 시에서 무상 대여 지원하므로 참신한 수업 지도안만 기획해 주시면 됩니다.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span>웹캠 기반 비전 AI 실습</span>
              <span aria-hidden="true">·</span>
              <span>피지컬 컴퓨팅 키트 제공</span>
              <span aria-hidden="true">·</span>
              <span>수업 결과물 전시회 개최</span>
            </div>
          </div>
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative bg-slate-800">
            <img
              src="/src/assets/images/youth_coding_lab_1794378340137.jpg"
              alt="천안 청소년 AI 창의 메이커스페이스"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
