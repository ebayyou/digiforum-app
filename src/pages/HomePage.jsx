import { Link } from 'react-router-dom';
import Headers from '../components/Headers';
import WrapperImage from '../components/WrapperImage';
import illustrationHomeMobile from '../assets/images/illustration/Illustration-home_mobile.svg';
import illustrationHomeDesktop from '../assets/images/illustration/Illustration-home_desktop.svg';

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage__wrapper">
        <Headers
          heading="DigiForum"
          description="Welcome to Discussion with anyone, You can say anything #FreeSpeech."
        />

        <WrapperImage
          alt="illustration home page mobile"
          altSet="illustration home page desktop"
          src={illustrationHomeMobile}
          srcSet={illustrationHomeDesktop}
        />
      </div>

      <Link
        className="homepage__btn"
        to="/threads"
      >
        Go to #Threads
      </Link>
    </section>
  );
};

export default HomePage;
