# debass

Ultra minimal clone of [rebassjs](https://rebassjs.org/). Uses
styled-components under the hood.

Also includes a helper to extract extract the generated class into a stylesheet
(basically a wrapped version of the [styled-components ssr](https://styled-components.com/docs/advanced#server-side-rendering))

Still a work in progress...

## Useage

```tsx
import * as React from 'https://cdn.pika.dev/react@^16.13.1';
import { Box } from 'https://denopkg.com/xdrdak/deno-react-helpers/modules/debass/mod.ts';

const App = () => (
  <Box sx={{ color: 'hotpink', bg: 'papayawhip' }}>
    This is a box component. Use the "sx" to automatically inject styles
  </Box>
);
```

## Extracting styles for server side rendering

Since Deno is in a purely server environment and `debass` uses
`styled-components` we will need to extract the styles. `debass` provides a
quick and dirty helper function to extract the string html output and the
stylesheet.

```ts
import * as React from 'https://cdn.pika.dev/react@^16.13.1';
import { renderToStaticMarkup } from 'https://denopkg.com/xdrdak/deno-react-helpers/modules/debass/mod.ts';
// @deno-types="https://denopkg.com/xdrdak/deno-react-helpers/modules/ReactDomServer/react-dom__server.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';

const { html, styleTags } = renderToStaticMarkup(
  ReactDOMServer.renderToStaticMarkup,
  React.createElement(App),
);
```
