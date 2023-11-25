import { IAthkar } from "../interfaces";
import CategoryTitle from "../components/ui/CategoryTitle";

interface IProps {
  athkarData: IAthkar;
}
const Categories = ({ athkarData }: IProps) => {
  const categories = Object.keys(athkarData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
      {categories.map((e) => (
        <CategoryTitle
          title={e}
          href={`/athkar?${new URLSearchParams({
            categ: e || "أذكار الصباح",
          }).toString()}`}
        />
      ))}
    </div>
  );
};
export default Categories;
