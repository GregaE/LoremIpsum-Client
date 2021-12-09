import { useDispatch, connect } from 'react-redux';
import { Categories } from '../../../interfaces/CategoriesInterface';
import { PDF } from '../../../interfaces/PdfInterface';
import { setTemplate } from '../../../store/actions/pdfActions';
import { toggleModal } from '../../../store/actions/toggleModal';
import { FetchCategory } from '../../../utils/ApiService';
import { categoriesLookup } from '../../../utils/Lookups';
import { useTypedSelector } from '../../../utils/useTypeSelector';
import { TrashIcon, DocumentDownloadIcon } from '@heroicons/react/solid';

function CVItem({ cvId, date_created, data, page, deleteCV }: any) {
  const {
    personal_details: { userId },
  } = useTypedSelector(state => state.personal_details);

  const pdf = useTypedSelector(state => state.pdf);
  /*
  Every CV could recive the whole data of cvs as props or just send an identifier as prop from parent
  And get the data from cvs state and just Array.find(CV Identifier)
  */
  const dispatch = useDispatch();

  //TODO: This function is super ugly refactor, outsource and possibly handle data differently
  function loadSavedCV(type: string, data: PDF[]) {
    if (type === 'modal') {
      //map through the data from the DB
      data.map(pdf => {
        //use the lookup object to find matching category
        const category = categoriesLookup.find(
          category => category.name === pdf.name
        );
        //fetch data from that category and assign to the pdf.items array to render in cv builder
        FetchCategory(category!.endpoint, userId)
          .then(res => {
            pdf.items = [...res];
            pdf.pdf.map(pdfCategory => {
              //we need to handle outdated records in db and refresh it in case they have changed since
              const pdfExists = [...res].find(el => el.id === pdfCategory.id);
              if (pdfExists) {
                return { ...pdfExists };
              }
              return pdfCategory;
            });
            //also we need to udpate to global state to diplay elements of each category => TODO: if they are added from here there is no need to fetch again on click in the modal
            dispatch({ type: category!.dispatchAll, payload: res });
          })
          .catch(e => console.log(e));
      });
      //set the pdf template, open builder and close modal
      dispatch(setTemplate(data));
      dispatch({ type: 'SHOW_CVBUILDER', payload: true });
      dispatch(toggleModal(false, ''));
    }
    if (type === 'mycv') {
      console.log('Ola I am not done yet :D');
    }
  }

  function removeSavedCv(e:any, cvId:string) {
    e.stopPropagation();
    deleteCV(cvId)
  }

  

  return (
    <div
      className="m-5 w-a4md h-a4md flex flex-col flex-shrink-0 justify-center items-center shadow-lg bg-contain bg-center cursor-pointer
      relative transition transform hover:scale-105 "
      style={{
        backgroundImage: `url(https://www.myesr.org/sites/default/files/media-icons/generic/application-pdf.png)`,
      }}
      onClick={() => {
        loadSavedCV(page, JSON.parse(data));
      }}
    >
      <p className="p-10">CV Item</p>
      <p>ID {cvId}</p>
      <p>date_created {date_created}</p>
      <div className="absolute right-2 bottom-2 h-12 w-12 p-2 rounded-full bg-primary-bg
        opacity-50 hover:opacity-100"
        onClick={(e) => removeSavedCv(e,cvId)}>
        <TrashIcon/>
      </div>
      <div className="absolute left-2 bottom-2 h-12 w-12 p-2 rounded-full bg-primary-bg
        opacity-50 hover:opacity-100"
        onClick={() => console.log('This should download')}>
        <DocumentDownloadIcon/>
      </div>
    </div>
  );
}

//TODO - deal with dispatch typing
const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteCV: (cvId: string) => dispatch({
      type: 'FETCH_DATA',
      endpoint: '/savedCV',
      method: 'DELETE',
      id: cvId,
      dispatch: 'DELETE_CV'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVItem);