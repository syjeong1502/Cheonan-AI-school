export type TrackType = 'experienced' | 'incubator';

export type AgeGroup = 'senior' | 'elementary' | 'youth' | 'college' | 'general';

export type AiTool = 
  | 'chatgpt' 
  | 'gemini' 
  | 'claude' 
  | 'github' 
  | 'nanobanana' 
  | 'image_gen';

export interface WeeklyPlan {
  week: number;
  topic: string;
  lectureDetail: string;
  practiceDetail: string;
  outcome: string;
}

export interface CourseProposal {
  title: string;
  targetAge: AgeGroup;
  primaryTool: AiTool;
  secondaryTools?: string;
  totalWeeks: number; // 4 or 8 weeks usually
  hoursPerSession: number;
  maxStudents: number;
  objective: string;
  prerequisites: string;
  targetAudienceDetail: string;
  hardwareRequirement: string;
  softwareRequirement: string;
  ageSpecificConsiderations: string;
  expectedOutcome: string;
  curriculum: WeeklyPlan[];
}

export interface ApplicationSubmission {
  id: string; // e.g. CN-AI-2026-1042
  submittedAt: string;
  track: TrackType;
  applicant: {
    name: string;
    birthDate: string;
    gender: 'M' | 'F' | 'OTHER';
    phone: string;
    email: string;
    addressDistrict: string; // 천안시 동남구/서북구 행정동
    currentOccupation: string;
    majorOrField: string;
    statementOfPurpose: string;
    experienceYears: string;
    experienceNotes: string;
    portfolioUrl?: string;
  };
  proposal: CourseProposal;
  status: '접수완료' | '1차서류검토중' | '면접심사대상' | '최종선발';
}
