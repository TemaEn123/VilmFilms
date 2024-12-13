import { Box, Link as MUILink, Typography } from "@mui/material";
import { Link } from "react-router";

interface Props {
  items: { name: string }[];
}

const FilmDetailsLinks = ({ items }: Props) => {
  return (
    <>
      {items.map((item, i) => {
        if (i + 1 < items.length) {
          return (
            <Box sx={{ whiteSpace: "nowrap" }} key={item.name}>
              <MUILink
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", sm: "16px" },
                  whiteSpace: "nowrap",
                }}
                component={Link}
                to="."
              >
                {item.name}
              </MUILink>
              <Typography
                component="span"
                sx={{
                  padding: "0px 5px",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                /
              </Typography>
            </Box>
          );
        } else {
          return (
            <Box sx={{ whiteSpace: "nowrap" }} key={item.name}>
              <MUILink
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", sm: "16px" },
                  whiteSpace: "nowrap",
                }}
                component={Link}
                to="."
              >
                {item.name}
              </MUILink>
            </Box>
          );
        }
      })}
    </>
  );
};

export default FilmDetailsLinks;