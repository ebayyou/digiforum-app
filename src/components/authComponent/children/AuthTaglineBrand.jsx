import { Link } from 'react-router-dom';
import { Save2, Message2 } from 'iconsax-react';
import mainAvatar from '../../../assets/images/main_avatar.png';
import logoBrandStripe from '../../../assets/images/brand/digiforum-stripe.svg';

const AuthTaglineBrand = () => {
  return (
    <div className="wrapper__side">
      <div className="tagline">
        <Link
          to="/"
          className="logo__brand"
        >
          <img
            src={logoBrandStripe}
            alt="logo brand"
          />
        </Link>
        <h3 className="tagline__brand">DigiForum.io</h3>
        <h1 className="tagline__heading">
          Any discussion, anywhere, with anyone, only at DigiForum.io
        </h1>
      </div>

      <div className="box">
        <h3 className="box__heading">Front-end Developer</h3>
        <div className="box__profile">
          <div className="box__group">
            <img
              className="box__image"
              src={mainAvatar}
              alt="example avatar"
            />
            <div className="box__info">
              <h4>EbayYou Anggoro</h4>
              <p>3 days ago</p>
            </div>
          </div>

          <div className="box__badge">Front-end</div>
        </div>

        <p className="box__desc">
          The three main languages you need to know well are HTML, CSS, and JavaScript. From there
          you can focus on frameworks, libraries, and other useful tools.
        </p>

        <div className="box__icon">
          <div className="wrapper__icon">
            <Save2
              className="bookmark"
              size="24"
              variant="Bold"
            />
          </div>
          <div className="box__comment">
            <Message2
              className="comment"
              size="24"
              variant="Bold"
            />
            <span>Add Response</span>
            <span className="comment__total">10</span>
          </div>
        </div>
      </div>

      <div className="terms">
        <p>PRIVACY POLICY</p>
        <span className="circle" />
        <p>TERMS OF SERVICE</p>
      </div>
    </div>
  );
};

export default AuthTaglineBrand;
