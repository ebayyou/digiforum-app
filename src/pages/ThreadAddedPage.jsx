import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import ThreadContext from '../context';
import NavigationThread from '../components/navigation/children/NavigationThread';
import ThreadAddedBody from '../components/thread/children/ThreadAddedBody';
import ThreadAddedFooter from '../components/thread/children/ThreadAddedFooter';
import NothingThread from '../components/errorBoundaries/NothingThread';

const ThreadAddedPage = () => {
  const { authUser = {} } = useSelector((state) => state);
  const threadTitle = useContext(ThreadContext);
  const [title, onChangeTitle] = useInput(threadTitle);
  const [category, onChangeCategory] = useInput('');
  const [body, onChangeBody] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmitAddedThread = () => {
    if (authUser) {
      dispatch(asyncAddThread({ title, category, body }));
      navigate('/threads');
    } else {
      alert('you have login!!!');
    }
  };

  return (
    <section className="Layout__thread">
      <div className="ThreadAddPage">
        {/* mobile version */}
        <NavigationThread handlerSubmitAddedThread={handlerSubmitAddedThread} />

        {authUser ? (
          <ThreadAddedBody>
            <form
              className="threadAddPage__form"
              onSubmit={handlerSubmitAddedThread}
            >
              <div className="threadAddPage__group">
                <label htmlFor="title">
                  <h5>Title</h5>
                  <span>*</span>
                  <input
                    className="threadAddPage__input border-color-1"
                    value={title}
                    onChange={onChangeTitle}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    required
                  />
                </label>
              </div>
              <div className="threadAddPage__group">
                <label htmlFor="category">
                  <h5>Category</h5>
                  <span>*</span>
                  <input
                    className="threadAddPage__input border-color-2"
                    value={category}
                    onChange={onChangeCategory}
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                    required
                  />
                </label>
              </div>
              <div className="threadAddPage__group">
                <label htmlFor="Says">
                  <h5>Says</h5>
                  <span>*</span>
                  <textarea
                    className="threadAddPage__textarea"
                    value={body}
                    onChange={onChangeBody}
                    name="body"
                    id="Says"
                    cols="30"
                    rows="10"
                    placeholder="Tell People what you have to say"
                    required
                  />
                </label>
              </div>

              {/* desktop version */}
              <button
                className="form__button"
                type="submit"
              >
                Add Thread
              </button>
            </form>
          </ThreadAddedBody>
        ) : (
          <div className="threadAdded__wrapper">
            <NothingThread
              errorMsg="You have Login, in before adding a thread"
              headMsg="PeopleSpeech"
              btnMsg="Go to Login"
              btnTo="/login"
              withButton
            />
          </div>
        )}
        <ThreadAddedFooter handlerSubmitAddedThread={handlerSubmitAddedThread} />
      </div>
    </section>
  );
};

export default ThreadAddedPage;
