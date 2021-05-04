import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

const Posts = React.lazy(() => import("pages/Post/List"));
const Disabling = React.lazy(() => import("pages/Post/Disabling"));
const Paginated = React.lazy(() => import("pages/Post/Paginated"));
const Post = React.lazy(() => import("pages/Post/Single"));
const Infinite = React.lazy(() => import("pages/Post/Infinite"));

const queryClient = new QueryClient();

export default function App() {
  return (
    <React.Suspense fallback="loading...">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/paginated" exact>
              <Paginated />
            </Route>
            <Route path="/infinite" exact>
              <Infinite />
            </Route>
            <Route path="/disabling" exact>
              <Disabling />
            </Route>
            <Route path="/posts/:id" exact>
              <Post />
            </Route>
            <Route path="/" exact>
              <Posts />
            </Route>
          </Switch>

          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </React.Suspense>
  );
}
