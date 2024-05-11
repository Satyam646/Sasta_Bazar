import { React, useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, IconButton, Stack, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CommonInput from "../../Common/CommonInput/Commoninput";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function Login({ open, close }) {
  const [sigIn, setSigIn] = useState(false);
  //   const [open, setOpen] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Username: "",
      Password: "",
      SignPassword: "",
      conformSignPassword: "",
    },
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography sx={{ color: "blue", fontWeight: "800" }}>
                SastaBazar
              </Typography>
            </Stack>
            <IconButton onClick={() => close()}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
           
           </DialogContentText> */}
          {sigIn == false && (
            <Stack spacing={2}>
              <Controller
                name="Username"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    label="Username"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />
              <Controller
                name="Password"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    label="Password"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />
              <Button variant="contained">Login</Button>
              <Typography
                onClick={() => {
                  setSigIn(true);
                }}
                sx={{
                  color: "blue",
                  mt: "3rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Not registered ? Sign In.
              </Typography>
            </Stack>
          )}
          {sigIn == true && (
            <Stack spacing={2}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "700", color: "795548" }}
              >
                SignIn
              </Typography>
              <Controller
                name="Mobile no*"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    label="Moblie no*"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />
              <Controller
                name="Email"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    label="Email*"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />

              <Controller
                name="SignPassword"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    type="password"
                    label="Password*"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />
              <Controller
                name="conformSignPassword"
                control={control}
                render={({ field }) => (
                  <CommonInput
                    sx={{
                      color: "black",
                      width: window.screen.width <= 600 ? "100%" : "500px",
                    }}
                    field={field}
                    label="Confirm Password*"
                    type="Password"
                    variant="standard"
                    // errors="please enter username"
                  />
                )}
                rules={{ required: true }}
              />
              <Button variant="contained" sx={{ textTransform: "none" }}>
                Sign In
              </Button>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} autoFocus>
            
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
