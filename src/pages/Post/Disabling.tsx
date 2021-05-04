import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPosts } from "api";

function Todos() {
  const {
    isIdle,
    isLoading,
    isError,
    data,
    error,
    refetch,
    isFetching
  } = useQuery("todos", fetchPosts, {
    enabled: false,
    retryDelay: 1000
  });

  return (
    <>
      <button onClick={() => refetch()}>Fetch Todos</button>

      {isIdle ? (
        "Not ready..."
      ) : isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
          <div>{isFetching ? "Fetching..." : null}</div>
        </>
      )}
      <br />
      <Link to="/">Go back</Link>
    </>
  );
}

export default Todos;
