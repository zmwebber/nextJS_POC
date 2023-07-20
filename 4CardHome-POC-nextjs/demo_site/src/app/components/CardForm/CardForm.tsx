"use client";
import { Button, FormGroup, Input, Paper } from "@mui/material";
import React, { FormEvent, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import defaultProfilePic from "../../app/images/default-profile-pic.jpeg";
import { styled } from "@mui/system";
import AppStyle from "../../App.module.scss";
import TweetFormStyle from "./tweetFormStyle.module.scss";
import { CardModel } from "@/app/models/CardModel";
import { addCard } from "@/app/api/CardApi";
import { redirect } from "next/dist/server/api-utils";
import Home from "@/app/page";

function CardForm(props: any) {
  const [eyebrow, setEyebrow] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cta, setCta] = useState("");
  const [order, setOrder] = useState(0);

  function createCard(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    let itemToAdd = new CardModel();
    itemToAdd.body = body;
    itemToAdd.title = title;
    itemToAdd.eyebrow = eyebrow;
    itemToAdd.order = order;
    itemToAdd.cta = cta;
    addCard(itemToAdd).then((data) => console.log("Card data: " + data));
  }

  function orderChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const regex = /^[0-9\b]+$/;
    if (regex.test(e.target.value)) {
      let number = parseInt(e.target.value);
      setOrder(number);
    } else {
      setOrder(0);
    }
  }

  return (
    <div>
      <Paper>
        <FormGroup>
          <form onSubmit={createCard}>
            <Grid container direction="row" spacing={.5} justifyContent="center"  alignItems="center">
              <Grid item>
                <TextField
                  name="Eyebrow Text"
                  type="text"
                  id="eyebrow"
                  placeholder="Enter text above title"
                  defaultValue={eyebrow}
                  onChange={(e) => setEyebrow(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="Title"
                  type="text"
                  id="title"
                  placeholder="Title text"
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="Body"
                  type="text"
                  id="body"
                  placeholder="Body Test"
                  defaultValue={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="Call To Action"
                  type="text"
                  id="cta"
                  placeholder="URL"
                  defaultValue={cta}
                  onChange={(e) => setCta(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="Order"
                  type="number"
                  id="order"
                  placeholder="0"
                  defaultValue={order}
                  onChange={(e) => orderChange(e)}
                />
              </Grid>
            </Grid>

            <Grid container direction="column">
              {props.status === "edit" ? (
                <Button type="submit">Update Card</Button>
              ) : (
                <Button type="submit">Create Card</Button>
              )}
            </Grid>
          </form>
        </FormGroup>
      </Paper>
    </div>
  );
}

export default CardForm;
