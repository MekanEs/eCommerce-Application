import styles from './generalInfo.module.scss';
import collaboration from '../../assets/img/svg/collaboration.svg';
import rssLogo from '../../assets/img/svg/rss_logo.svg';

const AboutGeneralInfo = (): JSX.Element => {
  return (
    <div className={styles['general-info']}>
      <div className={styles.collaboration}>
        <div className={styles['collaboration-info']}>
          <h3>collaboration</h3>
          <div>
            <p>
              Our small but effective team of developers consists of three
              people and has achieved remarkable results in creating our online
              store project. We regularly conduct video meetings, meeting two to
              three times a week, where we discuss current tasks, solve emerging
              issues, and evenly distribute the workload.
            </p>
            <p>
              It's important to note that our team remains in constant
              communication even outside of formal video conferences. We have a
              shared chat on Telegram, where we exchange ideas, information, and
              respond instantly to changes. Additionally, we actively use
              private messages for detailed discussions and the prompt
              resolution of specific issues.
            </p>
            <p>
              A key aspect of our collaboration is mutual support. We are always
              ready to assist each other during challenging moments and share
              our experiences, creating an atmosphere of trust that contributes
              to the successful outcomes of our online store project.
            </p>
          </div>
        </div>
        <div className={styles['collaboration-image']}>
          <img src={collaboration} alt="collaboration" />
        </div>
      </div>
      <div className={styles['educational-program']}>
        <h3>our educational program</h3>
        <div>
          <p>
            RS School is an educational program organized by The Rolling Scopes
            developer community since 2013. The core idea of RS School is that
            education should be accessible to everyone, regardless of age,
            professional status, or place of residence. In RS School, education
            is entirely free of charge. The main instructors and trainers are
            experienced front-end and JavaScript developers from various parts
            of the world and different companies. They are ready to share their
            knowledge and expertise, helping students explore the world of web
            development.
          </p>
          <p>
            The principle of RS School is "Openness and Passing Knowledge
            Forward." All educational materials and the program's platform are
            publicly available on GitHub and YouTube. What's particularly
            important is that RS School students who have received free
            education are invited to return in the future as mentors to pass on
            their knowledge to the next generation of students.
          </p>
          <p>
            RS School offers a variety of courses, including JavaScript,
            front-end development, as well as AWS (Amazon Web Services) courses.
            These courses are available online, making learning highly flexible
            and convenient for all who are interested. Join RS School and dive
            into the world of web development, where education is a powerful
            tool for self-improvement and a successful career.
          </p>
        </div>
        <div className={styles['educational-image']}>
          <a target="_blank" href="https://rs.school/">
            {' '}
            <img src={rssLogo} alt="rss logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutGeneralInfo;
