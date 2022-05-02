import Description from '@/elements/Description';
import Title from '@/elements/Title';
import styles from './Card.module.scss';

const Card = ({ data }) => {
  const { href, title, desc } = data;

  return (
    <a className={styles.card} href={href} target="_blank" rel="noopener noreferrer">
      <div className="block-sm">
        <Title text={title.text} tag={title.tag} />
      </div>
      <div className="block-sm">
        <Description text={desc} />
      </div>
    </a>
  );
};

export default Card;
