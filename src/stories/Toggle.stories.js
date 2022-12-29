import Toggle from '../components/Toggle';

export default {
  title: 'Component/Toggle',
  component: Toggle,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = args => {
  return <Toggle {...args} />;
};
