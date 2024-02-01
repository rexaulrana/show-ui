import { Link } from "react-router-dom";
import "./ShowCard.css";
import notFound from "../../assets/images/notFound.png";
const ShowCard = ({ showItem }) => {
  const { id, image, name, genres } = showItem.show;
  //   console.log(id);
  return (
    <div className="show-card">
      <div>
        {image?.original ? (
          <img
            src={image?.original}
            className="card-img-top img-thumbnail show-img rounded "
            alt="..."
          />
        ) : (
          <img src={notFound} alt="" />
        )}
        <div className="card-body">
          <h5 className="card-title mt-2">Name: {name}</h5>
        </div>

        <div className="card-body mt-2">
          <h5>Language: {showItem?.show?.language}</h5>
          <h6>
            Genres:
            <ul>
              <li>{genres[0]}</li>
              {genres[1] && <li>{genres[1]}</li>}
            </ul>
          </h6>
        </div>
        <Link to={`/details/${id}`}>
          <button className="btn btn-info">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
