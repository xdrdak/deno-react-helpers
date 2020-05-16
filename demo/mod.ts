import * as React from "https://cdn.pika.dev/react@^16.13.1";

import { App } from "./App.tsx";
import { ReactDOMServer } from "../modules/ReactDomServer/mod.ts";
import { renderToStaticMarkup } from "../modules/debass/mod.ts";

const { html, styleTags } = renderToStaticMarkup(
  ReactDOMServer.renderToStaticMarkup,
  React.createElement(App),
);

console.log(html, styleTags);
