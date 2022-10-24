import * as React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import OpenLoginModalContext from "../contexts/Export";
import { Stack } from "@mui/system";
import { Divider, Link } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormProvider, FTextField, FCheckBox } from "./FormLibs/index";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const openContextValue = React.useContext(OpenLoginModalContext);

  const methods = useForm(openContextValue.defaultValue);
  const {
    handleSubmit,

    formState: { isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <Modal
        open={openContextValue.isOpen}
        onClose={openContextValue.handleLoginModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={4}>
            <Typography sx={{ textAlign: "center" }}>
              <LockPersonIcon sx={{ color: "red", fontSize: 60 }} />
            </Typography>
          </Stack>
          <Divider />
          <Divider />
          <Stack spacing={6}>
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(openContextValue.handleLoginSubmit)}
            >
              <Stack spacing={3} sx={{ my: 2 }}>
                <FTextField
                  defaultValue={openContextValue.defaultValue.username}
                  name="username"
                  label="Email Address"
                />
              </Stack>

              <Stack spacing={2} sx={{ my: 1 }}>
                <FTextField
                  name="password"
                  label="Password"
                  defaultValue={openContextValue.defaultValue.password}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 0.5 }}
              >
                <FCheckBox label="Remember me" name="remember" />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ marginTop: 1, marginBottom: 2 }}
              >
                <Link href="#">Don't have account?</Link>
                <Link href="#">Forgot password?</Link>
              </Stack>
              <Stack>
                <LoadingButton
                  loading={isSubmitting}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </LoadingButton>
              </Stack>
            </FormProvider>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
