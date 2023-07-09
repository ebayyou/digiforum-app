import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RegisterInput from './RegisterInput';
import store from '../../states/index';

describe('RegisterInput Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterInput onSubmitHandlerRegister={() => {}} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should handle nameInput typing correctly', () => {
    // arrange
    const nameInput = screen.getByPlaceholderText('Ebayyou Anggoro');

    // action
    userEvent.type(nameInput, 'ebayyouanggoro');

    // assert
    expect(nameInput).toHaveValue('ebayyouanggoro');
  });

  it('should handle email typing correctly', () => {
    // arrange
    const emailInput = screen.getByPlaceholderText('Example@gmail.com');

    // action
    userEvent.type(emailInput, 'ebayyou@gmail.com');

    // assert
    expect(emailInput).toHaveValue('ebayyou@gmail.com');
  });

  it('should handle password typing correctly', () => {
    // arrange
    const passwordInput = screen.getByPlaceholderText('Your password is...');

    // action
    userEvent.type(passwordInput, 'ebayyou123');

    // assert
    expect(passwordInput).toHaveValue('ebayyou123');
  });
});
