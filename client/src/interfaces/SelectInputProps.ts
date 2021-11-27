export interface SelectInputProps {
    name?: string;
    className?: string;
    options:number[] | string[]
    callback?: ()=>void;
  }