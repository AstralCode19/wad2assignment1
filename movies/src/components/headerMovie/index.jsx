import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon sx={{color:"purple"}} fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3" sx={{textAlign:"center", backgroundColor:"black", color:"white", paddingLeft:"1em", paddingRight:"1em", borderRadius:"10px"}}>
        <a href={movie.homepage}>
          <HomeIcon sx={{color:"purple"}}/>
        </a>
        <br /><hr sx={{color:"purple"}}/>
        {movie.title}
        <br />
        <span sx={{ fontSize:"1.5rem" }}>{`   "${movie.tagline}"`} </span>
        <br />
        <br />
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon sx={{color:"purple"}} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;