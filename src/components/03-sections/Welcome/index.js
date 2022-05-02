import Title from '@/elements/Title';
import Card from '@/modules/Card';
import styles from './Welcome.module.scss';

const Welcome = ({ data }) => {
  const { title, subtitle, columns } = data;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <section className={`section ${styles.head}`}>
            <div className="block">
              <Title text={title.text} tag={title.tag} />
            </div>
            <div className="block">
              <Title text={subtitle.text} tag={subtitle.tag} />
            </div>
          </section>
          <section className="section">
            <div className="columns is-centered">
              <div className="column is-four-fifths-tablet is-three-quarters-desktop is-three-fifths-widescreen">
                <div className="columns is-multiline">
                  {columns.map((column) => (
                    <div className="column is-half" key={column.key}>
                      <Card data={column} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
