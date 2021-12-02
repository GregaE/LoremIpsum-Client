import { connect } from 'react-redux'


function PersonalData({userDetail}:any) {

  const {personal_details} = userDetail;

  // Personal details right now comes from /user instead from /personalDetails
  // So this one isnt the correct one, but this endpoint need some fixings so in the meantime
  // I use the use data
  const {username, email} = personal_details

  return (
    <div className="bg-light rounded-container p-4">
      <div className="flex flex-row items-center">
      <img
            className='w-20 h-20 rounded-full mx-8'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' alt=''/>
        <div className="flex flex-col items-start">
          <p className="font-bold underline">Personal Details</p>
          <p>{username}</p>
          <p>{email}</p>
          <p>Phone Number</p>
          <p>Address</p>
        </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);