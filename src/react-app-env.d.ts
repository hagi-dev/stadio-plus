/// <reference types="react-scripts" />
import Slider, { Settings } from 'react-slick';
declare module 'react-slick' {
  export { Slider, Settings };
}

import { Link, animateScroll } from "react-scroll";
declare module 'react-scroll'{
  export {Link,animateScroll}
}

