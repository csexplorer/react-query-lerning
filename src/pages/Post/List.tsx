import { usePosts } from "hooks";
import { Link } from "react-router-dom";

function List() {
  const { isLoading, isError, error, data = [] } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <nav style={{ padding: 24, background: "#444" }}>
        <Link to="/disabling">Disabling</Link> &nbsp;
        <Link to="/paginated">Paginated</Link> &nbsp;
        <Link to="/infinite">Infinite</Link> &nbsp;
      </nav>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
