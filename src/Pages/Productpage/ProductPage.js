import React, { useEffect, useState } from "react";
import Header from "../../Common/Header/header";
import { Typography, Grid, Stack, Box } from "@mui/material";
import Rating from "../../Common/Rating/rating";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
export default function ProductPage() {
  const Location = useLocation();
  console.log("llkk", Location);
  const [Data, setData] = useState();
  let cart = [];
  const GetSingleProduct = () => {
    fetch(`https://fakestoreapi.com/products/${Location.state.id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  const addNewProduct = () => {
    // setcart([...cart, Data]);
    cart.push(Data);
    console.log("hh", cart);
    let cartdetail = JSON.stringify(cart);
    localStorage.setItem("cart", cartdetail);
    // fetch("https://fakestoreapi.com/carts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     userId: 5,
    //     date: new Date(),
    //     products: [{ productId: Data?.id, quantity: 1 }],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log("userproduct", json));
  };
  console.log("singleProduct", Data, cart);
  useEffect(() => {
    GetSingleProduct();
  }, []);
  return (
    <Stack>
      <Stack sx={{ position: "sticky", top: "0" }}>
        <Header />
      </Stack>
      <Stack>
        <Stack
          direction={window.screen.width <= 600 ? "column" : "row"}
          spacing={3}
          sx={{ padding: "10px" }}
        >
          <Stack>
            <img
              src={Data?.image}
              height={window.screen.width <= 600 ? "300px" : "400px"}
              width={window.screen.width <= 600 ? "300px" : "400px"}
              style={{ alignSelf: "center" }}
            ></img>
          </Stack>
          <Stack sx={{ paddingTop: "70px" }} spacing={2}>
            <Typography sx={{ fontWeight: 400, fontSize: 30 }}>
              {Data?.title}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Rating rate={Data?.rating.rate} width="50px" />
              <Typography>Rating:{Data?.rating.rate}</Typography>
            </Stack>
            <Typography>{Data?.description}</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
              Price:{Data?.price}$
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success">
                BuyNow
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  addNewProduct();
                }}
              >
                AddtoCart
              </Button>
              <Button></Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
