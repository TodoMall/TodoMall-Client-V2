import React from 'react';
import { ComponentMeta, Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Buttons';

export default {
  title: 'Buttons',
  component: Button,
  argTypes: {
    variant: {
      name: 'Button Type',
      type: { name: 'string', required: true },
      description: 'variant color',
      control: 'radio',
      options: ['Primary', 'Warning', 'Bordered', 'Cancel', 'Disabled'],
    },
    size: {
      name: 'Button Size',
      type: { name: 'string', required: true },
      description: 'size',
      control: 'radio',
      options: ['Small', 'Large'],
    },
    rounder: {
      name: 'Button Border Rounder',
      type: { name: 'boolean', required: true },
      description: 'rounder',
      control: 'radio',
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args}>제출하기</Button>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'Primary',
  size: 'Large',
  rounder: false,
};

export const Bordered = Template.bind({});

Bordered.args = {
  variant: 'Bordered',
  size: 'Large',
  rounder: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  variant: 'Disabled',
  size: 'Large',
  rounder: false,
};

export const Warning = Template.bind({});

Warning.args = {
  variant: 'Warning',
  size: 'Large',
  rounder: false,
};

export const Cancel = Template.bind({});

Cancel.args = {
  variant: 'Cancel',
  size: 'Large',
  rounder: false,
};
