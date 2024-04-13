import errorCloudImage from "../assets/images/error-cloud-image.png";
import "../index.css";

type Props = {
  error: string;
};

const Error = ({ error }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-2/5" src={errorCloudImage} />
      <p
        style={{
          fontFamily: "cloudy",
          marginTop: "20px",
          color: "white",
          fontSize: "2.5rem",
        }}
      >
        {error}
      </p>
    </div>
  );
};

export default Error;
