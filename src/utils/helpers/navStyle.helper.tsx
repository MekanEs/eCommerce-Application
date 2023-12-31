import styles from '../../components/header/header.module.scss';

function isActive(el: { isActive: boolean; isPending: boolean }): string {
  return el.isActive ? styles.activeLink : styles.link;
}

export default isActive;
