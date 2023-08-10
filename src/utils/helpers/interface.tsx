export interface InputProps {
  label: string;
  type?: string;
  id: string;
  placeholder: string;
  hookData: object;
  errorMessage?: string;
  isValid?: boolean;
}

export interface ButtonProps {
  label: string;
  type: string;
  onClick: () => void;
}

export interface FormFields {
  email: string;
  password: string;
}
