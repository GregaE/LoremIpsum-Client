import { connect, useDispatch } from 'react-redux';
import { toggleModal } from '../../../../store/actions/toggleModal';

function CategorySelector({ addCategory }: any) {
  const dispatch = useDispatch();

  function addCategoryName(name: string) {
    addCategory(name);
    dispatch(toggleModal(false, ''));
  }

  const categories: { name: string; icon: string }[] = [
    { name: 'Education', icon: 'fas fa-user-graduate' },
    { name: 'Work Experience', icon: 'fas fa-suitcase' },
    { name: 'Skills', icon: 'fas fa-toolbox' },
    { name: 'Languages', icon: 'fas fa-globe-americas' },
    { name: 'Certificates', icon: 'fas fa-award' },
  ];

  const categoryList = categories.map(
    (category: { name: string; icon: string }) => (
      <div
        key={category.name}
        onClick={() => addCategoryName(category.name)}
        className="w-56 h-40 bg-light rounded m-3 py-3 text-center flex flex-col justify-center gap-5 transform transition cursor-pointer hover:scale-105"
      >
        <i className={category.icon + ' text-4xl'}></i>
        <div className="text-2xl">{category.name}</div>
      </div>
    )
  );

  return <div className="w-5/6 my-10 flex flex-wrap gap-5">{categoryList}</div>;
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
