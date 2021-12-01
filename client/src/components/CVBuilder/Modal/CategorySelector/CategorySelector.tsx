import { connect } from 'react-redux'

function CategorySelector({toggle}: any) {

  const categories:string[] = ['certificates','education','languages','skills','work experience'];

  const categoryList = categories
    .map(i => <div 
      key={i}
      onClick={()=>toggle()}
      className="w-1/5 h-20 bg-primary-bg rounded-full m-3 py-3 text-center" >{i}</div>)


  return (
    <div className="flex flex-row flex-wrap">
      {categoryList}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);