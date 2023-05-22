import Headers from '../components/Headers';
import WrapperImage from '../components/WrapperImage';
import illustrationAbout from '../assets/images/illustration/Illustration_about.png';

const AboutPage = () => {
  return (
    <section className="homepage">
      <div className="homepage__wrapper">
        <Headers
          heading="About DigiForum"
          description="DigiForum is a discussion platform with anyone, anywhere, and you can say anything #FreeSpeech"
        />

        <WrapperImage
          src={illustrationAbout}
          alt="illustration home page"
        />
      </div>
    </section>
  );
};

export default AboutPage;
