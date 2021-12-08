import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EnumCategories } from '../interfaces/CategoriesInterface';
import { updateForm, postForm } from '../store/actions/formActions';
import { toggleModal } from '../store/actions/toggleModal';
import { useTypedSelector } from './useTypeSelector';

export function useHandleForm(
  endpoint: string,
  initialState: EnumCategories,
  postAction: string,
  updateAction: string
) {
  //sets the initial state from the form
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  //get the id of logged in user
  const {
    personal_details: { userId },
  } = useTypedSelector(state => state.personal_details);

  //handles the form
  const handleForm = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.name === 'image') {
      const url = target.getAttribute('newimageurl');
      setState({ ...state, [target.name as string]: url });
    } else {
      setState({ ...state, [target.name]: target.value });
    }
  };

  //handles the submit
  const handleSubmit = async (type: string, id?: string) => {
    //We have to add some input controller before sending anything
    let res;
    if (type === 'NEW') {
      const data: EnumCategories = { ...state, userId: userId };
      dispatch(postForm(endpoint, postAction, data));
    }
    if (type === 'UPDATE') {
      //THIS IS NOT WORKING BECAUSE IT NEEDS THE ID OF THE ITEM TO UPDATE NOT USER ID
      res = dispatch(updateForm(endpoint, id ? id : '', updateAction, state));
    }
    setState(initialState);
    dispatch(toggleModal(false, ''));
  };
  //toggle in case needed outside in the form
  const toggle = (flag: boolean, id: string) => {
    dispatch(toggleModal(flag, id));
  };
  return { state, handleSubmit, handleForm, toggle };
}
