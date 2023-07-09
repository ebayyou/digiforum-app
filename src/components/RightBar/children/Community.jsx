import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { Quant } from 'iconsax-react';
import { timeNow } from '../../../utils/index';
import WrapperError from '../../errorBoundaries/WrapperError';
import RightbarBoxHeader from './RightbarBoxHeader';
import RightbarBoxLink from './RightbarBoxLink';

const communities = [
  {
    id: 1,
    title: 'Front-end Web Dev...',
    time: timeNow(),
    gradientColor: 'linear-gradient(152.9deg, #A18CD1 0.44%, rgba(251, 194, 235, 0.85) 100%)',
  },
  {
    id: 2,
    title: 'Back-end Web Dev...',
    time: timeNow(),
    gradientColor: 'linear-gradient(152.9deg, #D18C99 0.44%, rgba(251, 221, 194, 0.85) 100%)',
  },
  {
    id: 3,
    title: 'Mobile Development...',
    time: timeNow(),
    gradientColor: 'linear-gradient(152.9deg, #93D18C 0.44%, rgba(212, 251, 194, 0.85) 100%)',
  },
];

const Community = ({ onHandlerRightbar }) => {
  return (
    <div className="rightBar__box">
      <RightbarBoxHeader
        title="List of Users"
        Icon={Quant}
      />

      <ErrorBoundary fallback={<WrapperError height={280} />}>
        <div className="rightBarBox__wrapper">
          {communities.map((item) => (
            <div
              key={item.id}
              className="community"
            >
              <div className="community__group">
                <div
                  style={{ background: `${item.gradientColor}` }}
                  className="community__photo"
                />

                <div className="community__info">
                  <h4>{item.title}</h4>
                  <span>
                    Today
                    {item.time}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="community__button"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </ErrorBoundary>

      <RightbarBoxLink
        to="/community"
        onHandlerRightbar={onHandlerRightbar}
      />
    </div>
  );
};

Community.propTypes = {
  onHandlerRightbar: PropTypes.func.isRequired,
};

export default Community;
