import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';
import TaglineBrand from '../components/TaglineBrand';

const LoginPage = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandlerLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));

    if (authUser === null) {
      return;
    }

    navigate('/');
  };

  return (
    <section className="container__section">
      <div className="left__side">
        <TaglineBrand />
      </div>

      <div className="right__side">
        <LoginInput onSubmitHandlerLogin={onSubmitHandlerLogin} />
      </div>
    </section>
  );
};

export default LoginPage;
