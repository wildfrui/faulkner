import React from "react";
import { Button } from "shared/ui/Button";
import { withProviders } from "./providers";
import { routes } from "pages";
import "./styles/index.scss";

const App = () => {
  return <div>{routes}</div>;
};

export default withProviders(App);
