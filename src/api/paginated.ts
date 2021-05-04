const paginated = (page: number = 0) =>
  fetch(
    `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
  ).then((res) => res.json());

export default paginated;
