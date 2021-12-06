import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../../store/actions/toggleModal';
import { FetchCategory } from '../../../../utils/ApiService';
import { useTypedSelector } from '../../../../utils/useTypeSelector';

export default function CategorySelector() {
  const dispatch = useDispatch();

  const {
    personal_details: { userId },
  } = useTypedSelector(state => state.personal_details);

  function applyCategory(name: string, endpoint: string, dispatchType: string) {
    FetchCategory(endpoint, userId)
      .then(res => {
        dispatch({
          type: dispatchType,
          payload: res,
        });
      })
      .catch(e => console.log(e))
      .finally(() => {
        dispatch({
          type: 'ADD_CATEGORY',
          payload: {
            name: name,
            items: [],
          },
        });
        dispatch(toggleModal(false, ''));
      });
  }

  const categories: {
    name: string;
    icon: string;
    endpoint: string;
    dispatch: string;
  }[] = [
    {
      name: 'Education',
      icon: 'fas fa-user-graduate',
      endpoint: '/education',
      dispatch: 'ALL_EDUCATION',
    },
    {
      name: 'Work Experience',
      icon: 'fas fa-suitcase',
      endpoint: '/workExperience',
      dispatch: 'ALL_EXPERIENCES',
    },
    {
      name: 'Skills',
      icon: 'fas fa-toolbox',
      endpoint: '/skills',
      dispatch: 'ALL_SKILLS',
    },
    {
      name: 'Languages',
      icon: 'fas fa-globe-americas',
      endpoint: '/languages',
      dispatch: 'ALL_LANGUAGES',
    },
    {
      name: 'Certificates',
      icon: 'fas fa-award',
      endpoint: '/certificates',
      dispatch: 'ALL_CERTIFICATES',
    },
  ];

  const categoryList = categories.map(category => (
    <div
      key={category.name}
      onClick={() =>
        applyCategory(category.name, category.endpoint, category.dispatch)
      }
      className="w-56 h-40 bg-light rounded m-3 py-3 text-center flex flex-col justify-center gap-5 transform transition cursor-pointer hover:scale-105"
    >
      <i className={category.icon + ' text-4xl'}></i>
      <div className="text-2xl">{category.name}</div>
    </div>
  ));

  return <div className="w-5/6 my-10 flex flex-wrap gap-5">{categoryList}</div>;
}
