import { useQuery } from "react-query";
import { Post } from "./types";

const usePost = ({ id }: { id: number }) => {
  return useQuery<Post, Error>(["post", id], () =>
    fetch("https://jsonplaceholder.typicode.com/posts/" + id).then((res) =>
      res.json()
    )
  );
};

export default usePost;
