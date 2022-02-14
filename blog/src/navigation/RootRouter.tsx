import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { PostList } from "../components/PostList/PostList";
import { Post } from "../components/Post/Post";
import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { Error } from "../components/Error/Error";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
