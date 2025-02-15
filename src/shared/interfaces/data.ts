export interface ExperienceData {
  company: string;
  contract: string;
  description: string;
  occupation: string;
  year: string;
}

export interface HobbiesData {
  description: string;
  imgUrl: string;
  name: string;
}

export interface SkillData {
  category: string;
  icon: string;
  name: string;
  bgColor: string;
}

export interface WorkData {
  description: string;
  icon: [];
  imgUrl: string;
  projectLink: string;
  releaseDate: string;
  sourceCode: string;
  tags: [];
  title: string;
}
