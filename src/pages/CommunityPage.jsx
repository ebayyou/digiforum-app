import { MirroringScreen } from 'iconsax-react';

const CommunityPage = () => {
  return (
    <div className="Layout__children">
      <div className="CommunityPage">
        <div className="headers__page">
          <h1 className="heading__page">Top Community that you can Join & Discuss</h1>
          <p className="desc__page">
            You can join the Community you want to discuss with anyone, anywhere, and anytime.
          </p>
        </div>

        <div className="box__wrapper">
          <div className="box__group-double" />

          <div className="box__group">
            <div className="box__headers">
              <MirroringScreen
                size="32"
                color="#d1caff"
              />
              <h3 className="box__head">Nothing Community</h3>
            </div>

            <p className="box__desc">
              sorry #PeopleSpeech, community feature not yet available. but don&apos;t worry, this
              feature is being worked on by
              <span>professional developers.</span>
              <span>see you again...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
