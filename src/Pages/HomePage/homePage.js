import { React, useEffect, useState } from "react";
import Header from "../../Common/Header/header";
import { Typography, Grid, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [productDetail, setProductDetails] = useState();

  const Navigate = useNavigate();
  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductDetails(json);
      });
  };
  console.log(productDetail, "jjhh");
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Stack sx={{ bgcolor: "#e0e0e0" }}>
      <Stack sx={{ position: "sticky", top: "0", boxShadow: "20px" }}>
        <Header />
      </Stack>
      <Grid container spacing={1} width="100%">
        {/* direction="row"
        spacing={2}
        height="100px"
        sx={{ bgcolor: "Black" }} */}

        {productDetail?.map((item) => {
          return (
            <Grid item xs={window.screen.width <= 600 ? 12 : 3}>
              <Stack
                // direction="row"
                onClick={() => {
                  Navigate("/ProductPage", {
                    state: { id: item?.id },
                  });
                }}
                sx={{
                  bgcolor: "white",
                  height: "43vh",
                  padding: "10px",

                  borderRadius: "5px",
                  // justifyContent: "center",
                  // border: "2px solid red",
                  "&:hover": {
                    boxShadow: "1px 2px 9px #F4AAB9",
                    cursor: "pointer",
                  },
                }}
                // alignItems="center"
              >
                {/* <Stack> */}
                <img
                  src={item.image}
                  width="150px"
                  height="200px"
                  style={{ alignSelf: "center" }}
                ></img>
                <Typography sx={{ alignSelf: "start" }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    alignSelf: "start",
                  }}
                >
                  {item.price}$
                </Typography>
                {/* </Stack> */}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
