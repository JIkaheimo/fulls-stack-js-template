import { fireEvent, within } from '@storybook/testing-library';
import { Story } from '@storybook/vue3';
import PureInboxScreen from './PureInboxScreen.vue';

export default {
  component: PureInboxScreen,
  title: 'Inbox/PureInboxScreen',
};

const Template: Story<{ error?: boolean }> = (args) => ({
  components: { PureInboxScreen },

  setup() {
    return {
      args,
    };
  },

  template: '<PureInboxScreen v-bind="args" />',
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const pins = canvas.getAllByLabelText('Pin Task');
  await fireEvent.click(pins[0]);
  await fireEvent.click(pins[1]);
};
