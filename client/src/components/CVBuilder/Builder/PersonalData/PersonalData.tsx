/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux'


function PersonalData({userDetail}:any) {

  const {personal_details} = userDetail
  const {id, email, phone_number, image, first_name, last_name, street, city, country, headline} = personal_details

  return (
    <div className="h-1/4 bg-light rounded-container max-h-175px p-4">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center">
          <img
                className='w-20 h-20 rounded-full mx-5'
                src={image} alt=''/>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-bold underline">Personal Details</p>
          <p>{first_name} {last_name}</p>
          <p>{email}</p>
          <p>{phone_number}</p>
          <p>{street} {city} {country}</p>
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