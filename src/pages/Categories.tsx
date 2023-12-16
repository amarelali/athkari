import { IAthkar } from "../interfaces";
import CategoryTitle from "../components/ui/CategoryTitle";

interface IProps {
  athkarData: IAthkar[];
}
const Categories = ({ athkarData }: IProps) => {
  const categories = Object.values(athkarData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
      {categories.map(({ title }, index) => (
        <CategoryTitle title={title} thikerId={index} />
      ))}
    </div>
  );
};
export default Categories;
