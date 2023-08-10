import Checkbox from '../../../../../components/checkbox';

export default function createDefaultBilling(
  value: boolean,
  onChange: () => void,
): JSX.Element {
  return (
    <Checkbox
      id={'set-default-billing'}
      label={'Set as default billing address'}
      value={value}
      onChange={onChange}
    />
  );
}
