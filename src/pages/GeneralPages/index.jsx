import { Outlet } from "react-router-dom";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";

const GeneralPages = () => {
  <main>
    <Outlet />
    <CategoryNavigation />
  </main>;
};

export default GeneralPages;
