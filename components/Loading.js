/* eslint-disable @next/next/no-img-element */
import { Circle } from "better-react-spinkit";

import Image from "next/image";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="loading-image"
          height={200}
          width={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
