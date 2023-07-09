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

  it('should handle email typing correctly', () => {
    // Arrange
    const emailInput = screen.getByPlaceholderText('Example@gmail.com');

    // Action
    userEvent.type(emailInput, 'ebayyou@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('ebayyou@gmail.com');
  });

  it('should handle password typing correctly', () => {
    // Arrange
    const passwordInput = screen.getByPlaceholderText('Your password is...');

    // Action
    userEvent.type(passwordInput, 'ebayyou123');

    // Assert
    expect(passwordInput).toHaveValue('ebayyou123');
  });
});
