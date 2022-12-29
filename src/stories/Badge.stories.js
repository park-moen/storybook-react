import Badge from '../components/Badge';
import Image from '../components/Image';

export default {
  title: 'Component/Badge',
  component: Badge,
  argTypes: {
    count: {
      defaultValue: 10,
      control: { type: 'number' },
    },
    maxCount: {
      defaultValue: 100,
      control: { type: 'number' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    textColor: {
      control: { type: 'color' },
    },
    showZero: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = args => {
  return (
    <Badge {...args}>
      <Image src='https://picsum.photos/60' width={60} style={{ borderRadius: 8 }} />
    </Badge>
  );
};

export const dot = args => {
  return (
    <Badge dot>
      <Image src='https://picsum.photos/60' width={40} />
    </Badge>
  );
};
