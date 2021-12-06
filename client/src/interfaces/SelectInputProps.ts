export interface SelectInputProps {
  name?: string;
  className?: string;
  value?: string;
  options: number[] | string[];
  default?: string;
  callback?: (e: React.ChangeEvent) => void;
}
