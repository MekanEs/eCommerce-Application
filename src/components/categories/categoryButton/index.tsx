import { categoryType } from '../../../types/catalogTypes';
import cx from 'classnames';

type categoryButtonPropsType = {
  el: categoryType | null | undefined;
  styles: {
    readonly [key: string]: string;
  };
  activeCategory: categoryType;
  activeAncestor: categoryType | undefined | null;
  callback: (el: categoryType) => void;
};

const CategoryButton: React.FC<categoryButtonPropsType> = ({
  el,
  styles,
  activeCategory,
  activeAncestor,
  callback,
}) => {
  if (!el) {
    return <></>;
  }
  return (
    <div
      onClick={(): void => callback(el)}
      className={cx(
        styles.category,
        el.name === activeCategory.name ||
          el.name === (activeAncestor && activeAncestor.name)
          ? styles.activeCategory
          : '',
      )}
      data-id={el.id}
    >
      {el.name}
    </div>
  );
};

export default CategoryButton;
