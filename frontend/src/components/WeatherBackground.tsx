import weatherBackgroundVideo from "../assets/weather-background-video.mp4";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const WeatherBackground = ({ children }: Props) => {
  return (
    <>
      <video
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -100,
        }}
        autoPlay={true}
        playsInline
        controls={false}
        loop={true}
        muted={true}
        src={weatherBackgroundVideo}
        typeof="video/mp4"
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default WeatherBackground;
