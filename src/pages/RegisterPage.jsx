import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRequestRegisterUser } from '../states/users/action';
import RegisterInput from '../components/authComponent/RegisterInput';
import TaglineBrand from '../components/authComponent/children/TaglineBrand';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandlerRegister = ({ name, email, password }) => {
    dispatch(asyncRequestRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <section className="container__section">
      <div className="left__side">
        <TaglineBrand />
      </div>

      <div className="right__side">
        <RegisterInput onSubmitHandlerRegister={onSubmitHandlerRegister} />
      </div>
    </section>
  );
};

export default RegisterPage;
