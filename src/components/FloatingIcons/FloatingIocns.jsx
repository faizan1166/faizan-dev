import {
  ReactJsIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReduxIcon,
  GithubIcon,
  NextJsIcon,
  MongoIcon,
  NodeJsIcon,
} from "../../components/Icons/SvgIcons";

import "./FloatingIcons.css";

const FloatingIcons = () => {
  const icons = [
    <ReactJsIcon />,
    <JavascriptIcon />,
    <TypescriptIcon />,
    <ReduxIcon />,
    <GithubIcon />,
    <NextJsIcon />,
    <MongoIcon />,
    <NodeJsIcon />,
  ];

  return (
    <div className="orbit-wrapper">
      {icons.map((icon, index) => (
        <div key={index} className="floating-icon">
          <div className="icon">{icon}</div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
