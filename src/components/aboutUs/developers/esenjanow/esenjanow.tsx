import styles from '../developer.module.scss';
import developerPhoto from '../../../../assets/img/png/mekan.png';

const DeveloperEsenjanow = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Mekan Esenjanow</h3>
        <div className={styles.roles}>
          <p>developer</p>
          <p>team leader</p>
        </div>
      </div>
      <div className={styles.body + ' ' + styles['middle-dev']}>
        <div className={styles['about-developer']}>
          <div className={styles.biography}>
            <h5>Biography:</h5>
            <p>
              Mekan Esenjanow, a 26-year-old junior frontend developer.
              Passionate about building modern and user-friendly web
              experiences, loves diving into the world of code and turning ideas
              into reality.
            </p>
          </div>
          <div className={styles.contribution}>
            <h5>Contribution to the project:</h5>
            <p>
              Mekan played a pivotal role in our project, leveraging his
              expertise to enhance user navigation and experience. He skillfully
              implemented a robust routing and navigation system that seamlessly
              guides users through our web platform, ensuring they find what
              they need effortlessly. In the realm of the catalog page, Mekan's
              contributions shine. He meticulously designed and implemented
              advanced filtering, search, sorting, and category features,
              elevating the user's ability to explore our products with ease.
              His attention to detail and commitment to an intuitive user
              interface have set a new standard for our project. Esenjanow's
              passion for frontend development is not just limited to code; it's
              a driving force that propels our project towards excellence. His
              unwavering dedication, innovative spirit, and ability to turn
              ideas into reality make him an invaluable asset to our team. His
              enthusiasm during team meetings continues to fuel our project's
              progress, making Mekan a true standout in the world of web
              development.
            </p>
          </div>
          <div className={styles.github}>
            <h5>Github:</h5>
            <a target="_blank" href="https://github.com/mekanes">
              {'mekanes'}
            </a>
          </div>
        </div>
        <div className={styles['developer-photo']}>
          <img src={developerPhoto} alt="M. Esenjanow" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperEsenjanow;
