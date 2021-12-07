import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { TrashIcon, PencilIcon } from '@heroicons/react/solid';
import {
  Categories,
  EnumCategories,
} from '../../../../../../interfaces/CategoriesInterface';
import {
  selectItem,
  unselectItem,
} from '../../../../../../store/actions/pdfActions';
import { useTypedSelector } from '../../../../../../utils/useTypeSelector';
import { toggleModal } from '../../../../../../store/actions/toggleModal';

export default function CategoryItem({
  item,
  categoryName,
}: {
  item: Categories;
  categoryName: string;
}) {
  const dispatch = useDispatch();
  const pdfItems = useTypedSelector(state => state.pdf);
  const {
    languages: { languages },
    certificates: { certificates },
    skills: { skills },
    education: { education },
    experience: { experience },
  } = useTypedSelector(state => state);

  const [selected, toggleSelection] = useState(
    pdfItems &&
      pdfItems
        .find(pdfI => pdfI.name === categoryName)!
        .pdf.some(pd => pd.id === item.id)
  );

  // function to handle edit option
  const handleEdit = () => {
    dispatch(toggleModal(true, categoryName));
    switch (categoryName) {
      case 'Certificates':
        const res = certificates.find(
          certificate => certificate.id === item.id
        );
        
        dispatch({type: 'FETCH_DATA',  endpoint:'/certificates', method: 'GET', id: item.id, dispatch: 'UPDATE_CERTIFICATES'});
        break;

    //   case 'Education':
    //     dispatch({type: 'FETCH_DATA',  endpoint:'/education', method: 'PUT',id: item.id, dispatch: 'UPDATE_EDUCATION'})
    //     break;

    //   case 'Languages':
    //     dispatch({type: 'FETCH_DATA',  endpoint:'/languages', method: 'PUT',id: item.id, dispatch: 'UPDATE_LANGUAGES'})
    //     break;

    //   case 'Skills':
    //     dispatch({type: 'FETCH_DATA',  endpoint:'/skills', method: 'PUT',id: item.id, dispatch: 'UPDATE_SKILLS'})
    //     break;

    //   case 'Work Experience':
    //     dispatch({type: 'FETCH_DATA',  endpoint:'/workExperience', method: 'PUT',id: item.id, dispatch: 'UPDATE_EXPERIENCE'})
    //     break;

    //   default:
    //     break;
    }
  }

  // function to handle delete option
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      switch (categoryName) {
        case 'Certificates':
          dispatch({type: 'FETCH_DATA',  endpoint:'/certificates', method: 'DELETE',id: item.id, dispatch: 'DELETE_CERTIFICATE'})
          break;

        case 'Education':
          dispatch({type: 'FETCH_DATA',  endpoint:'/education', method: 'DELETE',id: item.id, dispatch: 'DELETE_EDUCATION'})
          break;

        case 'Languages':
          dispatch({type: 'FETCH_DATA',  endpoint:'/languages', method: 'DELETE',id: item.id, dispatch: 'DELETE_LANGUAGE'})
          break;

        case 'Skills':
          dispatch({type: 'FETCH_DATA',  endpoint:'/skills', method: 'DELETE',id: item.id, dispatch: 'DELETE_SKILL'})
          break;

        case 'Work Experience':
          dispatch({type: 'FETCH_DATA',  endpoint:'/workExperience', method: 'DELETE',id: item.id, dispatch: 'DELETE_EXPERIENCE'})
          break;

        default:
          break;
      }
    }
  }

  //Manipulate here
  const itemName = () => {
    if (item.name) return item.name;
    if (item.language_name) return item.language_name;
    if (item.job_title) return item.job_title;
    if (item.degree) return item.degree;
  };

  const handleSelection = () => {
    selected
      ? dispatch(unselectItem(categoryName, item.id))
      : dispatch(selectItem(categoryName, item.id));
    toggleSelection(!selected);
  };

  return (
    <div>
    <motion.div
      key="5" /// needs to pass actual key
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: '40px' }}
      transition={{ type: 'tween' }}
      exit={{ opacity: 0, height: '0px' }}
      className="item-container"
      >
      <div className="group flex items-center flex-row w-full ">
        <div
          onClick={() => handleSelection()}
          className="m-1 flex p-1 w-full cursor-pointer"
        >
          <i
            className={`${
              selected ? 'fas' : 'far'
            } fa-check-circle m-1 cursor-pointer`}
          ></i>
          <span className="font-normal group-hover:font-medium">
            {itemName()}
          </span>
        </div>
        {/* Delete and edit buttons */}
          <div className="flex invisible group-hover:visible">
          <button onClick={() => handleEdit()} 
            className="h-5 w-5 justify-self-end self-center cursor-pointer mr-2">
            <PencilIcon className="opacity-10 hover:opacity-100"></PencilIcon>
          </button>
          <button onClick={() => handleDelete()}
            className="h-7 w-7 p-1 justify-self-end self-center cursor-pointer mr-2 rounded-full">
            <TrashIcon className="text-danger opacity-10 hover:opacity-100"></TrashIcon>
          </button>
        </div>
      </div>
    </motion.div>
  </div>
  );
}