import ThreadItemOwner from '../components/ThreadItemOwner';

const ThreadDetailPage = () => {
  return (
    <section className="Layout__children">
      <div className="ThreadDetailPage">
        <ThreadItemOwner />

        <h1 className="threadDetail__title">How to become a React Developer</h1>
        <div className="threadDetail__desc">
          If you’re interested in front-end development and web design ,a React developer position may be a great fit for you. You can learn more about pursuing this career path in the following walkthrough.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam molestiae reprehenderit? Veritatis laudantium fugit quasi sequi accusamus asperiores nisi iste explicabo nostrum esse! Repellendus accusamus veniam
            quaerat incidunt fuga!
          </p>
          <p>- this is skill for to become Front end developer :</p>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThreadDetailPage;
