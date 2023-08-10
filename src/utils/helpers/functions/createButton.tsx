import Button from '../../../components/button';

export default function createButton(label: string): JSX.Element {
  return (
    <Button
      label={label}
      type="submit"
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
}
