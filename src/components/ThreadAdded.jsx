import { Link } from 'react-router-dom';
import { RiAddLine } from 'react-icons/ri';

function ThreadAdded() {
  return (
    <div className="threadAdded">
      <h3 className="added__heading">Add new a Thread</h3>
      <Link to="/" className="added__button">
        <RiAddLine className="button__icon" />
      </Link>
    </div>
  );
}

export default ThreadAdded;
