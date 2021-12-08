/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { connect } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion';

import { PencilIcon, CheckIcon } from '@heroicons/react/solid';

import ProfileImg from './ProfileImg/ProfileImg';
import ProfileCategory from './ProfileCategory/ProfileCategory';
import { useHandleForm } from '../../utils/CustomHooks';
import { PersonalDetails } from '../../interfaces/CategoriesInterface';
import { ProfileForm } from './ProfileForm/ProfileForm';

function Profile({ userDetail, lang, cert, skill, edu, exp }: any) {
  const [editFlag, setEditFlag] = useState(false);
  const { personal_details } = userDetail;
  const { languages } = lang;
  const { certificates } = cert;
  const { skills } = skill;
  const { education } = edu;
  const { experience } = exp;

  console.log(personal_details)

  const initialState = { ...personal_details };
  const { state, handleForm, handleSubmit } = useHandleForm(
    '/personalDetails',
    initialState,
    'PERSONAL_DETAILS',
    'PERSONAL_DETAILS'
  );
  const user_details = { ...(state as PersonalDetails) };

  function handleEditing(flag: boolean) {
    setEditFlag(!editFlag);

    if (!flag) {
      const { id } = personal_details;
      handleSubmit('UPDATE', id);
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
  };

  return (
    <motion.div
      className="p-2 h-full flex flex-col justify-start overflow-x-hidden bg-primary-bg rounded-tl-corner"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <h2 className="text-3xl px-10 py-5">Your personal data</h2>
      <hr className="w-6/7 mx-5 text-primary-x pb-8" />
      <div className="flex flex-row justify-center ml-5 h-auto pb-10">
        <ProfileImg 
          userPicture={user_details.image} 
          handleEditing={handleEditing} 
          handleForm={handleForm} 
          user_details={user_details}/>

        <div className="w-2/3 h-full flex flex-col w-auto p-4 h-1/6 m-5 justify-center bg-primary rounded-lg">
          <div className="h-10 w-full px-4 py-2 text-2xl flex justify-around">
            <p className="h-full w-full text-light">{user_details.first_name} {user_details.last_name}</p>
            {editFlag
              ? <CheckIcon
                  className="cursor-pointer text-light hover:text-green"
                  onClick={() => handleEditing(false)}/>
              : <PencilIcon
                  className="cursor-pointer text-light hover:text-accent"
                  onClick={() => handleEditing(true)}/>}
          </div> 
          <div className="pl-4 pt-2 mt-2 overflow-x-auto text-light">
            <AnimatePresence exitBeforeEnter>
              {
              editFlag
                && <ProfileForm
                    user_details={user_details}
                    handleForm={handleForm}
                  />
              }
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {
              !editFlag &&
                <motion.div 
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ delay: 0.2, type: 'tween' }}
                  exit={{ opacity:0 }}
                  className="select-none">
                  <p>Name: {user_details.first_name} {user_details.last_name}</p>
                  <p>E-mail: {user_details.email}</p>
                  <p>Phone: {user_details.phone_number}</p>
                  <p>Address: {user_details.street}, {user_details.city}, {user_details.postcode} {user_details.country}</p>
                  <br/>
                  <p>Description: {user_details.headline}</p>
                </motion.div>
              }
            </AnimatePresence>
          </div>

        </div>
      </div>
      <div className="p-2 flex flex-col gap-4 h-full overflow-y-hidden overflow-x-auto">
        <h2 className="text-3xl px-10 py-5">Your categories</h2>
        <hr className="w-6/7 mx-5 text-primary-x pb-8" />
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
