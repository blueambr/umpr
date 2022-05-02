import data from '/src/lib/pages/index.json';
import Title from './index';

export default {
  title: 'Elements/Title',
  component: Title,
};

export const H1 = () => <Title text={data.welcome.title.text} tag={data.welcome.title.tag} />;
H1.storyName = 'h1';

export const H3 = () => <Title text="h3 example" tag="h3" />;
H3.storyName = 'h3';

export const P = () => <Title text={data.welcome.subtitle.text} tag={data.welcome.subtitle.tag} />;
P.storyName = 'p';
