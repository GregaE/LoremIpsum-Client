import { connect } from 'react-redux'

function CategorySelector({toggle, addCategory}: any) {

  function addCategoryName(name: string) {
    addCategory(name)
    toggle()
  }

  const categories:string[] = ['Certificates','Education','Languages','Skills','Work Experience'];

  const categoryList = categories
    .map(i => <div 
      key={i}
      onClick={()=>addCategoryName(i)}
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
    addCategory: (categoryName:string) => dispatch({
      type: 'ADD_CATEGORY',
      payload: {
        name: categoryName,
        items: []
      }
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);