export interface TextInputProps {
  label?: string;
  type?: string;
  name?: string;
  value: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  length?: number;
  callback?: (e: React.ChangeEvent) => void;
}
