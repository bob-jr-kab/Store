import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import React from "react";
import { BorderColor, DeleteForever } from "@mui/icons-material";
import { Divider } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, marginTop: "20px " }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200 "
            image={product.image}
            alt={product.name}
          />
        </CardActionArea>
        <Divider />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>{" "}
          <Typography variant="h5" component="div">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <BorderColor />
          </Button>

          <Button size="small" color="error">
            <DeleteForever />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
