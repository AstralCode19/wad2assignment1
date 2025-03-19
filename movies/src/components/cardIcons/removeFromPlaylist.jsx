import React, {useContext} from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { Tooltip } from "@mui/material";

const RemoveFromPlaylistIcon = ({movie}) => {
    const context = useContext(MoviesContext);

    const handleRemoveFromPlaylist = (f) => {
        f.preventDefault();
        context.removeFromPlaylist(movie);
    };

    return (
        <Tooltip title="Remove from Watch List">
        <IconButton aria-label="remove from playlist" onClick={handleRemoveFromPlaylist}>
            <DeleteIcon fontSize="large"/>
        </IconButton>
        </Tooltip>
    );
};

export default RemoveFromPlaylistIcon;