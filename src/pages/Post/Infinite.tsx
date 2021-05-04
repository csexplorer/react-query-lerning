import React from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { infiniteFetch } from "api";

function InfiniteQuery() {
  const queryClient = useQueryClient();

  const {
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    hasPreviousPage,
    status
  } = useInfiniteQuery("users", infiniteFetch, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return false;
    },
    getPreviousPageParam: (firstPage, pages) => {
      if (firstPage.page > 0) return firstPage.page - 1;
      return false;
    },
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse()
    })
  });

  console.log(data);

  const removeManually = () => {
    queryClient.setQueryData("users", (data) => ({
      pages: data.pages.slice(1),
      pageParams: data.pageParams.slice(1)
    }));
  };
  return (
    <div>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data?.pages.map((page) => {
            return page.data.map((item) => (
              <div key={item.id}>
                {item.first_name} {item.last_name}
              </div>
            ));
          })}
          {/* {data.data.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))} */}
        </div>
      )}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        load more
      </button>
      <button
        onClick={() => {
          removeManually();
        }}
        disabled={!hasPreviousPage}
      >
        remove manually
      </button>
      <br />
      {isFetching ? <span> Loading...</span> : null}
      <br /> <Link to="/">Go back</Link>
    </div>
  );
}

export default InfiniteQuery;
