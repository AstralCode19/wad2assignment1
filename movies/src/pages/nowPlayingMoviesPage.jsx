import React from "react";
import { getNowPlaying } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const NowPlayingMovies = (props) => {
    const {data, error, isPending, isError} = useQuery({
        queryKey: ['nowplaying'],
        queryFn: getNowPlaying,
    })

    if(isPending) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return(
        <PageTemplate
        title="See What Movies are in Cinemas Now!"
        movies={movies}
        action={(movie) => {
            return <AddToPlaylistIcon movie={movie} />
        }} 
        />
    );
};

export default NowPlayingMovies;