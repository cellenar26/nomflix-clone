import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Header from "./Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="https://cellenar26.github.io/popcorn-clone/" exact component={Home}></Route>
        <Route path="https://cellenar26.github.io/popcorn-clone/tv" component={TV}></Route>
        <Route path="https://cellenar26.github.io/popcorn-clone/search" component={Search}></Route> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/show/:id" component={Detail}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
export default AppRouter;
