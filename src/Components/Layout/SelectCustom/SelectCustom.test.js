/* eslint-disable import/extensions */
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectCustom from './index.js';
import selectValues from '../../../utils/selectValues';

beforeEach(() => {
  render(
    <SelectCustom defaultValue="Select your news" options={selectValues} />
  );
});

describe('Unit test to select custom', () => {
  test('It should show a text by default', () => {
    const component = render();
    const textDefault = component.getByText(/Select your news/i);
    expect(textDefault).toBeInTheDocument();
  });

  test('Click select and the first option will be displayed', () => {
    const component = render();
    const buttonClick = component.getByRole('button', {
      name: /select/i,
    });
    fireEvent.click(buttonClick);
    const option = component.getByText(/Angular/i);
    expect(option).toBeInTheDocument();
  });
  test('Click select and the second option will be displayed', () => {
    const component = render();
    const buttonClick = component.getByRole('button', {
      name: /select/i,
    });
    fireEvent.click(buttonClick);

    const option2 = component.getByText(/Reacts/i);
    expect(option2).toBeInTheDocument();
  });
  test('Click select and the third option will be displayed', () => {
    const component = render();
    const buttonClick = component.getByRole('button', {
      name: /select/i,
    });
    fireEvent.click(buttonClick);

    const option3 = component.getByText(/Vuejs/i);
    expect(option3).toBeInTheDocument();
  });
});
