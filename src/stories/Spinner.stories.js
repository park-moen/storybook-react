import Spinner from '../components/Spinner';

export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = args => {
  return <Spinner {...args} />;
};
