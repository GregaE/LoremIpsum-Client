import { Skill } from '../../interfaces/CategoriesInterface';

export interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}

export interface SkillAction {
  type: string;
  payload: Skill & Skill[];
  all: Skill[];
  id?: string;
  error: string | null;
}
