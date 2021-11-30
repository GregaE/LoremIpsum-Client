import { Skill } from '../../interfaces/CategoriesInterface';

export interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}

export interface SkillAction {
  type: string;
  payload?: Skill;
  id?: string;
}
