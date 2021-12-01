// import { ModalInterface } from '../../interfaces/ModalInterface';
import { ActionType } from '../state_interfaces/appState';
// // I will have to import the interfaces for every categoy
// // category item
// // and the pdf itself

// //TODO: Replace all the any types to proper type

const initialState:any[] = []

const pdfReducer = (
  state = initialState,
  {type, payload}: any
): any => {

  function categoryCheck(id:string) {
    const oldState = [...state];
    const categoryList = []
    for (const category of oldState) {
      categoryList.push(category.id)
    }
    return categoryList.includes(id)
  }

  switch (type) {
    case ActionType.ADD_CATEGORY:
      if(categoryCheck(payload.categoryID)) {
        return state
      } else {
        const category = {id: payload.categoryID, items: payload.items, pdf:[]}
        return [...state, category]
      }

    case ActionType.REMOVE_CATEGORY: 
      if(categoryCheck(payload)) {
        const newState = state.filter(c => c.id !== payload.categoryID)
        return newState
      } else {
        return state
      }

    case ActionType.ADD_ITEM: 
      return {

      };

    case ActionType.EDIT_ITEM: 
      return {
          
      };

    case ActionType.REMOVE_ITEM: 
      return {
          
      };

    case ActionType.SELECT_ITEM: 
      return {
          
      };

    case ActionType.UNSELECT_ITEM: 
      return {

      };

    default:
      return state;
  }
};

export default pdfReducer;


/* PDF Reducer Test
  const initialState: any = []

  const finalState: any = [
    {id: 'category_string',
    items: [{
      id: 'category_string + name_string',
      name: 'name_string',
      data: {object}
      },
      {
      id: 'category_string + name_string',
      name: 'name_string',
      data: {object}
    }],
    pdf: [{
      id: 'category_string + name_string',
      name: 'name_string',
      data: {object}
    }]
    },
  ]
*/

export {}