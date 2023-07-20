import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Grid, Link, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CardComponent(props: any) {
  return (
    <>
      <Grid item xs={3}>
        <Paper>
          <Card sx={{ width: 250, height: 475 }}>
            <CardHeader
              title={props.card.title}
              subheader={props.card.eyebrow}
              sx={{ height: 150 }}
            />
            <CardMedia
              component="img"
              image="/family.jpg"
              alt="FamilyImage"
              sx={{ height: 125, objectFit: "scale-down" }}
            />
            <CardContent sx={{ height: 125 }}>
              <Typography variant="body2" color="text.secondary">
                <p> {props.card.body}</p>
                <p>Order:{props.card.order}</p>
                <p>Created At: {props.card.createdAt}</p>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Link href={props.card.cta}>
                Click to Learn More
                <IconButton aria-label="cta">
                  <ArrowForwardIcon />
                </IconButton>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
}
