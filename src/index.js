"use strict";

import App from "./app";

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "./app";

const renderApp = NextApp => {
  render(
    <AppContainer>
      <App />,
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    render(
      <AppContainer>
        <NextApp />,
      </AppContainer>,
      document.querySelector('[data-js="app"]')
    );
  });
}
