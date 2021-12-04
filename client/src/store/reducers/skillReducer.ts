import { SkillState, SkillAction } from '../state_interfaces/skills';

const initState: SkillState = {
  skills: [],
  loading: false,
  error: null,
};

const skillReducer = (
  state = initState,
  { type, payload, id }: SkillAction
) => {
  switch (type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FAILED':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'ALL_SKILLS':
      return {
        ...state,
        loading: false,
        error: null,
        skills: payload,
      };
    case 'POST_SKILL':
      return {
        ...state,
        loading: false,
        error: null,
        skills: [...state.skills, payload],
      };
    case 'UPDATE_SKILL':
      return {
        ...state,
        loading: false,
        error: null,
        skills: state.skills.map(skill => {
          if (skill.id === id)
            return {
              ...payload,
            };
          return skill;
        }),
      };
    case 'DELETE_SKILL':
      return {
        ...state,
        loading: false,
        error: null,
        skills: state.skills.filter(skill => skill.id !== id),
      };
    default:
      return state;
  }
};

export default skillReducer;
