import { connect } from 'react-redux'
import { ButtonProps } from '../../../../interfaces/ButtonProps';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

function Button({name} : any) {
  
  //Name can be Download, Delete, Edit or Create
  // identifier can be ['Certificates','Education','Languages','Skills','Work Experience']
  // const {identifier} = useTypedSelector((state)=> state.toggleModal)
  // const {personal_details} = userDetail;

  // let endpoint: string;
  // let actionToDispatch: string;
  // switch (identifier) {
  //   case 'Certificates':
  //     endpoint = '/certificates'
  //     actionToDispatch = 'POST_CERTIFICATE'
  //     break;
  //   case 'Education':
  //     endpoint = '/education'
  //     actionToDispatch = 'POST_EDUCATION'
  //     break;
  //   case 'Languages':
  //     endpoint = '/languages'
  //     actionToDispatch = 'LANGUAGE'
  //     break;
  //   case 'Skills':
  //     endpoint = '/skills'
  //     actionToDispatch = 'SKILL'
  //     break;
  //   case 'Work Experience':
  //     endpoint = '/workExperience'
  //     actionToDispatch = 'POST_EXPERIENCE'
  //     break;
  
  //   default:
  //     break;
  // }


  return (
    <div className="btn-container flex flex-row p-2">
      <button className="btn">{name}</button>
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);