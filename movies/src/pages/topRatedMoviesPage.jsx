import React from "react";
import { getTopRated } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const TopRatedMovies = (props) => {
    const{ data, error, isPending, isError} = useQuery({
        queryKey: ['toprated'],
        queryFn: getTopRated,
    })

    if (isPending) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate 
        title="Explore the Top Rated Movies!"
        movies={movies}
        action={(movie) => {
            return<AddToFavoritesIcon movie={movie} />
        }}/>
    );
};

export default TopRatedMovies;