import {
  Categories,
  Certificates,
  Education,
  EnumCategories,
  Languages,
  Skill,
  WorkExperience,
} from './CategoriesInterface';
export interface PDF {
  name: string;
  items: Categories[];
  // | Certificates[]
  // | Education[]
  // | Languages[]
  // | Skill[]
  // | WorkExperience[];
  pdf: Categories[];
}
