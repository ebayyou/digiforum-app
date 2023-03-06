import { ActionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_THREAD_COMMENT:
      return { ...threadDetail, comments: [action.payload.comment, ...threadDetail.comments] };
    case ActionType.CLEAR_THREAD_DETAIL:
      return {};
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userVoteId)
          ? threadDetail.upVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
          : threadDetail.upVotesBy.concat([action.payload.userVoteId]),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userVoteId)
          ? threadDetail.downVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
          : threadDetail.downVotesBy.concat([action.payload.userVoteId]),
      };
    case ActionType.UP_VOTE_THREAD_DETAIL_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userVoteId)
                ? comment.upVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
                : comment.upVotesBy.concat([action.payload.userVoteId]),
            };
          }

          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.userVoteId)
                ? comment.downVotesBy.filter((voteId) => voteId !== action.payload.userVoteId)
                : comment.downVotesBy.concat([action.payload.userVoteId]),
            };
          }

          return comment;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
