const communityAvatarBackground = [
  { background: '#9AB78D' },
  { background: '#8DB7B2' },
  { background: '#B7958D' },
  { background: '#918DB7' },
  { background: '#b78db7' },
];

const CommunityItem = () => {
  return (
    <div className="community__box">
      <div className="community__heading">
        <div className="community__group-people">
          {communityAvatarBackground.map((background) => (
            <div
              key={background.background}
              className="community__avatar"
              style={background}
            />
          ))}
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

export default CommunityItem;
