import { Categories } from '../../interfaces/CategoriesInterface';

export interface PDFCategory {
  name: string;
  items: Categories[];
}

export interface PDFItem {
  name: string;
  itemID: string | undefined;
}
