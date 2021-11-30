export interface Skill {
  id: string;
  name: string;
  description?: string;
}

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