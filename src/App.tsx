import { Route, Router, Routes } from "@solidjs/router";
import Layout from "./layouts/Layout";
import Home from "./pages";
import Playlist from "./pages/Playlist";
import Proposals from "./pages/Proposals";

function Routing() {
  return (
    <Routes>
      <Route path="/" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/playlist" component={Playlist} />
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
