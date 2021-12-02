import { connect } from 'react-redux'
import { ButtonProps } from '../../../../interfaces/ButtonProps';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function Button({name,formObject, userDetail,toggle, postForm} : any) {
  
  //Name can be Download, Delete, Edit or Create
  // identifier can be ['Certificates','Education','Languages','Skills','Work Experience']
  const {identifier} = useTypedSelector((state)=> state.toggleModal)
  const {personal_details} = userDetail;

  let endpoint: string;
  let actionToDispatch: string;
  switch (identifier) {
    case 'Certificates':
      endpoint = '/certificates'
      actionToDispatch = 'POST_CERTIFICATE'
      break;
    case 'Education':
      endpoint = '/education'
      actionToDispatch = 'POST_EDUCATION'
      break;
    case 'Languages':
      endpoint = '/languages'
      actionToDispatch = 'LANGUAGE'
      break;
    case 'Skills':
      endpoint = '/skills'
      actionToDispatch = 'SKILL'
      break;
    case 'Work Experience':
      endpoint = '/workExperience'
      actionToDispatch = 'POST_EXPERIENCE'
      break;
  
    default:
      break;
  }

  const dispatcher = async (name:any) => {
    const test =  await postForm(endpoint, personal_details.user_id,actionToDispatch, formObject)
    console.log(test)
    // toggle()
  }

  return (
    <div className="btn-container flex flex-row p-2">
      <button className="btn" onClick={() => dispatcher(name)}>{name}</button>
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
    postForm: (endP: any, id: string, action: any, data: any) => dispatch({
      type: 'FETCH_DATA',
      endpoint: endP,
      method: 'POST',
      id: id,
      dispatch: action,
      payload: data
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);