import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { deepOrange } from "@mui/material/colors";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { OpenLoginModalContext } from "../contexts/Export";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormProvider, FTextField } from "./FormLibs/index";
import { useForm } from "react-hook-form";

export default function SearchAppBar() {
  const loginContextValue = React.useContext(OpenLoginModalContext);

  const methods = useForm();
  const {
    handleSubmit,

    formState: { isSubmitting },
  } = methods;
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        width: "100%",
        top: 0,
        heigth: "20px",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#272727" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Job Routing
          </Typography>
          <Typography>
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(loginContextValue.onSubmitKeyword)}
            >
              <FTextField
                sx={{
                  input: {
                    fontSize: 12,
                    border: "0px solid white ",
                    backgroundColor: "white",
                  },
                }}
                name="searchKeyword"
              />
            </FormProvider>
          </Typography>
          <Typography>
            <LoadingButton
              loading={isSubmitting}
              type="submit"
              sx={{ color: "white", width: "10%" }}
            >
              <SearchIcon />
            </LoadingButton>
          </Typography>
          <Typography>
            {loginContextValue.isLogin ? (
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {loginContextValue.userInfo.username?.charAt(0).toUpperCase()}
              </Avatar>
            ) : (
              ""
            )}
          </Typography>
          <Typography>
            <Button onClick={loginContextValue.handleLoginClick}>
              {loginContextValue.isLogin ? "Log out" : "Log In"}
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
