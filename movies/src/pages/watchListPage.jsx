import React, {useContext} from "react";
import PageTemplate from "../components/templateMovieListPage";
import {getMovie} from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import Spinner from "../components/spinner";
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

    const isPending = watchListMovieQueries.find((n) => n.isPending === true);
    if (isPending) {
        return <Spinner />;
    }

    const movies = watchListMovieQueries.map((r) => {
        r.data.genre_ids = r.data.genres.map(ge => ge.id)
        return r.data
    });

    return (
        <PageTemplate 
        title = "Watch List"
        movies = {movies}
        action = {(movie) => {
            return (
                <>
                    <RemoveFromPlaylist movie={movie} />
                </>
            );
        }}
        />
    );
};

export default WatchListPage;