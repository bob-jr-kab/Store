import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import React from "react";
import { BorderColor, DeleteForever } from "@mui/icons-material";

const ProductCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300, marginTop: "20px " }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200 "
            image="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large.jpg"
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            Iphone 16 Pro max
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
