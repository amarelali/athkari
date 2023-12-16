import {
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
        path="/:id"
        element={<AthkarOfCategories athkarData={adhkarData} />}
      />
      <Route path="*" element={<div>Not found</div>} />
    </>
  )
);
export default router;
