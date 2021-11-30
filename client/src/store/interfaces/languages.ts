export interface Language {
  id: string;
  name: string;
  level?: string;
}

export interface LanguageState {
  languages: Language[];
  loading: boolean;
  error: string | null;
}

export interface LanguageAction {
  type: string;
  payload?: Language[];
  id?: string;
}