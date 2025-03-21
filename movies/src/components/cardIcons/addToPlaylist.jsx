import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Tooltip } from "@mui/material";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  return (
    <Tooltip title="Add to Watch List">
    <IconButton aria-label="add to must watch" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default AddToPlaylistIcon;