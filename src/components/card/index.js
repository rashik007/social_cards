import react from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faQuoteLeft,
  faClock,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={Logo}></img>
        <p className="image-description">React Native</p>
      </div>

      <div className="card-content">
        <h2 className="sub_heading">Advanced</h2>
        <h1 className="main_heading">React Native with Typescript tutorial.</h1>
        <ul className="feature_list">
          <li className="single_list">
            <FontAwesomeIcon icon={faReact} color="#61DAFB" />
            <p className="list_description">React Native</p>
          </li>
          <li className="single_list">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <p className="list_description">React Native</p>
          </li>
          <li className="single_list">
            <FontAwesomeIcon icon={faClock} />
            <p className="list_description">React Native</p>
          </li>
          <li className="single_list">
            <FontAwesomeIcon icon={faList} />
            <p className="list_description">React Native</p>
          </li>
        </ul>
      </div>
      {/* card-content */}
    </div>
  );
};

export default Card;
