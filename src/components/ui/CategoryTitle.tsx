import { Link } from "react-router-dom";

interface IProps {
  title: string;
  href: string;
}
const CategoryTitle = ({ title, href }: IProps) => {
  return (
    <Link to={href}>
      <div className="thikerContainer w-full p-10 rounded-2xl flex justify-center items-center text-[23px] h-full">
        {title}
      </div>
    </Link>
  );
};
export default CategoryTitle;
