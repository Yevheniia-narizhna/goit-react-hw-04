import { Hearts } from "react-loader-spinner";
import s from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={s.loader}>
      <Hearts
        height="100"
        width="100"
        color="#9b79c2"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
