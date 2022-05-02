import Card from './index';

export default {
  title: 'Modules/Card',
  component: Card,
};

export const Default = () => (
  <Card
    data={{
      href: 'https://nextjs.org/docs',
      title: {
        text: 'Documentation',
        tag: 'h3',
      },
      desc: '<p>Find in-depth information about Next.js features and API.</p>',
    }}
  />
);
Default.storyName = 'Card';
