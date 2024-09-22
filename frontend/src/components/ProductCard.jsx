import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { React, useState } from "react";
import { BorderColor, DeleteForever } from "@mui/icons-material";
import { Backdrop, CircularProgress, Divider } from "@mui/material";

const ProductCard = ({ product, onDelete }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
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
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="h5" component="div">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small" color="primary">
            <BorderColor />
          </Button>

          <Button size="small" color="error">
            <DeleteForever onClick={onDelete} />
          </Button>

          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
