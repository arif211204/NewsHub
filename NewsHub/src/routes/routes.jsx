import HomePage from "../pages/Home";
import ReadArticles from "../pages/ReadArticles";
import SearchPage from "../pages/SearchPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/article",
    element: <ReadArticles />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
];
