import { Link } from 'react-router-dom';
import errorElementDesktop from '../assets/images/illustration/Error_Element_desktop.svg';
import errorElementMobile from '../assets/images/illustration/Error_Element_mobile.svg';

const NotfoundPage = () => {
  return (
    <section className="NotfoundPage">
      <picture className="not__image-wrapper">
        <source
          media="(min-width: 750px)"
          srcSet={errorElementDesktop}
          alt="notfound illustration desktop"
        />
        <img
          src={errorElementMobile}
          alt="notfound illustration mobile"
        />
      </picture>

      <p className="not__desk">
        sorry #PeopleSpeech, we can&apos;t find the page you&apos;re looking for...
      </p>

      <Link
        className="not__btn"
        to="/"
      >
        Go back Home
      </Link>
    </section>
  );
};

export default NotfoundPage;
