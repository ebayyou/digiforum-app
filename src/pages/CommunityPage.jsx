import SearchElement from '../components/SearchElement';
import CommunityItem from '../components/CommunityItem';

const CommunityPage = () => {
  return (
    <div className="Layout__children children__w800">
      <div className="CommunityPage">
        <div className="headers__page">
          <h1 className="heading__page">Top Community that you can Join & Discuss</h1>
          <p className="desc__page">
            You can join the Community you want to discuss with anyone, anywhere, and anytime.
          </p>
        </div>

        <div className="community__wrap">
          <SearchElement
            className="search__w-md"
            keyword="Nothing Work"
            changeValueSearchParams={() => {}}
          />

          <div className="community__list">
            <CommunityItem />
            <CommunityItem />
            <CommunityItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
