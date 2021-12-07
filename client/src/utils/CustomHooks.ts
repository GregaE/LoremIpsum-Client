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
    setState({ ...state, [target.name]: target.value });
  };
  //handles the submit
  const handleSubmit = async (type: string) => {
    //We have to add some input controller before sending anything
    let res;
    if (type === 'NEW') {
      const data: EnumCategories = { ...state, userId: userId };
      dispatch(postForm(endpoint, postAction, data));
    }
    if (type === 'UPDATE') {
      //THIS IS NOT WORKING BECAUSE IT NEEDS THE ID OF THE ITEM TO UPDATE NOT USER ID
      res = dispatch(updateForm(endpoint, userId, updateAction, state));
    }
    console.log(res); //=> just to test if res is returning the correct data to be then passed to the state as initial one
    setState(initialState);
    dispatch(toggleModal(false, ''));
  };
  //toggle in case needed outside in the form
  const toggle = (flag: boolean, id: string) => {
    dispatch(toggleModal(flag, id));
  };
  return { state, handleSubmit, handleForm, toggle };
}
