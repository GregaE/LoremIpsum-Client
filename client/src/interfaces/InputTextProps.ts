export interface TextInputProps {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  callback?: (e: Event)=>void;
}