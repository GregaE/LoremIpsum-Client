import React from 'react';

import Selector from './Selector/Selector'
import Builder from './Builder/Builder'
import Modal from './Modal/Modal';

export default function CVBuilder() {

  //Display sth based on array index
  const displayer: React.ReactElement[] = [<Selector/>,<Builder/>]
  //Display modal by switch
  const modal:any = true ? <Modal/> : null

  return (
    <div className="h-full">
      {displayer}
      {modal}
    </div>
  );
}