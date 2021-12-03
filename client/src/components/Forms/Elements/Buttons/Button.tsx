import { connect } from 'react-redux'

function Button({name, callback, handleSubmitType} : any) {
  
  return (
    <div className="btn-container flex flex-row p-2">
      <button className="btn" onClick={()=>handleSubmitType ? callback(handleSubmitType) : callback()}>{name}</button>
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