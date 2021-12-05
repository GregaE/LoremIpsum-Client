/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux'

import TextInput from './Elements/Inputs/TextInput';
import Button from './Elements/Buttons/Button';

import { Certificates } from '../../interfaces/CategoriesInterface';

function Certificate({userDetail, toggle, postForm, updateForm}:any) {

  const {personal_details} = userDetail;
  const {user_id} = personal_details

  const initialState: Certificates = {
    name: '',
    description: '',
    userId: ''
  };
  const [certificate, setCertificate] = useState(initialState)

  const handleForm = (e: React.ChangeEvent):void => {
    const target = e.target as HTMLInputElement;
    setCertificate({...certificate, [target.name]: target.value})
  }
  // On submit do the below
  ///dispatch ADD_CERTIFICATE => middleware >> API CALL > RETURNS DB RECORD > CHANGES THE STATE

  const handleSubmit = async (type:string)=> {
    //We have to add some input controller before sending anything
    
    let res;
    if(type==="NEW") {
      const data = {...certificate, userId:user_id}
      res = await postForm("POST_CERTIFICATE",data)
    }
    if(type==="UPDATE") {
      res = await updateForm(user_id,"UPDATE_CERTIFICATE",certificate)
    }
    setCertificate(initialState)
    toggle()
  }



  return (
    <div className='object-center m-auto text-center w-1/2 h-auto bg-primary rounded-lg'>
      <p className='text-light my-8'>Add new certificate</p>
      <form>
        <TextInput callback={handleForm}
          type='text' name='name' value={certificate.name} placeholder='HelloInput' label='Title of the certificate'/>
        <TextInput callback={handleForm}
          type='text' name='description' value={certificate.description ? certificate.description : ''} placeholder='WorldInput' label='Description...'/>
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
      endpoint: '/certificates',
      method: 'POST',
      id:'',
      dispatch: action,
      payload: data
    }),
    updateForm: ( id: any,action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/certificates',
      method: 'PUT',
      id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Certificate);