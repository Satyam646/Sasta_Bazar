import { React, useState } from "react";
import style from "./header.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CommonInput from "../CommonInput/Commoninput";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useForm, Controller } from "react-hook-form";
import Login from "../../Pages/Login/Login";
import { FormControl, IconButtons } from "@mui/material";
import SastaBazarLogo from "../../images/SastaBazarlogo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [Dialog, setDialog] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const save = () => {};
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const close = () => {
    setDialog(false);
  };
  return (
    <Stack
      fullwidth
      className={style.header}
      direction="row"
      alignItems="center"
      spacing={1}
    >
      {Dialog == true && <Login open={Dialog} close={close} />}
      <img
        src={SastaBazarLogo}
        height="50px"
        width="50px"
        style={{ opacity: "0.8" }}
      />
      <Typography
        sx={{
          color: "white",
          fontWeight: window.screen.width <= 600 ? "300" : "200",
          fontSize: window.screen.width <= 600 ? "15px" : "30px",
          alignSelf: "start",
        }}
      >
        Sasta Bazar
      </Typography>
      <form onSubmit={handleSubmit(save)}>
        <FormControl
        // fullWidth
        //   sx={{ m: 3, ml: "auto" }}
        // error={errors.subject != null}
        >
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <CommonInput
                sx={{
                  color: "black",
                  width: window.screen.width <= 600 ? "150px" : "500px",
                }}
                field={field}
                label="Search"
                variant="filled"
                // errors="please enter username"
              />
            )}
            rules={{ required: true }}
          />
          {/* {errors.search != null ? (
            <FormHelperText sx={{ marginLeft: "0px", color: "red" }}>
              Please Enter Username
            </FormHelperText>
          ) : (
            ""
          )} */}
        </FormControl>
      </form>
      <Stack
        direction="row"
        onMouseOver={(event) => {
          handleClick(event);
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
      >
        <Typography>MyAccount</Typography>
        {hover == false ? <KeyboardArrowDownIcon /> : <ExpandLessIcon />}
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            setDialog(true);
          }}
        >
          Login
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <IconButton
        onClick={() => {
          navigate("/cart");
        }}
      >
        <ShoppingCartIcon sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}
