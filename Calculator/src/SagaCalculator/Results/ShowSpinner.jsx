import { SpinnerRoundFilled } from "spinners-react";
// import { Audio } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ShowSpinner = () => {
  return (
    <>
      <div className="form-group">
        <SpinnerRoundFilled />
        {/* <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        /> */}
      </div>
    </>
  );
};
export default ShowSpinner;
