import clsx from 'clsx';
import GridColumn from './GridColumn';

const GridSection = ({ section, sectionIndex }) => {
  const sectionName = () => {
    if (!section.config) return '';
    const sectionName = section.config?.sectionName;
    if (!section.config?.sectionName) return '';
    const sectionNameDashed = sectionName.split(' ').join('-').toLowerCase();
    return sectionNameDashed;
  };

  const rowSpacingClass = () => {
    let rowSpacingClass;

    if (section.config?.rowSpacing === 'None') {
      rowSpacingClass = 'section--no-spacing';
    } else if (section.config?.rowSpacing === 'Large') {
      rowSpacingClass = 'section--large-spacing';
    }

    return rowSpacingClass || '';
  };

  return (
    <section id={sectionName()} className={clsx('section theme', rowSpacingClass())}>
      {section.hasRow ? (
        <div className="row">
          {section.editors.map((column, index) => (
            <GridColumn
              key={index}
              index={Number(sectionIndex) + index}
              column={column}
              isText={section.label === 'Text'}
            />
          ))}
        </div>
      ) : (
        section.editors.map((column, index) => (
          <GridColumn
            key={index}
            index={Number(sectionIndex) + index}
            column={column}
            isText={section.label === 'Text'}
          />
        ))
      )}
    </section>
  );
};

export default GridSection;
