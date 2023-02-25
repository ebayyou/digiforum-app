import { Link } from 'react-router-dom';
import Headers from '../components/Headers';
import WrapperImage from '../components/WrapperImage';

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage__wrapper">
        <Headers
          heading="DigiForum"
          description="Welcome to Discussion with anyone, You can say anything #FreeSpeech."
        />

        <WrapperImage
          src="/images/illustration/Illustration_home.png"
          alt="illustration home page"
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
