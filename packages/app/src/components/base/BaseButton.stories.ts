import { Story } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';

export default {
  title: 'Components/BaseButton',
  component: BaseButton,
};

const Template: Story = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<BaseButton />',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
