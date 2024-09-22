import { Box, Button, Stack, Toolbar, Typography, styled } from "@mui/material";
import { React } from "react";
import { DarkMode, LocalMall, AddCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const StyledToolbar = styled(Toolbar)(() => ({
  color: "white",
  padding: "0 20px",
  display: "flex",
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const navbar = () => {
  return (
    <Box maxWidth="1140px" mx="auto" width="100%">
      <StyledToolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography
            variant="h5"
            component="div"
            color="red"
            sx={{
              flexGrow: 1,
              gap: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to={"/"}>My store</Link>
            <LocalMall />
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Link to={"/create"}>
            <Button>
              <AddCircle />
            </Button>
          </Link>

          <Button>
            <DarkMode />
          </Button>
        </Box>
      </StyledToolbar>
    </Box>
  );
};

export default navbar;
