import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Hearts
        height="80"
        width="80"
        color="#9b79c2"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
