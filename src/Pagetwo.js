import React, { useContext } from "react";
import { contextdata } from "./Pageone";
import Grid from "@mui/material/Grid";
import { Button, Card, Container, Typography } from "@mui/material";

const Pagetwo = () => {
  const getdata = useContext(contextdata);
  console.log(getdata, "getdata");

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {getdata?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ minWidth: 275, textAlign: "center" }}>
                  <img
                    src={item.image}
                    width="260px"
                    height="250px"
                    alt="ecomeerceimage"
                  />
                  <Typography sx={{ margin: "10px" }}>{item.title}</Typography>
                  <Typography sx={{ margin: "10px" }}>${item.price}</Typography>
                  <Button variant="outlined" sx={{ margin: "10px" }}>
                    Buy Now
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Pagetwo;
