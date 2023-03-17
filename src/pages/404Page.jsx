import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <section className="NotfoundPage">
      <picture className="not__image-wrapper">
        <source
          media="(min-width: 750px)"
          srcSet="/images/illustration/Error_Element_desktop.svg"
          alt="notfound illustration desktop"
        />
        <img
          src="/images/illustration/Error_Element_mobile.svg"
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
