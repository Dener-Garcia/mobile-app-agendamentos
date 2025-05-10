import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const LogoMain = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6ec845"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-clock-icon lucide-file-clock"
    {...props}
  >
    <Path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
    <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <Circle cx={8} cy={16} r={6} />
    <Path d="M9.5 17.5 8 16.25V14" />
  </Svg>
);
export default LogoMain;
