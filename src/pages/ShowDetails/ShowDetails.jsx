import { useParams } from "react-router-dom";
import useShowData from "../../hooks/useShowData";
import { useEffect, useState } from "react";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState("");
  const { id } = useParams();
  // console.log(id);
  const [shows, isPending, error] = useShowData();
  // console.log(shows);
  useEffect(() => {
    const details = shows?.find((showItem) => showItem?.show?.id == id);
    console.log(details);
    setShowDetails(details);
  }, [id, shows]);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <h3 className="text-center mt-3">Show Details</h3>
      {/* details  */}
      <div className="card text-center">
        <div className="card-body">
          <p className="card-text">{showDetails?.show?.summary}</p>
          <a onClick={handleBack} className="btn btn-dark me-2">
            Go back
          </a>
          <a className="btn btn-secondary">Book</a>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
