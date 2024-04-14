import loadingIcon from "../assets/images/loading-icon.png";

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <img className="animate-spin w-2/5" src={loadingIcon} />
      <p
        style={{
          fontFamily: "cloudy",
          marginTop: "20px",
          color: "white",
          fontSize: "2.5rem",
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default Loading;
