import {ReactElement} from 'react';

import CategorySelector from './CategorySelector/CategorySelector';
import CVSelector from './CVSelector/CVSelector'
import ItemEditor from './ItemEditor/ItemEditor'

interface modalProps {
  modalIndex:number,
  toggleModal: (v:number)=>void,
}

/*
TO DO:
  If you click outside modal-content div then should toggle modal state
*/

export default function Modal(props:modalProps) {

  //Display sth based on array index
  const modalInstance:ReactElement[] = [<CVSelector/>, <CategorySelector/>, <ItemEditor/>]

  return (
    <div className="h-full w-full flex flex-col justify-center items-center absolute left-0 top-0"
      onClick={()=>props.toggleModal(0)}>
      <div id="modal-content" className="h-5/6 w-5/6 bg-primary rounded-xl">
        {modalInstance[props.modalIndex]}
      </div>
    </div>
  );
}