import errorCloudImage from "../assets/images/error-cloud-image.png";
import "../index.css";

type Props = {
  error: string;
};

const Error = ({ error }: Props) => {
  const buttonCSS: string =
    "border-2 border-blue-200 ml-5 bg-blue-200 p-[6px] rounded-md hover:bg-transparent hover:border-orange-300 hover:text-white";
  const font: string =
    "font-['cloudy'] text-center mt-12 mb-12 text-white text-[1rem] sm:text-2xl w-4/5";
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-2/5" src={errorCloudImage} />
      <p className={font}>{error}</p>
      <button onClick={() => window.location.reload()} className={buttonCSS}>
        Try again / Return home
      </button>
    </div>
  );
};

export default Error;
