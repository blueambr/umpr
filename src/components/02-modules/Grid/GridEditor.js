import Title from '@/elements/Title';

const GridEditor = ({ editor }) => {
  const { alias } = editor;

  return <>{alias === 'rte' && <Title text={editor.viewModel.text} tag="div" />}</>;
};

export default GridEditor;
