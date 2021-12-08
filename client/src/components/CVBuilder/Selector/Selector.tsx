import { useDispatch } from 'react-redux';
import { showCvBuilder } from '../../../store/actions/showBuilder';
import { toggleModal } from '../../../store/actions/toggleModal';

/*
TO DO:
  Click on first div change the selector state, so it doesnt show selector but builder component
  Click on second div toggle the modal state and shows the CVSSelector component
*/

export default function Selector() {
  const dispatch = useDispatch()
  
  return (
    <div className="h-full my-auto flex flex-wrap gap-10 p-8 items-center justify-center">
      <div
        className="bg-light w-80 h-96 flex flex-col justify-center items-center item-container cursor-pointer shadow-lg transform transition hover:scale-110"
        // onClick={()=> dispatch(showCvBuilder(true))}
        onClick={()=> dispatch({ type: 'SHOW_CVBUILDER', payload: true})}
      >
        <i className="fas fa-plus-circle fa-6x"></i>
      </div>
      <div
        className="bg-light w-80 h-96 flex justify-center items-center item-container cursor-pointer shadow-lg transform transition hover:scale-110"
        onClick={()=>dispatch(toggleModal(true, 'CVs'))}
      >
        <i className="far fa-file fa-6x"></i>
      </div>
    </div>
  );
}

