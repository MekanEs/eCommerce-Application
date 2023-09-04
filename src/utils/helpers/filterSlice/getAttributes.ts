import {
  materialtype,
  wheelSizeType,
} from '../../../store/productFilter/productFilter.slice';
import { isKey } from '../isKeyOfObj';

export const getAttributes = (obj: materialtype | wheelSizeType): string[] => {
  const res: string[] = [];
  for (const key in obj) {
    if (isKey<materialtype | wheelSizeType>(key)) {
      if (obj[key] === true) {
        res.push(key);
      }
    }
  }
  return res;
};
