import React, {useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import {getMovie} from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import Spinner from "../components/cardIcons/";
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";
import { useQueries } from "@tanstack/react-query";

const WatchListPage = () => {
    const {mustWatch: movieIds} = useContext(MoviesContext);

    const watchListMovieQueries = useQueries({
        queries: movieIds.map((movieId) => {
            return {
                queryKey: ['movie', {id: movieId}],
                queryFn: getMovie,
            }
        })
    });
}