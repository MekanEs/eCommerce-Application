import Checkbox from '../../../../../../components/checkbox';

export default function createDefaultShipping(
  value: boolean,
  onChange: () => void,
): JSX.Element {
  return (
    <Checkbox
      id={'set-default-shipping'}
      label={'Set as default shipping address'}
      value={value}
      onChange={onChange}
    />
  );
}
