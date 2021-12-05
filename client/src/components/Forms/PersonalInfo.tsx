/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import Button from './Elements/Buttons/Button';
import TextInput from './Elements/Inputs/TextInput';

import { PersonalDetails } from '../../interfaces/CategoriesInterface';

function PersonalInfo({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details

  const initialState: PersonalDetails = {
    id: '',
    email: '',
    phone_number: '', 
    image: '', 
    first_name: '', 
    last_name: '', 
    street: '', 
    postcode: '', 
    city: '', 
    country: '', 
    headline: '', 
    userId: '',
  }

  const [personalDetails, setPersonalDetails] = useState(initialState);

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setPersonalDetails({...personalDetails, [target.name]: target.value})
  }

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...personalDetails, userId:user_id}
      res = await postForm("POST_SKILL",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_SKILL",personalDetails)
    }
    setPersonalDetails(initialState)
    toggle()
  }

  return (
    <div className="object-center w-1/2 h-auto bg-green-400">
      <form>
        {/* Miss Photo Input/Holder */}
        <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.first_name + ' ' + personalDetails.last_name} 
          placeholder="full name" label=""/>
        <div id="personalInfo_form_contact" className="flex flex-row">
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.email ? personalDetails.email : ''} 
          placeholder="email" label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.phone_number ? personalDetails.phone_number : ''} 
          placeholder="phone" label=""/>
        </div>
        <TextInput callback={handleForm}
        type="text" 
        value={personalDetails.street ? personalDetails.street : ''} 
        placeholder="street" label=""/>
        <div id="personalInfo_form_address" className="flex flex-row">
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.postcode ? personalDetails.postcode : ''} 
          placeholder="postcode" 
          label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.city ? personalDetails.city : ''} 
          placeholder="city" 
          label=""/>
          <TextInput callback={handleForm}
          type="text" 
          value={personalDetails.country ? personalDetails.country : ''} 
          placeholder="country" 
          label=""/>
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
      endpoint: '/personalDetails',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: (id:any, action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/personalDetails',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);