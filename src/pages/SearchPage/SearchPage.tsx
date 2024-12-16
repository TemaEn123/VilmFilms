import { useRef } from "react";

import { useLocation } from "react-router";

import { useSelector } from "react-redux";
import {
  useGetFilmsByLinkClickQuery,
  useGetFilmsBySearchQuery,
} from "../../redux/services/filmsApi";
import { RootState } from "../../redux/store";

import queryString from "query-string";

import Films from "../../components/Films/Films";
import { Box } from "@mui/material";

import { queryBySearchAndClick } from "../../data";

const SearchPage = () => {
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

  const parsed = queryString.parse(location.search);

  const filters = useSelector((state: RootState) => state.filters.filters);

  const skip: boolean = Object.keys(parsed)[0] === "title";

  const {
    data: filmsBySearch,
    error: errorBySearch,
    isFetching: isFetchingBySearch,
  } = useGetFilmsBySearchQuery(
    [parsed.title as string, isFirstPageRef.current ? "1" : filters.page],
    {
      skip:
        !skip ||
        !queryBySearchAndClick.includes(Object.keys(parsed)[0]) ||
        parsed[Object.keys(parsed)[0]]!.length < 1,
    }
  );

  const {
    data: filmsByClick,
    error: errorByClick,
    isFetching: isFetchingByClick,
  } = useGetFilmsByLinkClickQuery(
    [
      Object.keys(parsed)[0],
      parsed[Object.keys(parsed)[0]] as string,
      isFirstPageRef.current ? "1" : filters.page,
    ],
    {
      skip:
        skip ||
        !queryBySearchAndClick.includes(Object.keys(parsed)[0]) ||
        parsed[Object.keys(parsed)[0]]!.length < 1,
    }
  );

  return (
    <>
      {!queryBySearchAndClick.includes(Object.keys(parsed)[0]) ||
      parsed[Object.keys(parsed)[0]]!.length < 1 ||
      errorByClick ||
      errorBySearch ? (
        <Box
          sx={{
            width: "100%",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Некорректный запрос
        </Box>
      ) : (
        <Films
          filters={filters}
          films={skip ? filmsBySearch : filmsByClick}
          error={skip ? errorBySearch : errorByClick}
          isFetching={skip ? isFetchingBySearch : isFetchingByClick}
        />
      )}
    </>
  );
};

export default SearchPage;
