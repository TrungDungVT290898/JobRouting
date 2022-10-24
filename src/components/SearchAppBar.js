import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { deepOrange } from "@mui/material/colors";
import {
  Button,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { OpenLoginModalContext } from "../contexts/Export";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormProvider, FTextField } from "./FormLibs/index";
import { useForm } from "react-hook-form";
const Search = styled("div")(({ theme }) => ({
  color: "white",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#272727", 0.15),
  "&:hover": {
    backgroundColor: alpha("#272727", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const loginContextValue = React.useContext(OpenLoginModalContext);

  const methods = useForm();
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { error, isSubmitting },
  } = methods;
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        width: "100%",
        top: 0,
        heigth: "50px",
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
                    color: "white",
                    fontSize: 12,
                    border: "0px solid white ",
                  },
                }}
                name="searchKeyword"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LoadingButton
                        loading={isSubmitting}
                        loadingIndicator={
                          <CircularProgress
                            color="inherit"
                            size={16}
                            value={50}
                          />
                        }
                        type="submit"
                        sx={{ color: "white" }}
                      >
                        <SearchIcon />
                      </LoadingButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormProvider>
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
