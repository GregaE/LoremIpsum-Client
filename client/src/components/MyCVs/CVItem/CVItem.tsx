import { connect } from 'react-redux'

function CVItem({cvId, date_created, data}:any) {

  /*
  Every CV could recive the whole data of cvs as props or just send an identifier as prop from parent
  And get the data from cvs state and just Array.find(CV Identifier)
  */
  const parsedData = JSON.parse(data)


  return ( 
    <div className="bg-light w-80 h-96 flex flex-col justify-center items-center shadow-lg bg-contain	bg-center"
      style={{ backgroundImage: `url(https://www.myesr.org/sites/default/files/media-icons/generic/application-pdf.png)` }}
      onClick={()=>{console.log(parsedData)}}>
      <p className="p-10" >CV Item</p>
      <p>ID {cvId}</p>
      <p>date_created {date_created}</p>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    modal: state.toggleModal,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVItem);