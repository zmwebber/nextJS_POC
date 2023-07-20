import { Grid } from "@mui/material";
import RandomCardContainer from "../components/Card/RandomCardContainer";

export default function RandomCards() {
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
          <h1>Refresh to get new cards</h1>
        </Grid>
        <br />
        <Grid container item xs={8} justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <h2>Card Container</h2>
          </Grid>
          <Grid item xs={8}>
            <RandomCardContainer />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
  }