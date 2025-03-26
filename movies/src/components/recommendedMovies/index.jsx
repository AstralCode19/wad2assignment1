import React from "react";
import { getRecommendations } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Spinner from '../../components/spinner';
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const RecommendedMovies = (props) => {
    const {id} = useParams();
    const {data: recommendation, error, isPending, isError} = useQuery({
        queryKey: ['recommendation', {id: id}],
        queryFn: getRecommendations,
    })

    if (isPending) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }
console.log(recommendation);
    return (
        <>
            <Paper component="ul" sx={{...root}} style={{backgroundColor:"purple"}}>
                {recommendation.results.map((j) => (
                    <li key={j.title}>
                        <Chip label={j.title} sx={{...chip}} style={{backgroundColor:"white"}}/>
                    </li>
                ))}
            </Paper>
            <hr />
        </>
    );
};

export default RecommendedMovies;