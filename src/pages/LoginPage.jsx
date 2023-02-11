import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/authComponent/LoginInput';
import TaglineBrand from '../components/authComponent/children/TaglineBrand';

const LoginPage = () => {
  const { authUser = null } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandlerLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  useEffect(() => {
    if (authUser) navigate('/');
  }, [authUser]);

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
