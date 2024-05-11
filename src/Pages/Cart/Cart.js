import React, { useEffect } from "react";
import Header from "../../Common/Header/header";
import { Stack, Typography, Button } from "@mui/material";
export default function Cart() {
  let totalPrice = 0;
  let removeitem;
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart, "helloworld");
  const remove = (index) => {
    cart.splice(index, 1);
    let cartdetail = JSON.stringify(cart);
    localStorage.setItem("cart", cartdetail);
    Cart();
  };
  //   const userCart = () => {
  //     fetch("https://fakestoreapi.com/carts/user/2")
  //       .then((res) => res.json())
  //       .then((json) => console.log("hello", json));
  //   };
  //   useEffect(() => {
  //     userCart();
  //   }, []);
  return (
    <Stack sx={{ bgcolor: "#e0e0e0" }} height="100vh">
      <Header />
      <Stack
        sx={{ paddingLeft: "30px", paddingTop: "50px", paddingRight: "30px" }}
      >
        <Stack
          direction={window.screen.width >= 600 ? "row" : "column"}
          spacing={1}
        >
          <Stack width={window.screen.width >= 600 ? "80%" : "100%"}>
            <Stack
              sx={{
                borderRadius: "5px",
                padding: "10px",
                bgcolor: "white",
              }}
              //   height="10vh"
            >
              <Stack direction="row" alignItems="center">
                {" "}
                <Typography>Deliverto:</Typography>
                <Typography>Patna</Typography>
              </Stack>

              {cart?.map((item, index) => {
                totalPrice = totalPrice + item?.price;
                return (
                  <Stack
                    direction="row"
                    sx={{
                      marginTop: "10px",
                      bgcolor: "white",
                      padding: "10px",
                    }}
                    spacing={2}
                  >
                    <Stack>
                      <img src={item?.image} height="100px" width="100px" />
                    </Stack>
                    <Stack>
                      <Typography>{item?.title}</Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                        price:{item?.price}$
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained">Buy Now</Button>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "Red" }}
                          onClick={() => {
                            console.log("jjhh", index);
                            remove(index);
                          }}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Stack
            width={window.screen.width >= 600 ? "20%" : "100%"}
            sx={{
              padding: "13px",
              bgcolor: "white",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
            justifyContent="space-between"
          >
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  borderBottom: "1px solid grey",
                }}
              >
                Price Detail
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "500" }}
                >{`Price(${cart.length} items)`}</Typography>
                <Typography>{`${totalPrice}$`}</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Button variant="contained">Placeorder</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
