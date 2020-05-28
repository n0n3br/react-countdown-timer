import React, { Fragment } from "react";
import "bulma/css/bulma.css";
import "./styles.css";
import Nav from "./components/Nav";
import Main from "./pages/Main";

export default function App() {
  return (
    <Fragment>
      <Nav />
      <Main />
    </Fragment>
  );
}
