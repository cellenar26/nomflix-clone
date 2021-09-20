import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "./Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
export default AppRouter;
