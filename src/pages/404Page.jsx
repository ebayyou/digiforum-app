import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <section className="NotfoundPage">
      <h1>404 : Not Found Page</h1>
      <Link to="/">go back home</Link>
    </section>
  );
};

export default NotfoundPage;
