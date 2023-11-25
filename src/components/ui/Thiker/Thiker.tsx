import { useState } from "react";
import { IthikerDetails } from "../../../interfaces";
import "./style.scss"; // Import your compiled CSS file

interface IProps {
  ThikerData: IthikerDetails;
}
const Thiker = ({ ThikerData }: IProps) => {
  const [count, setCounter] = useState<number>(Number(ThikerData.count));
  function decreaseCounter() {
    setCounter((prevCount) => (prevCount - 1) <= 0 ? 0 : (prevCount - 1));
  }
  return (
    <div className="thikerContainer w-full p-10 rounded-2xl flex flex-col justify-between">
      <div className="flex flex-col justify-between h-full mb-5">
        <div className="text-[19px] mb-3">{ThikerData.content}</div>
        <div className="thikerDescription  text-right leading-tight ">
          {ThikerData.description}
        </div>
        <div className="text-black-200">{ThikerData.reference}</div>
      </div>
      <button className={`${count === 0 ? "done" : ""} button rounded-md w-full text-[20px]`} onClick={()=>decreaseCounter()}>{count}</button>
    </div>
  );
};
export default Thiker;


