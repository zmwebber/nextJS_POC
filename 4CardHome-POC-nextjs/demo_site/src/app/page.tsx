import Image from "next/image";
import CardForm from "./components/CardForm/CardForm";
import CardContainer from "./components/Card/CardContainer";
import { Padding } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <h1>Next JS with NodeJS and MongoDB</h1>
        </Grid>
        <br />
        <Grid container item xs={8} justifyContent="center"  alignItems="center">
          <Grid item xs={8}>
            <h2>Add Cards</h2>
          </Grid>
          <Grid item xs={8}>
            <CardForm />
          </Grid>
        </Grid>
        <br />
        <Grid container item xs={8} justifyContent="center"  alignItems="center">
          <Grid item xs={8}>
            <h2>Card Container</h2>
          </Grid>
          <Grid item xs={8}>
            <CardContainer />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
