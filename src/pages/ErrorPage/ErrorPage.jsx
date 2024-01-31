import errorImg from "../../assets/images/404-status-code.png";
import "./Error.css";
const ErrorPage = () => {
  return (
    <div>
      <img className="error-img" src={errorImg} alt="" />
    </div>
  );
};

export default ErrorPage;
