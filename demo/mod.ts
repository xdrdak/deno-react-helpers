import { React, ReactDOMServer, renderToStaticMarkup } from './deps.ts';
import { App } from "./App.tsx";

const { html, styleTags } = renderToStaticMarkup(
  ReactDOMServer.renderToStaticMarkup,
  React.createElement(App),
);

console.log(html, styleTags);
