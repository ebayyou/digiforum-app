import ThreadItemOwner from '../components/ThreadItemOwner';
import avatar from '../public/images/Avatar_1.png';

const ThreadDetailPage = () => {
  return (
    <section className="Layout__children">
      <article className="ThreadDetailPage">
        <ThreadItemOwner DesktopMode />

        <h1 className="threadDetail__title">How to become a React Developer</h1>
        <div className="threadDetail__desc">
          <p>If you’re interested in front-end development and web design ,a React developer position may be a great fit for you. You can learn more about pursuing this career path in the following walkthrough.</p>
          <p>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya! Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman</p>
          <p> sekelas lainnya. Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.</p>
          <p>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.</p>
          <p>- this is skill for to become Front end developer :</p>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
          </ul>
        </div>

        <div className="threadDetail__comment" id="comment">
          <div className="comment__wrapper">
            <div className="comment__heading p-2">
              <h2>Comment</h2>
            </div>

            <form className="comment__form">
              <div className="comment__textArea-group">
                <textarea className="comment__textArea" name="comment" id="comment" cols="30" rows="10" />
              </div>
              <button className="comment__button" type="submit">
                Send Comment
              </button>
            </form>
          </div>

          <div className="comment__wrapper">
            <div className="comment__heading">
              <h2>Responses</h2>
              <span className="comment__total">20</span>
            </div>

            <div className="comment__data">
              <div className="comment__group">
                <div className="comment__group-profile">
                  <img className="comment__image-profile" src={avatar} alt="example avatar" />
                  <div className="comment__profile">
                    <h4>Elisabeth May</h4>
                    <p>3 days ago</p>
                  </div>
                </div>
                <div className="comment__dot">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <p className="comment__body">Customer Service: ChatGPT can be integrated into websites or messaging platforms to provide 24/7 support for customers.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ThreadDetailPage;
