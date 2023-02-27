import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useInput } from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import Headers from '../components/Headers';

const ThreadAddedPage = () => {
  const { authUser = {} } = useSelector((state) => state);
  const [title, onChangeTitle] = useInput('');
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
    <section className="Layout__children">
      <div className="ThreadAddPage">
        <div className="navigation__thread">
          <button type="button">
            <FiArrowLeft className="navigation__icon" />
          </button>

          <button
            className="navigation__button"
            type="submit"
            onClick={handlerSubmitAddedThread}
          >
            Add Thread
          </button>
        </div>

        <Headers
          heading="Add Your Threads"
          description="You can say anything #FreeSpeech"
          added
        />

        <form className="threadAddPage__form">
          <div className="threadAdd__flex">
            <div className="threadAddPage__group">
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
            </div>
            <div className="threadAddPage__group">
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
            </div>
          </div>
          <div className="threadAddPage__group">
            <textarea
              className="threadAddPage__textarea"
              value={body}
              onChange={onChangeBody}
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Tell People what you have to say"
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ThreadAddedPage;
