import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { PostList } from "../components/PostList/PostList";
import { Login } from "../components/Login/Login";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
