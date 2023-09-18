import styles from '../developer.module.scss';
import developerPhoto from '../../../../assets/img/png/vadim.png';

const DeveloperVoropai = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Vadim Voropai</h3>
        <div className={styles.roles}>
          <p>developer</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles['developer-photo']}>
          <img src={developerPhoto} alt="V. Voropai" />
        </div>
        <div className={styles['about-developer']}>
          <div className={styles.biography}>
            <h5>Biography:</h5>
            <p>
              Vadim is a novice front-end developer with experience in the
              engineering field. He initially studied the Python programming
              language for backend development. Later, he decided to master
              full-stack technology, which led him into the field of front-end
              development. He gained education and experience in this field
              thanks to the RS School program. In addition, Vadim is well-versed
              in technologies such as SQL and Data Science. In front-end
              development, he highly values the immediate visibility of the
              results of his work.
            </p>
          </div>
          <div className={styles.contribution}>
            <h5>Contribution to the project:</h5>
            <p>
              Vadim successfully developed an intuitive user interface that
              allows users to seamlessly switch to edit mode, enabling them to
              update their personal information, including names, email
              addresses, and postal addresses. Furthermore, Vadim took charge of
              token validation implementation, reinforcing the application's
              security by ensuring robust user authentication. He also
              seamlessly integrated the login form with CommerceTools, providing
              users with a smooth and secure authentication process.
              Additionally, Vadim ensured the secure acquisition of
              authentication tokens, safeguarding sensitive user data. In
              addition to these technical accomplishments, Vadim enabled users
              to change their passwords easily, further improving the
              application's usability and security. Beyond his technical
              prowess, Vadim consistently demonstrated a willingness to assist
              fellow team members, making him a valuable asset to the project.
            </p>
          </div>
          <div className={styles.github}>
            <h5>Github:</h5>
            <a target="_blank" href="https://github.com/sergpet93">
              {'sergpet93'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperVoropai;
