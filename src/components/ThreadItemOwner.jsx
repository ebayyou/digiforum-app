import avatar from '../public/images/Avatar_1.png';

const ThreadItemOwner = () => {
  return (
    <div className="thread__profile">
      <div className="thread__group">
        <img className="thread__image" src={avatar} alt="example avatar" />
        <div className="thread__info">
          <h4>Elisabeth May</h4>
          <p>3 days ago</p>
        </div>
      </div>

      <div className="thread__badge">Front-end</div>
    </div>
  );
};

export default ThreadItemOwner;
