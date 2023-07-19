import { useState } from 'react';
import { addCard, removeCard, updateCard, getCards } from '../../api/CardApi';
import { CardModel } from "../../models/CardModel";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Link, Paper } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import image from '../../shared/assets/family.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function CardComponent(props: any) {
  

  return (
    <>
      <Grid item xs={3}>
        <Paper>
      <Card sx={{ width: 250, height: 500 }}>
      <CardHeader
        title={props.card.title}
        subheader={props.card.eyebrow}
        sx={{height:150}}
      />
      <CardMedia
        component="img"
        image='/family.jpg'
        alt="FamilyImage"
        sx={{height: 150}}
      />
      <CardContent  sx={{height: 150}}>
        
        <Typography variant="body2" color="text.secondary">
          {props.card.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>       
      <Link href={props.card.cta}>
        <IconButton aria-label="cta">
          <ArrowForwardIcon />
        </IconButton> 
        </Link>      
      </CardActions>
    </Card>
      </Paper></Grid>
    </>
  );
}
