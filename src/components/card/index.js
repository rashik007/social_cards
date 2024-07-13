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
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const SocialCard = ({
  image,
  imageDescription,
  subHeading,
  mainHeading,
  courseLogo1,
  courseTitle1,
  courseLogo2,
  courseTitle2,
  courseTime,
  courseParts,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-image">
          <img src={image} alt="logo type"></img>
          <p className="image-description">{imageDescription}</p>
          <div className=""></div>
        </div>

        <div className="card-content">
          <h2 className="sub_heading">{subHeading}</h2>
          <h1 className="main_heading">{mainHeading}</h1>
          <ul className="feature_list">
            <li className="single_list">
              <FontAwesomeIcon icon={courseLogo1} color="#61DAFB" />
              <p className="list_description">{courseTitle1}</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={courseLogo2} />
              <p className="list_description">{courseTitle2}</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={faClock} />
              <p className="list_description">{courseTime}</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={faList} />
              <p className="list_description">{courseParts}</p>
            </li>
          </ul>

          <div className="btn_group">
            <button type="button" className="cfa">
              Start Learning Now
            </button>
            <button type="button" className="dimmer">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-image">
          <img src={Logo} alt="logo type"></img>
          <p className="image-description">React Native</p>
          <div className=""></div>
        </div>

        <div className="card-content">
          <h2 className="sub_heading">Advanced</h2>
          <h1 className="main_heading">
            React Native with Typescript tutorial.
          </h1>
          <ul className="feature_list">
            <li className="single_list">
              <FontAwesomeIcon icon={faReact} color="#61DAFB" />
              <p className="list_description">React Native</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className="list_description">Typescript</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={faClock} />
              <p className="list_description">32 Hour</p>
            </li>
            <li className="single_list">
              <FontAwesomeIcon icon={faList} />
              <p className="list_description">5 Part</p>
            </li>
          </ul>

          <div className="btn_group">
            <button type="button" className="cfa">
              Start Learning Now
            </button>
            <button type="button" className="dimmer">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </div>
        </div>
      </div>

      {/* card-content */}
    </div>
  );
};

export default SocialCard;
