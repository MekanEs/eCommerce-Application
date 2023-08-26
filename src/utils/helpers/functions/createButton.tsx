import Button from '../../../components/button';

export default function createButton(
  label: string,
  className?: string,
  disabled?: boolean,
): JSX.Element {
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
}
