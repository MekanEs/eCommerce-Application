import styles from '../../components/header/Header.module.scss';

function isActive(el: { isActive: boolean; isPending: boolean }): string {
  return el.isActive ? styles.activeLink : '';
}

export default isActive;
