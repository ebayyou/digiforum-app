import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';

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
      navigate('/');
    } else {
      alert('you have login!!!');
    }
  };

  return (
    <section className="Layout__children">
      <div className="ThreadAddPage">
        <h1 className="ThreadAddPage__heading">Thread Added</h1>

        <form className="threadAddPage__form" onSubmit={handlerSubmitAddedThread}>
          <div className="threadAdd__flex">
            <div className="threadAddPage__group">
              <input className="threadAddPage__input" value={title} onChange={onChangeTitle} type="text" name="title" id="title" placeholder="Headline your threads..." required />
            </div>
            <div className="threadAddPage__group">
              <input className="threadAddPage__input" value={category} onChange={onChangeCategory} type="text" name="category" id="category" placeholder="Category your threads..." required />
            </div>
          </div>
          <div className="threadAddPage__group">
            <textarea className="threadAddPage__textarea" value={body} onChange={onChangeBody} name="body" id="body" cols="30" rows="10" placeholder="Your threads here (;" required />
          </div>

          <button type="submit" className="threadAddPage__button">
            Create Thread
          </button>
        </form>
      </div>
    </section>
  );
};

export default ThreadAddedPage;
