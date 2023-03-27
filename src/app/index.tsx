import React from "react";

import { withProviders } from "./providers";

import { routes } from "pages";
import "./styles/index.scss";

const App = () => {
  return <div>{routes}</div>;
};

export default withProviders(App);
