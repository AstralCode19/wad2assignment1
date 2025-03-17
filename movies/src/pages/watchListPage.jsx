import React, {useContext} from "react";
import {getMovie} from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import Spinner from "../components/cardIcons/";