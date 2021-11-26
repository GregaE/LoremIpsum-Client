import React from 'react';

import CategorySelector from './CategorySelector/CategorySelector';
import CVSelector from './CVSelector/CVSelector'
import ItemEditor from './ItemEditor/ItemEditor'

export default function Modal() {

  //Display sth based on array index
  const modalInstance:any = [<CategorySelector/>, <CVSelector/>, <ItemEditor/>]

  return (
    <div>
      {modalInstance}
    </div>
  );
}