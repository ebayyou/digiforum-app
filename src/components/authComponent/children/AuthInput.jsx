import PropTypes from 'prop-types';

const AuthInput = ({ onChangeInput, value, typeInput, placeholder }) => {
  return (
    <div className="auth__group">
      <label
        className="auth__label"
        htmlFor={typeInput === 'text' ? 'name' : typeInput}
      >
        <h4>{typeInput === 'text' ? 'name' : typeInput}</h4>
        <input
          className="auth__input"
          onChange={onChangeInput}
          value={value}
          type={typeInput}
          name={typeInput === 'text' ? 'name' : typeInput}
          id={typeInput === 'text' ? 'name' : typeInput}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

AuthInput.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AuthInput;
