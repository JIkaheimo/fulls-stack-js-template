import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots';

const createNodeMock = () => document.createElement('div');

initStoryshots({
  framework: 'vue3',
  test: snapshotWithOptions(createNodeMock),
});
