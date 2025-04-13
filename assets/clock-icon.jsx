import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const ClockIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="lucide lucide-clock-icon lucide-clock"
        {...props}
    >
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 6v6l4 2" />
    </Svg>
)
export default ClockIcon
