import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Categories from "../pages/Categories";
import AthkarOfCategories from "../pages/AthkarOfCategories";
import { adhkarData } from "../data";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Categories athkarData={adhkarData} />} />
      <Route
        path="/athkari/:id"
        element={<AthkarOfCategories athkarData={adhkarData} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);
export default router;
