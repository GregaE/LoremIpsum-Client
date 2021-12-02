import { connect } from 'react-redux'
import { ButtonProps } from '../../../../interfaces/ButtonProps';

function Button({name,formObject, toggle} : any) {
  
  //Name can be Download, Delete, Edit or Create
  const dispatcher = (name:any) => {
    console.log(formObject)
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);