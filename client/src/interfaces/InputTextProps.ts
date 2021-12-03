export interface TextInputProps {
  label?: string;
  type?: string;
  name?: string;
  value: string;
  placeholder?: string;
  callback?: (e: React.ChangeEvent) => void;
}
