// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories


import React from 'react';

import App from './App.js';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App',
  component: App,
}

export const Default = () => <App primary />;
Default.storyName = 'I am the default';
