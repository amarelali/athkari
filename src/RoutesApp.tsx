import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories";
import AthkarOfCategories from "./pages/AthkarOfCategories";
import { adhkarData } from "./data";
interface IProps {}
const RoutesApp = ({}: IProps) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Categories athkarData={adhkarData} />}
        />
        <Route path="/athkar" element={<AthkarOfCategories athkarData={adhkarData} />} />
        <Route  path="*" element={<div>Not found</div>} />
      </Routes>
    </Router>
  );
};
export default RoutesApp;
