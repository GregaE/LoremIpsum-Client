import React from 'react';
import { connect } from 'react-redux'
import { motion } from 'framer-motion';
import { useTypedSelector } from '../../utils/useTypeSelector';


import ProfileImg from "./ProfileImg/ProfileImg"
import Modal from '../CVBuilder/Modal/Modal';
import ProfileCategory from './ProfileCategory/ProfileCategory';


function Profile({userDetail,lang,cert,skill,edu,exp}:any) {

  console.log('user detail', userDetail)
  const {personal_details} = userDetail;
  const {email, password} = personal_details

  // Array of objects I let it here for future implementation
  const {languages} = lang;
  const {certificates} = cert
  const {skills} = skill
  const {education} = edu
  const {experience} = exp

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: 0.1, duration: 0.1}
    },
    exit: {
      opacity: 0,
    },
  }
  //Display modal by switch
  const modal = flag ? <Modal/> : null

  return (
    <motion.div className="p-2 h-full flex flex-col justify-start overflow-x-hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}>
      <h2 className="underline text-3xl p-2">Your personal data</h2>
      <div className="flex flex-row justify-center items-center p-4 ml-5">
        <ProfileImg/>
        <div className="w-2/3 h-1/6 flex flex-col w-auto p-4 h-1/6 m-5 justify-center bg-primary rounded-lg">
          <p className="p-4 underline text-2xl">Joder!</p>
          <div className="p-8">
            {/* <p>{`Name ${username}`}</p> */}
            <p>{`E-mail ${email}`}</p>
            <p>{`Password ${password}`}</p>
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-4 h-full overflow-y-hidden overflow-x-auto">
        <h2 className="underline text-3xl">Your categories</h2>
        <div className="flex flex-col h-30 gap-3 overflow-x-auto  overflow-y-hidden overflow-x-auto">
          {renderCategories()}
        </div>
      </div>
      {modal}
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
    exp: state.experience
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggle: () =>
    dispatch({
      type: 'TOGGLE_MODAL',
      payload: {
        flag: true,
        identifier: 'PersonalInfo',
      },
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);