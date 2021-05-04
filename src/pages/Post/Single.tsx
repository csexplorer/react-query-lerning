import { usePost } from "hooks";
import { Link, useParams } from "react-router-dom";
import { getCurrencyAmount } from "utils";
import isEmpty from "lodash/isEmpty";

function Single() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, error, data } = usePost({ id: Number(id) });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error.message}</div>;

  if (isEmpty(data)) return <div>data not found</div>;

  return (
    <div>
      <h1>{getCurrencyAmount({ value: 123000, currency: "usd" })}</h1>
      <h1>{getCurrencyAmount({ value: 123000, currency: "uzs" })}</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Single;
