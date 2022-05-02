import styles from './Title.module.scss';

const Title = ({ text, tag }) => {
  const Tag = tag;

  return <Tag className={styles.title} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default Title;
