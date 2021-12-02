import { connect } from 'react-redux'
import Category from './Category/Category';

function Categories({pdfStatus}:any) {

  console.log('pdfStatus from categories: ', pdfStatus)

  function renderCategories() {
    return pdfStatus.map((category:any) => <Category key={category.name} name={category.name} items={category.items}/>)
  }

  return (
    <div className="flex flex-col items-center gap-10 p-5 max-h-80 overflow-y-auto max-h-full min-h-0">
        {renderCategories()}
    </div>
  );
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {
    pdfStatus: state.pdf,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);