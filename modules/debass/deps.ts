import styledPkg from "https://dev.jspm.io/styled-components";

// @ts-ignore
const styled = styledPkg.default;
// @ts-ignore
const ServerStyleSheet = styledPkg.ServerStyleSheet;

export { styled, ServerStyleSheet };

// @deno-types="./styled-system__css.d.ts"
import * as pkg from "https://cdn.pika.dev/@styled-system/css@^5.1.4";
import shouldForwardProp from "https://cdn.pika.dev/@styled-system/should-forward-prop";
const { css, get } = pkg;

export { css, get, shouldForwardProp }
