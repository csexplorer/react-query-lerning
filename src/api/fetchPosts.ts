const fetchPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

export default fetchPosts;
