import React from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getMovies } from '../../api/tmdb-api';

function homePagination() {
  const [page, setPage] = React.useState(0)

//   const fetchProjects = (page = 0) =>
//     fetch('/api/projects?page=' + page).then((res) => res.json())

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['movie', page],
      queryFn: () => getMovies(page),
      placeholderData: keepPreviousData,
    })

    if (isPending) {
        return <Spinner />
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  

  return (
    <div>
        <div>
          {data.projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>

      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPlaceholderData && data.hasMore) {
            setPage((old) => old + 1)
          }
        }}

        disabled={isPlaceholderData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </div>
  )
}