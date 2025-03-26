import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);  

  return (
    <>
      <Typography variant="h5" component="h3" sx={{color:"white", paddingTop:"2em"}}>
        Overview
      </Typography>
      <hr />
      <Typography variant="h6" component="p" sx={{color:"white", paddingBottom:"3em"}}>
        {movie.overview}
      </Typography>
      <hr />
      <Paper component="ul" sx={{...root, backgroundColor:"purple"}}>
        <li>
          <Chip label="Genres" sx={{...chip, backgroundColor:"black", color:"white"}} />
        </li>
        
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip, backgroundColor:"white"}} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{...root, backgroundColor:"purple"}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{backgroundColor:"white"}}/>

        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          sx={{backgroundColor:"white"}}
        />

        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
          sx={{backgroundColor:"white"}}
        />

        <Chip label={`Released: ${movie.release_date}`} sx={{backgroundColor:"white"}}/>
      </Paper>

      <Paper component="ul" sx={{...root, backgroundColor:"purple"}}>
        <li>
        	<Chip label="Production Countries" sx={{...chip, backgroundColor:"black", color:"white"}} />
        </li>
        
        {movie.production_countries.map((h) => (
          <li key={h.name}>
            <Chip label={h.name} sx={{...chip, backgroundColor:"white"}} />
          </li>
        ))}
      </Paper>
      <hr />
      <Typography variant="h5" component="h3" sx={{color:"white", paddingTop:"2.5em"}}>
        Recommendations
      </Typography>
      <hr />

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      </>
  );
};
export default MovieDetails ;