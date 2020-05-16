import { ServerStyleSheet } from "./deps.ts";

const sheet = new ServerStyleSheet();

export function renderToStaticMarkup(renderer: (jsx: any) => string, jsx: any) {
  let html = null;
  let styleTags = null;
  try {
    html = renderer(sheet.collectStyles(jsx));
    styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
  return { html, styleTags };
}
