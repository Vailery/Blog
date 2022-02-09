import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { PostList } from "../components/PostList/PostList";
import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
};
