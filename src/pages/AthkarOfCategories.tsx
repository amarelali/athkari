import { Navigate, useParams } from "react-router-dom";
import { IAthkar } from "../interfaces";
import Thiker from "../components/ui/Thiker/Thiker";

interface IProps {
  athkarData: IAthkar[];
}
const AthkarOfCategories = ({ athkarData }: IProps) => {
  const {id ='0'} = useParams<{ id: string }>();

  if(isNaN(parseInt(id))) return <Navigate to={'/athkari/0'} />

  const parsedId =  parseInt(id);
  const {title,data} = athkarData[parsedId];

    return (
    <>
      <h1 className="text-[30px] mb-4">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white">
        {data.map((thikerdata) => (
          <Thiker ThikerData={thikerdata} />
        ))}
      </div>
    </>
  );
};
export default AthkarOfCategories;
