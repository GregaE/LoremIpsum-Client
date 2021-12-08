export interface SelectInputProps {
  name?: string;
  className?: string;
  value?: string;
  options: number[] | string[];
  default?: string;
  label?: string;
  callback?: (e: React.ChangeEvent) => void;
}
