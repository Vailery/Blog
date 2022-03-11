import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { PostList } from "../components/PostList/PostList";
import { Post } from "../components/Post/Post";
import { Login } from "../components/Login/Login";
import { Registration } from "../components/Registration/Registration";
import { Error } from "../components/Error/Error";
import { ConfirmEmail } from "../components/ConfirmEmail/ConfirmEmail";
import { AddPost } from "../components/AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux/store";
import { useEffect } from "react";
import { init } from "../redux/actions/authActions";

export const RootRouter = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:postId">
          {isLoggedIn ? <Post /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/confirm" component={ConfirmEmail} />
        <Route path="/addpost">
          {isLoggedIn ? <AddPost /> : <Redirect to="/login" />}
        </Route>
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
