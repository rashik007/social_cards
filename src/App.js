import logo from "./logo.svg";
import "./App.scss";
import SocialCard from "./components/card";
import Logo from "../src/logo.svg";
import Html from "../src/assets/html.png";
import { faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faQuoteLeft,
  faClock,
  faList,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const cardData = [
    {
      id: 1,
      image: Logo,
      imageDescription: "React Native",
      subHeading: "Advanced",
      mainHeading: "React Native with typescript tutorial",
      courseLogo1: faReact,
      courseTitle1: "React Native",
      courseLogo2: faQuoteLeft,
      courseTitle2: "Typescript",
      courseTime: "4 Hours",
      courseParts: "4 part",
    },
    {
      id: 2,
      image: Html,
      imageDescription: "Html5",
      subHeading: "Advanced",
      mainHeading: "Advanced HTML5 markup syntax for web3",
      courseLogo1: faHtml5,
      courseTitle1: "HTML5",
      courseLogo2: faQuoteLeft,
      courseTitle2: "HTML",
      courseTime: "3 Hours",
      courseParts: "2 part",
    },
  ];

  return (
    <div className="app">
      <div className="card-wrapper">
        {cardData.map((card, index) => (
          <SocialCard
            key={card.id}
            image={card.image}
            imageDescription={card.imageDescription}
            subHeading={card.subHeading}
            mainHeading={card.mainHeading}
            courseLogo1={card.courseLogo1}
            courseTitle1={card.courseTitle1}
            courseLogo2={card.courseLogo2}
            courseTitle2={card.courseTitle2}
            courseTime={card.courseTime}
            courseParts={card.courseParts}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
