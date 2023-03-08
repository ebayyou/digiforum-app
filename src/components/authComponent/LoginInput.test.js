/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import store from '../../states/index';
import LoginInput from './LoginInput';

describe('LoginInput Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginInput onSubmitHandlerLogin={() => {}} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    const emailInput = await screen.getByPlaceholderText('Example@gmail.com');

    // Action
    await userEvent.type(emailInput, 'ebayyou@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('ebayyou@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    const passwordInput = await screen.getByPlaceholderText('Your password is...');

    // Action
    await userEvent.type(passwordInput, 'ebayyou123');

    // Assert
    expect(passwordInput).toHaveValue('ebayyou123');
  });
});
