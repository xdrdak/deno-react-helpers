# deno-react-helpers

Monorepo-ish structure of various modules that should help you build React things in Deno.

## Modules

### Debass

Ultra minimal clone of [rebassjs](https://rebassjs.org/). Uses
styled-components under the hood.

Also includes a helper to extract extract the generated class into a stylesheet
(basically a wrapped version of the [styled-components ssr](https://styled-components.com/docs/advanced#server-side-rendering))

Still a work in progress...

### ReactDomServer

Re-exported ReactDomServer with typings that actually work.

Feel free to either use the ReactDomServer bundled in `mod.ts` or just
leverage the types written in `react-dom__server.d.ts`.
