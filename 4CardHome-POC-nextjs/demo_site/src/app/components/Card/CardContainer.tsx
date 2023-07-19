"use client";
import React, { useState, useEffect, useCallback } from "react";

import { Grid, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import CardComponent from "./CardComponent";
import { CardModel } from "@/app/models/CardModel";
import { getCards } from "@/app/api/CardApi";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CancelIcon from "@mui/icons-material/Cancel";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const CardContainer = () => {
  const [cards, setCards] = useState(Array<CardModel>);
  const [filteredCards, setFilteredCards] = useState(Array<CardModel>);
  const [initialized, setInitialized] = useState(false);
  const [filter, setFilter] = React.useState<string>("");

  async function initCards() {
    let response = await getCards();
    if (response) {
      if (response.success == true && response.cards) {
        console.log("Response: " + JSON.stringify(response.cards));
        let cards = JSON.stringify(response.cards);
        let cardArray: Array<CardModel> = JSON.parse(cards);
        setCards(cardArray);
        setFilteredCards(cardArray);
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

  function fifo(a: CardModel, b: CardModel) {
    if (a.order && b.order) {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
    }
    return 0;
  }

  function lifo(a: CardModel, b: CardModel) {
    if (a.order && b.order) {
      if (a.order < b.order) {
        return 1;
      }
      if (a.order > b.order) {
        return -1;
      }
    }
    return 0;
  }

  function date(a: CardModel, b: CardModel) {
    if (a.createdAt && b.createdAt) {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
    }
    return 0;
  }
  function filterCards(type: string) {
    switch (type) {
      case "fifo": {
        setFilteredCards(cards.sort(fifo).slice(0, 4));
        setFilter("fifo");
        break;
      }
      case "lifo": {
        setFilteredCards(cards.sort(lifo).slice(0, 4));
        setFilter("lifo");
        break;
      }
      case "date": {
        setFilteredCards(cards.sort(date).slice(0, 4));
        setFilter("date");
        break;
      }
      case "limit": {
        setFilteredCards(cards.slice(0, 4));
        setFilter("limit");
        break;
      }
      default: {
        setFilteredCards(cards);
        setFilter("");
        break;
      }
    }
  }
  const handleFilterToggle = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    filterCards(newAlignment);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid container item xs={12}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterToggle}
            aria-label="card sorting"
          >
            <ToggleButton value="fifo" aria-label="first in first out">
              <FirstPageIcon />
            </ToggleButton>
            <ToggleButton value="lifo" aria-label="last in first out">
              <LastPageIcon />
            </ToggleButton>
            <ToggleButton value="date" aria-label="date filter">
              <DateRangeIcon />
            </ToggleButton>
            <ToggleButton value="limit" aria-label="limit array to 4">
              <FormatAlignJustifyIcon />
            </ToggleButton>
            <ToggleButton value="" aria-label="cancel">
              <CancelIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid container item spacing={.5} xs={12}>
          {filteredCards.map((card, index) => (
            <Grid item xs={3} key={index}>
              <CardComponent card={card} />
            </Grid>
          ))}
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default CardContainer;
