import styles from './Description.module.scss';

const Description = ({ text }) => <div className={styles.description} dangerouslySetInnerHTML={{ __html: text }} />;

export default Description;
