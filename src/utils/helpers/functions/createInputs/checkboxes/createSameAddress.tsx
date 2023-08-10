import Checkbox from '../../../../../components/checkbox';

export default function createSameAddress(
  value: boolean,
  onChange: () => void,
): JSX.Element {
  return (
    <Checkbox
      id={'set-same-address'}
      label={'Use the same address for both billing and shipping'}
      value={value}
      onChange={onChange}
    />
  );
}
