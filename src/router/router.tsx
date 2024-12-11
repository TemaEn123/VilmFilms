import { createBrowserRouter } from "react-router";

import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NotFound from "../pages/NotFound/NotFound";
import Film from "../pages/Film/Film";

const categories = [
  "serials",
  "anime",
  "cartoons",
  "western",
  "biography",
  "action",
  "war",
  "detective",
  "drama",
  "doc",
  "history",
  "comedy",
  "criminal",
  "melodrama",
  "music",
  "adventures",
  "sport",
  "thriller",
  "horrors",
  "fantasy",
  "fantastic",
];

const paths = ["/", ...categories, "/movie/:filmId"];

const routes = paths.map((cat) => {
  return {
    path: `/${cat}`,
    element:
      cat === "/" ? (
        <Home />
      ) : cat === "/movie/:filmId" ? (
        <Film />
      ) : (
        <Category />
      ),
  };
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: routes,
  },
]);
