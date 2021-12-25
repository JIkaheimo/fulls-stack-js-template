// import { Story } from '@storybook/vue3';

import BaseButton from './BaseButton.vue';

export default {
  title: 'Base/Button',
  component: BaseButton,
};

export const Primary = () => ({
  components: { BaseButton },
  template: '<BaseButton name="asd" />',
});
