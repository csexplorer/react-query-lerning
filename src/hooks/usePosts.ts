import { useQuery } from "react-query";
import { Post } from "./types";

const usePosts = () => {
  return useQuery<Post[], Error>("posts", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );
};

export default usePosts;
