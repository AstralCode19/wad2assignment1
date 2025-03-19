import React from "react";
import Pagination from "@mui/material/Pagination";
import { getMovies } from "../../api/tmdb-api";

export default function homePagination() {
    return (
        <Pagination count={5}/>
    );
}