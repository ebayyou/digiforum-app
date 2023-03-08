/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
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

  it('should handle nameInput typing correctly', async () => {
    // arrange
    const nameInput = await screen.getByPlaceholderText('Ebayyou Anggoro');

    // action
    await userEvent.type(nameInput, 'ebayyouanggoro');

    // assert
    expect(nameInput).toHaveValue('ebayyouanggoro');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    const emailInput = await screen.getByPlaceholderText('Example@gmail.com');

    // action
    await userEvent.type(emailInput, 'ebayyou@gmail.com');

    // assert
    expect(emailInput).toHaveValue('ebayyou@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    const passwordInput = await screen.getByPlaceholderText('Your password is...');

    // action
    await userEvent.type(passwordInput, 'ebayyou123');

    // assert
    expect(passwordInput).toHaveValue('ebayyou123');
  });
});
