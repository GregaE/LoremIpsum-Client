// import { ModalInterface } from '../../interfaces/ModalInterface';
import { ActionType } from '../state_interfaces/appState';
import { Categories } from '../../interfaces/CategoriesInterface';
// // I will have to import the interfaces for every categoy
// // category item
// // and the pdf itself

// //TODO: Replace all the any types to proper type

const initialState:any[] = []

const pdfReducer = (
  state = initialState,
  {type, payload}: any
): any => {

  function categoryCheck(name:string) {
    return state.some(category => category.name === name)
  }

  switch (type) {
    case ActionType.ADD_CATEGORY:
      if(categoryCheck(payload.name)) {
        return state
      } else {
        const category = {name: payload.name, items: [...payload.items], pdf:[]}
        return [...state, category]
      }

    case ActionType.REMOVE_CATEGORY: 
      return state.filter(c => c.name !== payload.name)

    case ActionType.ADD_ITEM: {
      const newCategory = state.map(cat => {
        if(cat.name===payload.name){
          return {...cat, items:[...cat.items, payload.data]}
        }
        return cat
      })

      return newCategory
    }

    case ActionType.EDIT_ITEM: 
    {
      const editedCategory = state.map(cat => {
        if(cat.name===payload.name){
          const updatedItems = cat.items.map((item:Categories) =>{
            if(item.id === payload.itemId){
              return {...payload.data}
            }
            return item
          })
          return {...cat, items:[...updatedItems]}
        }
        return cat
      })
      return editedCategory
    }

    case ActionType.REMOVE_ITEM: 
      const removeItemState = state.map(cat => {
        if(cat.name === payload.name) {
          const newItems = cat.items.filter((item:Categories) => item.id !== payload.itemID)
          const newPdf = cat.pdf.filter((item:Categories) => item.id !== payload.itemID)
          return {...cat, items: [...newItems], pdf: [...newPdf]}
        }
        return cat;
      })
      return removeItemState;

    case ActionType.SELECT_ITEM: 
      const selectItemState = state.map(cat => {
        if(cat.name === payload.name) {
          const selectedItem = cat.items.filter((item:Categories) => item.id === payload.itemID)
          const newPdf = cat.pdf.push(selectedItem)
          return {...cat, pdf: [...newPdf]}
        }
        return cat;
      })
      return selectItemState;

    case ActionType.UNSELECT_ITEM: 
      const unselectItemState = state.map(cat => {
        if(cat.name === payload.name) {
          const newPdf = cat.pdf.filter((item:Categories) => item.id !== payload.itemID)
          return {...cat, pdf: [...newPdf]}
        }
        return cat;
      })
      return unselectItemState;

    default:
      return state;
  }
};

export default pdfReducer;