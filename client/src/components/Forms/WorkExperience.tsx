import React, { useState } from 'react';
import { connect } from 'react-redux'
import TextInput from './Elements/Inputs/TextInput';
import SelectInput from './Elements/Inputs/SelectInput';
import { WorkExperience } from '../../interfaces/CategoriesInterface';
import Button from './Elements/Buttons/Button';

function WorkExperienceForm({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years = Array.from({length: 20}, (v, i) => i+2000); //Generate and array with values from 2000 to 2020

//TODO: ADD the date formatter for the db when handling submit button to convert string to a date - possibly let the server handle that
  const initialState: WorkExperience = {
    id:'',
    job_title: '',
    company: '',
    city: '',
    country: '',
    description: '',
    beginMonth: '',
    beginYear: '',
    endMonth: '',
    endYear: '',
  }

  const [workExperience, setWorkExperience] = useState(initialState)

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setWorkExperience({...workExperience, [target.name]: target.value})
  }

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...workExperience, userId:user_id}
      res = await postForm("POST_EXPERIENCE",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_EXPERIENCE",workExperience)
    }
    setWorkExperience(initialState)
    toggle()
  }

  return (
    <div className='object-center w-1/2 h-auto bg-green-400'>
      <form>
        <TextInput type='text' name='job_title' value={workExperience.job_title} placeholder='job-title' label='' callback={handleForm}/>
        <TextInput type='text' name='company' value={workExperience.company? workExperience.company: ''} placeholder='employer' label='' callback={handleForm}/>
        <div id='work_form_location' className='flex flex-row'>
          <TextInput type='text' name='city' value={workExperience.city? workExperience.city: ''} placeholder='city' label='' callback={handleForm}/>
          <TextInput type='text' name='country' value={workExperience.country? workExperience.country: ''} placeholder='country' label='' callback={handleForm}/>
        </div>
        <div id='work_form_dates' className='flex flex-row'>
          <SelectInput options={months} callback={handleForm} name='beginMonth' value={workExperience.beginMonth? workExperience.beginMonth: ''}/>
          <SelectInput options={years} callback={handleForm} name='beginYear' value={workExperience.beginYear? workExperience.beginYear: ''}/>
          <SelectInput options={months} callback={handleForm} name='endMonth' value={workExperience.endMonth? workExperience.endMonth: ''}/>
          <SelectInput options={years} callback={handleForm} name='endMonth' value={workExperience.endYear? workExperience.endYear: ''}/>
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
      endpoint: '/workExperience',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: ( id:any,action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/workExperience',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperienceForm);