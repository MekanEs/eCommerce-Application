import styles from '../developer.module.scss';
import developerPhoto from '../../../../assets/img/png/novikova.png';

const DeveloperNovikova = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Elizaveta Novikova</h3>
        <div className={styles.roles}>
          <p>developer</p>
          <p>designer</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles['developer-photo']}>
          <img src={developerPhoto} alt="E. Novikova" />
        </div>
        <div className={styles['about-developer']}>
          <div className={styles.biography}>
            <h5>Biography:</h5>
            <p>
              Elizaveta is an aspiring front-end developer with a background in
              physical education and sports. She began her career in the fitness
              industry and briefly tried her hand as a personal trainer but
              didn't stay there for long. Later on, she discovered web design
              and worked as a freelancer but encountered challenges in the
              direct implementation of her projects. This led her to the field
              of front-end development. She gained education and experience in
              this domain through the RS School program. In addition, Elizaveta
              is proficient in design tools such as Figma and Photoshop, among
              others. In front-end development, she highly values the ability to
              control the details of the development process and the immediate
              visibility of the results of her work.
            </p>
          </div>
          <div className={styles.contribution}>
            <h5>Contribution to the project:</h5>
            <p>
              Elizaveta made a significant contribution to the project, saving
              time for other developers. She designed the layouts, providing a
              ready foundation for our work. Elizaveta also collected
              information about products, selected photos, filled out product
              cards on Commercetools, and added discounts. In addition,
              Elizaveta fully implemented the login and registration pages,
              integrating the «React Hook Form» library. She also implemented
              the «About Us» page and the product card page, integrating the
              «Swiper» slider. She is always ready to help other team members.
              Her active participation and suggestions during team meetings have
              improved the project.
            </p>
          </div>
          <div className={styles.github}>
            <h5>Github:</h5>
            <a target="_blank" href="https://github.com/kotangenss">
              {'kotangenss'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperNovikova;
