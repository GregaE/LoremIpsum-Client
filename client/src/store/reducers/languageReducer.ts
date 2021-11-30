import { LanguageAction, LanguageState } from '../state_interfaces/languages';

const initState: LanguageState = {
  languages: [],
  loading: false,
  error: null,
};

const languageReducer = (
  state = initState,
  { type, payload, id }: LanguageAction
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
    case 'ALL_LANGUAGES':
      return {
        ...state,
        loading: false,
        error: null,
        languages: payload,
      };
    case 'UPDATE_LANGUAGE':
      return {
        ...state,
        loading: false,
        error: null,
        languages: state.languages.map(language => {
          if (language.id === id)
            return {
              ...language,
              ...payload,
            };
          return language;
        }),
      };
    case 'DELETE_LANGUAGE':
      return {
        ...state,
        loading: false,
        error: null,
        languages: state.languages.filter(language => language.id !== id),
      };
    default:
      return state;
  }
};

export default languageReducer;
