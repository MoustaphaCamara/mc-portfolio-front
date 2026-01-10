import { Portfolio } from './filters';
import { Skills } from './filters';

export const SKILLS_TO_SANITY: Record<Skills, string | null> = {
  [Skills.All]: null,
  [Skills.Front]: 'frontend',
  [Skills.Back]: 'backend',
  [Skills.Db]: 'database',
  [Skills.Framework]: 'frameworks',
  [Skills.Tools]: 'tools',
};

export const PORTFOLIO_TO_SANITY: Record<Portfolio, string | null> = {
  [Portfolio.All]: null,
  [Portfolio.React]: 'React',
  [Portfolio.Vue]: 'Vue',
  [Portfolio.Js]: 'Javascript',
  [Portfolio.Ts]: 'Typescript',
  [Portfolio.Sass]: 'SASS',
};
