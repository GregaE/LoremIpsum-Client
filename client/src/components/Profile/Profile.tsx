/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { connect } from 'react-redux'
import { motion } from 'framer-motion';

import { PencilIcon, CheckIcon } from '@heroicons/react/solid';

import ProfileImg from "./ProfileImg/ProfileImg"
import ProfileCategory from './ProfileCategory/ProfileCategory';
import { useHandleForm } from '../../utils/CustomHooks';
import TextAreaInput from '../Forms/Elements/Inputs/TextAreaInput';
import TextInput from '../Forms/Elements/Inputs/TextInput';
import { PersonalDetails } from '../../interfaces/CategoriesInterface';


function Profile({userDetail, lang, cert, skill, edu, exp}:any) {

  const [editFlag, setEditFlag] = useState(false)
  const {personal_details} = userDetail;
  const { languages } = lang;
  const { certificates } = cert;
  const { skills } = skill;
  const { education } = edu;
  const { experience } = exp;
  // console.log(languages,certificates,skills,education,experience)

  const initialState = {...personal_details}
  const { state, handleForm, handleSubmit } = useHandleForm(
    '/personalDetails',
    initialState,
    'PERSONAL_DETAILS',
    'PERSONAL_DETAILS'
  );
  const user_details = {...state as PersonalDetails}

  function handleEditing(flag: boolean) {
    setEditFlag(!editFlag)

    if (!flag) {
      const { id } = personal_details
      handleSubmit('UPDATE',id)
    }
  }

  const userCategories = [
    { name: 'Certificates', items: [...certificates] },
    { name: 'Education', items: [...education] },
    { name: 'Languages', items: [...languages] },
    { name: 'Skills', items: [...skills] },
    { name: 'Work Experience', items: [...experience] },
  ];

  function renderCategories() {
    return userCategories.map((category: any) => {
      return (
        <ProfileCategory
          key={category.name}
          name={category.name}
          items={category.items}
        />
      );
    });
  }



  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.1 },
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <motion.div
      className="p-2 h-full flex flex-col justify-start overflow-x-hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <h2 className="underline text-3xl p-2 pb-10">Your personal data</h2>
      <div className="flex flex-row justify-center items-center ml-5 h-64  pb-10">
        <ProfileImg 
          userPicture={user_details.image} 
          handleEditing={handleEditing} 
          handleForm={handleForm} 
          user_details={user_details}/>

        <div className="w-2/3 h-full flex flex-col w-auto p-4 h-1/6 m-5 justify-center bg-primary rounded-lg">
          <div className="h-10 w-full p-2 underline text-2xl flex justify-around">
            <p className="h-full w-full">{user_details.first_name} {user_details.last_name}</p>
            {editFlag
              ? <CheckIcon
                  className="cursor-pointer"
                  onClick={() => handleEditing(false)}/>
              : <PencilIcon
                  className="cursor-pointer"
                  onClick={() => handleEditing(true)}/>}
          </div> 
          <div className="pl-4 pt-2 mt-2 h-32 overflow-x-auto">
            {editFlag
              ? <form className="pr-8">
                  <div className="flex gap-1">
                    <TextInput
                      type="text"
                      name="first_name"
                      value={user_details.first_name ? user_details.first_name : ''}
                      placeholder="First Name"
                      label="First Name"
                      callback={handleForm}
                    />
                    <TextInput
                      type="text"
                      name="last_name"
                      value={user_details.last_name ? user_details.last_name : ''}
                      placeholder="Last Name"
                      label="Last Name"
                      callback={handleForm}
                    />
                  </div>
                  <TextInput
                    type="text"
                    name="phone_number"
                    value={user_details.phone_number ? user_details.phone_number : ''}
                    placeholder="Phone Number"
                    label="Phone Number"
                    callback={handleForm}
                  />
                  <TextInput
                    type="text"
                    name="email"
                    value={user_details.email ? user_details.email : ''}
                    placeholder="Email"
                    label="Email"
                    callback={handleForm}
                  />
                  <div className="flex gap-1">
                    <TextInput
                      type="text"
                      name="street"
                      value={user_details.street ? user_details.street : ''}
                      placeholder="Street"
                      label="Street"
                      callback={handleForm}
                    />
                    <TextInput
                      type="text"
                      name="postcode"
                      value={user_details.postcode ? user_details.postcode : ''}
                      placeholder="PostCode"
                      label="PostCode"
                      callback={handleForm}
                    />
                  </div>
                  <div className="flex gap-1">
                    <TextInput
                      type="text"
                      name="city"
                      value={user_details.city ? user_details.city : ''}
                      placeholder="City"
                      label="City"
                      callback={handleForm}
                    />
                    <TextInput
                      type="text"
                      name="country"
                      value={user_details.country ? user_details.country : ''}
                      placeholder="Country"
                      label="Country"
                      callback={handleForm}
                    />
                  </div>
                  <TextAreaInput
                    type="text"
                    name="headline"
                    value={user_details.headline ? user_details.headline : ''}
                    placeholder="Headline"
                    label="Headline"
                    callback={handleForm}
                  />
                </form>
              : <div className="select-none">
                  <p>Name: {user_details.first_name} {user_details.last_name}</p>
                  <p>E-mail: {user_details.email}</p>
                  <p>Phone: {user_details.phone_number}</p>
                  <p>Address: {user_details.street}, {user_details.city}, {user_details.postcode} {user_details.country}</p>
                  <br/>
                  <p>Description: {user_details.headline}</p>
                </div>
            }
          </div>
        </div>



      </div>
      <div className="p-2 flex flex-col gap-4 h-full overflow-y-hidden overflow-x-auto">
        <h2 className="underline text-3xl">Your categories</h2>
        <div className="flex flex-col h-30 gap-3 overflow-x-auto  overflow-y-hidden overflow-x-auto">
          {renderCategories()}
        </div>
      </div>
    </motion.div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    userDetail: state.personal_details,
    lang: state.languages,
    cert: state.certificates,
    skill: state.skills,
    edu: state.education,
    exp: state.experience,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);