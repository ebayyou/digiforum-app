// import PropTypes from 'prop-types';

const CommunityItem = () => {
  return (
    <div className="community__box">
      <div className="community__heading">
        <div className="community__group-people">
          <div
            className="community__avatar"
            style={{ background: '#9AB78D' }}
          />
          <div
            className="community__avatar"
            style={{ background: '#8DB7B2' }}
          />
          <div
            className="community__avatar"
            style={{ background: '#B7958D' }}
          />
          <div
            className="community__avatar"
            style={{ background: '#918DB7' }}
          />
          <div
            className="community__avatar"
            style={{ background: '#b78db7' }}
          />
        </div>

        <button
          type="button"
          className="community__btn"
        >
          Join
        </button>
      </div>

      <div className="community__thumb" />

      <div className="community__group">
        <h3>Front-end Web Development...</h3>

        <div className="community__info">
          <div className="community__desc">
            <p>Topics</p>
            <h5>282</h5>
          </div>
          <div className="community__desc">
            <p>Last Activity</p>
            <h5>Today 22:45</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

// CommunityItem.propTypes = {

// };

export default CommunityItem;
