"use client";
import React, { useState, useEffect, useCallback } from "react";

import { Grid, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CardComponent from "./CardComponent";
import { CardModel } from "@/app/models/CardModel";
import { getCards, getRandomCards } from "@/app/api/CardApi";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CancelIcon from "@mui/icons-material/Cancel";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const RandomCardContainer = () => {
  const [cards, setCards] = useState(Array<CardModel>); 
  const [initialized, setInitialized] = useState(false);
  
  async function initCards() {
    let response = await getRandomCards();
    if (response) {
      if (response.success == true && response.cards) {
        // console.log("Response: " + JSON.stringify(response.cards));
        let cards = JSON.stringify(response.cards);
        let cardArray: Array<CardModel> = JSON.parse(cards);
        setCards(cardArray);        
        console.log("Cards: " + cards);
        setInitialized(true);
      }
    }
  }
  useEffect(() => {
    if (!initialized) {
      initCards();
    }
  });

  

  return (
    <>
      <Grid container spacing={2}>      
          {cards.map((card, index) => (
            <Grid item xs={3} key={index}>
              <CardComponent card={card} />
            </Grid>
          ))}
        </Grid>      
    </>
  );
};

export default RandomCardContainer;
