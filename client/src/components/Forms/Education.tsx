import React, { useState } from 'react';
import { connect } from 'react-redux'
import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';

import { useTypedSelector } from '../../utils/useTypeSelector'

function Education({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details
  interface formState {
    degree: string;
    school: string;
    city: string;
    country: string;
    beginMonth: string;
    beginYear: string;
    endMonth: string;
    endYear: string;
  }

  const initialState: formState = {
    degree: '',
    school: '',
    city: '',
    country: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  };

  const [education, setEducation] = useState(initialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setEducation({...education, [target.name]: target.value})
  }

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...education, userId:user_id}
      res = await postForm("POST_EDUCATION",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_EDUCATION",education)
    }
    setEducation(initialState)
    toggle()
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = Array.from({length: 20}, (v, i) => i+2000); //Generate and array with values from 2000 to 2020
  
  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        <TextInput callback={handleForm}
          type="text" name="degree" value={education.degree} placeholder="degree" label=""/>
        <TextInput callback={handleForm}
          type="text" name="school" value={education.school} placeholder="school" label=""/>
        <div id="education_form_location" className="flex flex-row">
          <TextInput callback={handleForm}
            type="text" name="city" value={education.city} placeholder="city" label=""/>
          <TextInput callback={handleForm}
            type="text" name="country" value={education.country} placeholder="country" label=""/>
        </div>
        <div id="education_form_dates" className="flex flex-row">
          <SelectInput callback={handleForm} value={education.beginMonth}
            name="beginMonth" options={months} />
          <SelectInput callback={handleForm} value={education.beginYear}
            name="beginYear" options={years}/>
          <SelectInput callback={handleForm} value={education.endMonth}
            name="endMonth" options={months}/>
          <SelectInput callback={handleForm} value={education.endYear}
            name="endYear" options={years}/>
        </div>
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
      endpoint: '/education',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: ( id:any ,action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/education',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);