export interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

export interface ButtonProps {
  label: string;
  type: string;
  onClick: () => void;
}
