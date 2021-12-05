/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import TextInput from './Elements/Inputs/TextInput';
import { Skill } from '../../interfaces/CategoriesInterface';

import Button from './Elements/Buttons/Button';

function Skills({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details

  const initialState: Skill = {
    id: '',
    name: '',
    description: '',
    userId: ''
  };
  const [skill, setSkill] = useState(initialState);

  const handleForm = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setSkill({
      ...skill,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...skill, userId:user_id}
      res = await postForm("POST_SKILL",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_SKILL",skill)
    }
    setSkill(initialState)
    toggle()
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form >
        <TextInput type="text" value={skill.name} placeholder="skills" label="" name="name" callback={handleForm}/>
        <TextInput type="text" value={skill.description ? skill.description : ""} placeholder="sub-skill" label="" name="description" callback={handleForm}/>
      </form>
      <div className="flex flex-row">
        <Button name="Cancel" callback={toggle}/>
        <Button name="Edit" callback={handleSubmit} handleSubmitType="UPDATE"/>
        <Button name="Create" callback={handleSubmit} handleSubmitType="NEW"/>
      </div>
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
      endpoint: '/skills',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: (id:any, action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/skills',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);