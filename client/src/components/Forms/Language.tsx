/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

import { Languages } from '../../interfaces/CategoriesInterface';
import { useTypedSelector } from '../../utils/useTypeSelector'
import Button from './Elements/Buttons/Button';

function Language({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details

  const languages = ['A1', 'A2', 'B1', "B2", "C1", "C2"];

  const initialState: Languages = {
    id: '',
    language_name: '',
    level: '',
    userId: ''
  };

  const [language, setLanguage] = useState(initialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setLanguage({...language, [target.name]: target.value})
  }

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...language, userId:user_id}
      res = await postForm("POST_LANGUAGE",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_LANGUAGE",language)
    }
    setLanguage(initialState)
    toggle()
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput callback={handleForm} label="Language" type="text" name="language_name" value={language.language_name} placeholder="Enter language"/>
        <SelectInput callback={handleForm} name="level" options={languages} value={language.level ? language.level : ''}/>
        <div className="flex flex-row">
          <Button name="Cancel" callback={toggle}/>
          <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE"/>
          <Button name="Create" callback={handleSubmit} handleSubmitType="NEW"/>
        </div>
      </form>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () => dispatch({
      type: 'TOGGLE_MODAL',
      payload: {
        flag: false,
        identifier: ''
      }
    }),
    postForm: (action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/languages',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: (id:any, action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/languages',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);