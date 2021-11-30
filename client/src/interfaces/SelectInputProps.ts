export interface SelectInputProps {
  name?: string;
  className?: string;
  value?: string;
  options: number[] | string[];
  callback?: (e: React.ChangeEvent) => void;
}
