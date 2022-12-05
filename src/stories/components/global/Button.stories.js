import Button from '../../../components/global/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  primary: true,
  large: false,
  rounder: false,
  disabled: false,
  border: false,
  text: '신청하기',
};
