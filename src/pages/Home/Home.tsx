import { useRef } from "react";

import { useLocation } from "react-router";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useGetFilmsQuery } from "../../redux/services/filmsApi";

import Categories from "../../components/Categories/Categories";
import Films from "../../components/Films/Films";
import Filters from "../../components/Filters/Filters";
import Popular from "../../components/Popular/Popular";

const Home = () => {
  const filters = useSelector((state: RootState) => state.filters.filters);

  const location = useLocation();

  const pathRef = useRef<{ pathname: string; search: string }>({
    pathname: "",
    search: "name",
  });

  const isFirstPageRef = useRef<boolean>(false);

  if (
    location.pathname !== pathRef.current.pathname ||
    location.search !== pathRef.current.search
  ) {
    isFirstPageRef.current = true;
    pathRef.current.pathname = location.pathname;
    pathRef.current.search = location.search;
  } else {
    isFirstPageRef.current = false;
  }

  const {
    data: films,
    error,
    isFetching,
  } = useGetFilmsQuery(
    isFirstPageRef.current ? { ...filters, page: "1" } : filters
  );

  return (
    <>
      <Popular />
      <Categories />
      <Filters />
      <Films
        filters={filters}
        films={films}
        error={error}
        isFetching={isFetching}
      />
    </>
  );
};

export default Home;
