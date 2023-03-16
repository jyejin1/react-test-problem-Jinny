// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

import { Default } from './App.stories'; //👈 Our stories imported here.
import { render, screen, fireEvent } from '@testing-library/react';
// import your story from App.stories.js

it('Check init button text', () => {
    const { getByRole } = render(<Default />);
      const button = getByRole("button") 
    expect(button).toHaveTextContent('click me');
  });

  it('Check button text change when button click', () => {
    const { getByRole } = render(<Default />);
    const button = getByRole("button")
		fireEvent.click(button);
    expect(button).toHaveTextContent('thanks');
  });