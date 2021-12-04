import { connect, useDispatch } from 'react-redux';
import { toggleModal } from '../../../../store/actions/toggleModal';

function CategorySelector({ addCategory }: any) {
  const dispatch = useDispatch();

  function addCategoryName(name: string) {
    addCategory(name);
    dispatch(toggleModal(false, ''));
  }

  const categories: string[] = [
    'Certificates',
    'Education',
    'Languages',
    'Skills',
    'Work Experience',
  ];

  const categoryList = categories.map(name => (
    <div
      key={name}
      onClick={() => addCategoryName(name)}
      className="w-1/5 h-20 bg-primary-bg rounded-full m-3 py-3 text-center"
    >
      {name}
    </div>
  ));

  return <div className="flex flex-row flex-wrap">{categoryList}</div>;
}

//TODO - state & dispatch types
const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addCategory: (categoryName: string) =>
      dispatch({
        type: 'ADD_CATEGORY',
        payload: {
          name: categoryName,
          items: [],
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);
