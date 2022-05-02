import clsx from 'clsx';
import GridEditor from './GridEditor';

const GridColumn = ({ column, isText, index }) => {
  const colWidthClass = () => {
    return `is-${column.sizeMd}-tablet`;
  };

  const isTextClass = () => {
    return isText ? 'is-offset-2-tablet' : '';
  };

  return (
    <div>
      <GridEditor editor={column} class={clsx(!column.hasColumns && `is-12-mobile ${colWidthClass} ${isTextClass}`)} />
    </div>
  );
};

export default GridColumn;
