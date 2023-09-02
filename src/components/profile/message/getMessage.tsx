import styles from './getMessage.module.scss';

type CreateMessage = {
  Message: string;
  className: string;
};

const CreateMessage: React.FC<CreateMessage> = ({
  Message,
  className,
}): JSX.Element => {
  return (
    <div>
      <p className={`${styles['form-message']} ${styles[className]}`}>
        {Message}
      </p>
    </div>
  );
};

export default CreateMessage;
