import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
// import ThreadCommentsInput from './children/ThreadCommentInput';
import { commentShape } from './children/ThreadCommentItems';
// import ThreadComments from './children/ThreadComments';
// import ThreadItemOwner, { ownerShape } from './children/ThreadItemOwner';

const ThreadDetail = ({ threadDetail }) => {
  return (
    <>
      {/* <ThreadItemOwner DesktopMode owner={threadDetail.owner} category={threadDetail.category} createdAt={threadDetail.createdAt} /> */}

      <h1 className="threadDetail__title">{threadDetail.title}</h1>
      <div className="threadDetail__desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(threadDetail.body) }} />

      {/* <div className="threadDetail__comment" id="comment">
        <ThreadCommentsInput />

        <ThreadComments comments={threadDetail.comments} />
      </div> */}
    </>
  );
};

const ThreadDetailShape = {
  id: PropTypes.string.isRequired,
  // owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

ThreadDetail.propTypes = {
  threadDetail: PropTypes.objectOf(PropTypes.shape(ThreadDetailShape)).isRequired,
};

export default ThreadDetail;
