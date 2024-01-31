import { useParams } from "react-router-dom";
import useShowData from "../../hooks/useShowData";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

const ShowDetails = () => {
  const [showDetails, setShowDetails] = useState("");
  const { id } = useParams();
  // console.log(id);
  const [shows, isPending, error] = useShowData();
  // console.log(shows);
  if (isPending) {
    <Loader></Loader>;
  }
  if (error) {
    <ErrorPage></ErrorPage>;
  }
  useEffect(() => {
    const details = shows?.find((showItem) => showItem?.show?.id == id);
    // console.log(details);
    setShowDetails(details);
  }, [id, shows]);

  const handleBack = () => {
    window.history.back();
  };

  // handle booking
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    // const showName = {showDetails?.show?.summary};
    const customerName = form.name.value;
    const date = form.date.value;
    const number = form.number.value;
    const hall = form.hall.value;
    const customerInfo = {
      showName: showDetails?.show?.name,
      customerName,
      date,
      number,
      hall,
    };
    console.log(customerInfo);
    localStorage.getItem("booked-show");
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

          {/* booking form */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Book Now
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <form
                    onSubmit={handleBooking}
                    className="modal-title fs-5"
                    id="staticBackdropLabel"
                  >
                    {/* show name */}
                    <div className="mb-2">
                      <label className="form-label">Name</label>
                      <div className="input-group">
                        <input
                          required
                          defaultValue={showDetails?.show?.name}
                          type="text"
                          name="showName"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3 basic-addon4"
                        />
                      </div>
                    </div>
                    {/* customer name */}
                    <div className="mb-2">
                      <label className="form-label">Your Name</label>
                      <div className="input-group">
                        <input
                          required
                          type="text"
                          placeholder="Type Your Name"
                          name="name"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3 basic-addon4"
                        />
                      </div>
                    </div>
                    {/* customer phone number */}
                    <div className="mb-2">
                      <label className="form-label">Phone Number</label>
                      <div className="input-group">
                        <input
                          required
                          type="number"
                          name="number"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3 basic-addon4"
                        />
                      </div>
                    </div>
                    {/* booking date */}
                    <div className="mb-2">
                      <label className="form-label">Select date</label>
                      <div className="input-group">
                        <input
                          required
                          type="date"
                          name="date"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3 basic-addon4"
                        />
                      </div>
                    </div>
                    {/* Hall */}
                    <div className="mb-2">
                      <label className="form-label">Select Hall</label>
                      <div className="input-group">
                        <select
                          name="hall"
                          required
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option defaultValue>Open this select menu</option>
                          <option>Hall one</option>
                          <option>Hall Two</option>
                          <option>Hall Three</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <input type="submit" className="btn btn-primary" />
                  </form>
                </div>

                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
