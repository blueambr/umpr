import data from '/src/lib/pages/grid.json';
import Layout from '@/layout';
import Grid from '@/modules/Grid';

const GridPage = () => {
  const { content } = data;

  return (
    <>
      <Grid grid={content.content.gridContent.rows} />
    </>
  );
};

export default GridPage;
