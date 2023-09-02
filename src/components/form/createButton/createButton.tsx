import Button from '../../button';

type CreateButton = {
  label: string;
  className?: string;
  disabled?: boolean;
};

export const CreateButton: React.FC<CreateButton> = ({
  label,
  className,
  disabled,
}): JSX.Element => {
  return (
    <Button
      label={label}
      type="submit"
      className={className}
      disabled={disabled}
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};
