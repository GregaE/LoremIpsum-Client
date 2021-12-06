import {
  Categories,
  EnumCategories,
} from '../../interfaces/CategoriesInterface';

export {};

export const postForm = (
  endpoint: string,
  action: string,
  data: EnumCategories
) => {
  return {
    type: 'FETCH_DATA',
    endpoint: endpoint,
    method: 'POST',
    id: '',
    dispatch: action,
    payload: data,
  };
};

export const updateForm = (
  endpoint: string,
  id: string,
  action: string,
  data: EnumCategories
) => {
  return {
    type: 'FETCH_DATA',
    endpoint: endpoint,
    method: 'PUT',
    id,
    dispatch: action,
    payload: data,
  };
};
