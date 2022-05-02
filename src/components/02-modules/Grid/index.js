import GridSection from './GridSection';

const Grid = ({ grid }) => (
  <>
    {grid.map((section, index) => (
      <GridSection key={index} section={section} sectionIndex={index} />
    ))}
  </>
);

export default Grid;
