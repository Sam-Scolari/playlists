import { Route, Router, Routes } from "@solidjs/router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Playlist from "./pages";
import Proposals from "./pages/Proposals";

function Routing() {
  return (
    <Routes>
      <Route path="/" component={Layout}>
        <Route path="/home" component={Home} />
        <Route path="/" component={Playlist} />
        <Route path="/proposals" component={Proposals} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}
