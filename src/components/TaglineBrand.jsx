import { FaComment, FaBookmark } from 'react-icons/fa';
import avatar from '../public/images/Avatar_1.png';

function TaglineBrand() {
  return (
    <div className="wrapper__side">
      <div className="tagline">
        <div className="logo__brand">DF</div>
        <h3 className="tagline__brand">DigiForum.io</h3>
        <h1 className="tagline__heading">Any discussion, anywhere, with anyone, only at DigiForum.io</h1>
      </div>

      <div className="box">
        <h3 className="box__heading">How to become a react developer</h3>
        <div className="box__profile">
          <div className="box__group">
            <img className="box__image" src={avatar} alt="example avatar" />
            <div className="box__info">
              <h4>Elisabeth May</h4>
              <p>3 days ago</p>
            </div>
          </div>

          <div className="box_badge">Front-end</div>
        </div>

        <p className="box__desc">
          If you’re interested in
          <strong>front-end development</strong>
          and
          <strong>web design</strong>
          ,a React developer position may be a great fit for you. You can learn more about pursuing this career path in the following walkthrough
        </p>

        <div className="box__icon">
          <div className="wrapper__icon">
            <FaBookmark className="bookmark" />
          </div>
          <div className="box__comment">
            <FaComment className="comment" />
            <span>Add Response</span>
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
}

export default TaglineBrand;
