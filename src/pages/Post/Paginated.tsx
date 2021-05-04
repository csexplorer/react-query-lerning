import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { paginated } from "api";

function PaginatedQueries() {
  const [page, setPage] = useState<number>(0);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData
  } = useQuery(["todos_paginated", page], () => paginated(page), {
    keepPreviousData: true,
    retryDelay: 1000
  });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.data.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && data && data.totalPages > page) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || (data && data.totalPages < page)}
      >
        Next Page
      </button>
      <br />
      {isFetching ? <span> Loading...</span> : null}
      <br /> <Link to="/">Go back</Link>
    </div>
  );
}

export default PaginatedQueries;
