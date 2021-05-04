const infiteFetch = ({ pageParam = 1 }) => {
  return fetch(
    `https://reqres.in/api/users?page=${pageParam}&per_page=2`
  ).then((res) => res.json());
};

export default infiteFetch;
