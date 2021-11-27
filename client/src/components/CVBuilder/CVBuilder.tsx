import React, {useState} from 'react';

import Selector from './Selector/Selector'
import Builder from './Builder/Builder'
import Modal from './Modal/Modal';

export default function CVBuilder() {

  /*
  Once you click here:
    We fetch data of user cvs (in case he click from CVs)
    At the same time we should have state for toggleModal and also know which one are we clicking

  User path:
    You click CV Builder from home, land in selector 
    (we have to set as default the selector displayer)
    If you click to new cv (change displayer)

    If you click from previous we have to toggleModal('cvselector')
    when you click one cv you change displayer to builder and fetch data from selected cv
    If you click outside the modal just toggleModal()

    Inside Builder component we have 2 options to toggleModal
    1) You click the "add category btn" should trigger toggleModal('categorySelector')
    2) You click the ··· from category item, should trigger toggleModal('itemEditor') and should pass sth else
      like category id, to know which form should open...
  */

  const [displayerIndex, setDisplayerIndex] = useState(0)
  const [modalToggle, setModalToggle] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const displayModal = (v:number) => {
    setModalToggle(!modalToggle)
    setModalIndex(v)
  }

  const displayerChange = () => {
    displayerIndex === 0 ? setDisplayerIndex(1) : setDisplayerIndex(0)
  }

  //Display sth based on array index
  const displayer: React.ReactElement[] = [<Selector changeSelector={displayerChange} toggleModal={displayModal}/>,<Builder toggleModal={displayModal}/>]
  //Display modal by switch
  const modal = modalToggle ? <Modal modalIndex={modalIndex} toggleModal={displayModal}/> :null

  return (
    <div className="h-full relative">
      {displayer[displayerIndex]}
      {modal}
    </div>
  );
}