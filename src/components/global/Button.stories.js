import Button from './Button';

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
  text: '제출하기',
};

export const PrimaryLargeButton = Template.bind({});

PrimaryLargeButton.args = {
  primary: true,
  large: true,
  rounder: false,
  disabled: false,
  border: false,
  text: '제출하기',
};

export const PrimaryLargeRoundButton = Template.bind({});

PrimaryLargeRoundButton.args = {
  primary: true,
  large: true,
  rounder: true,
  disabled: false,
  border: false,
  text: '제출하기',
};

export const PrimaryBorderButton = Template.bind({});

PrimaryBorderButton.args = {
  primary: true,
  large: false,
  rounder: false,
  disabled: false,
  border: true,
  text: '제출하기',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  primary: false,
  large: false,
  rounder: false,
  disabled: true,
  border: false,
  text: '제출하기',
};
