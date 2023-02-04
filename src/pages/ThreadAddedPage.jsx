const ThreadAddedPage = () => {
  return (
    <section className="Layout__children">
      <div className="ThreadAddPage">
        <h1 className="ThreadAddPage__heading">Thread Added</h1>

        <form className="threadAddPage__form">
          <div className="threadAdd__flex">
            <div className="threadAddPage__group">
              <input className="threadAddPage__input" type="text" name="text" id="text" placeholder="Headline your threads..." />
            </div>
            <div className="threadAddPage__group">
              <input className="threadAddPage__input" type="text" name="text" id="text" placeholder="Category your threads..." />
            </div>
          </div>
          <div className="threadAddPage__group">
            <textarea className="threadAddPage__textarea" name="thread" id="thread" cols="30" rows="10" placeholder="Your threads here (;" />
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
