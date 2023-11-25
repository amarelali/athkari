import { useLocation } from "react-router-dom";
import { IAthkar } from "../interfaces";
import Thiker from "../components/ui/Thiker/Thiker";

interface IProps {
  athkarData: IAthkar;
}
const AthkarOfCategories = ({ athkarData }: IProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("categ") ?? "أذكار الصباح";
  return (
    <>
      <h1 className="text-[30px] mb-4">{categoryFromUrl}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white">
        {athkarData[categoryFromUrl].map((thikerDetails) => (
          <Thiker ThikerData={thikerDetails} />
        ))}
      </div>
    </>
  );
};
export default AthkarOfCategories;
