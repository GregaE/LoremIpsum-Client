import { ActionType } from '../state_interfaces/appState';
import { PDF } from '../../interfaces/PdfInterface';
import { PDFCategory, PDFItem } from '../state_interfaces/PdfState';

const initialState: PDF[] = [];

const pdfReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: PDFCategory & PDFItem }
): PDF[] => {
  function categoryCheck(name: string) {
    return state.some(category => category.name === name);
  }

  switch (type) {
    case ActionType.ADD_CATEGORY:
      if (categoryCheck(payload.name)) {
        return state;
      } else {
        const category = {
          name: payload.name,
          items: [...payload.items],
          pdf: [],
        };
        return [...state, category];
      }

    case ActionType.REMOVE_CATEGORY:
      return state.filter(c => c.name !== payload.name);

    case ActionType.SELECT_ITEM:
      const selectItemState = state.map(cat => {
        if (cat.name === payload.name) {
          const selectedItem = cat.items.filter(
            item => item.id === payload.itemID
          )[0];
          cat.pdf.push(selectedItem);
          return cat;
        }
        return cat;
      });
      return selectItemState;

    case ActionType.UNSELECT_ITEM:
      const unselectItemState = state.map(cat => {
        if (cat.name === payload.name) {
          const newPdf = cat.pdf.filter(item => item.id !== payload.itemID);
          return { ...cat, pdf: [...newPdf] };
        }
        return cat;
      });
      return unselectItemState;

    default:
      return state;
  }
};

export default pdfReducer;