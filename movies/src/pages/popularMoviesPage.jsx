import React from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const PopularMovies = (props) => {
    const {data, error, isPending, isError} = useQuery({
        queryKey: ["popular"],
        queryFn: getPopular,
    })

    if (isPending) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return(
        <PageTemplate 
        title="Explore Popular Movies"
        movies={movies}
        action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />
        }}
        />
    );
};

export default PopularMovies;