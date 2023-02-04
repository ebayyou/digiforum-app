import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <section className="NotfoundPage">
      <h1>404 : Not Found Page</h1>

      <div className="NotfoundPage__group">
        <Link className="link" to="/login">
          go to login
        </Link>
        <div className="slash" />
        <Link className="link" to="/">
          go back home
        </Link>
      </div>
    </section>
  );
};

export default NotfoundPage;
